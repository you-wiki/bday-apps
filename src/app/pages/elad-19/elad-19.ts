import { Component, computed, ElementRef, viewChild } from '@angular/core';
import { buffer, bufferCount, delay, filter, interval, map } from 'rxjs';
import { chatMessages } from './texts';
import { projectChat, sentContent, txtLength } from './typing-logic';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elad-19',
  imports: [CommonModule],
  templateUrl: './elad-19.html',
  styleUrl: './elad-19.scss',
})
export default class Elad19 {
  readonly content$ = interval(50).pipe(
    delay(5000),
    map((i) => projectChat(chatMessages, i * 50))
  );

  readonly scrollable = viewChild('scrollable', { read: ElementRef });

  readonly content = toSignal(this.content$, { initialValue: [] as typeof chatMessages });
  readonly sentContent = computed(() => this.getSentContent());
  readonly currentUserMessage = computed(() => this.getCurrentUserMessage());

  getSentContent() {
    // returns from this.content() all messages, but if the last message is from the user, it drops it
    const msgs = this.content();
    if (msgs.length === 0) return msgs;
    if (msgs[msgs.length - 1].role === 'user') return msgs.slice(0, -1);
    return msgs;
  }

  getCurrentUserMessage() {
    // returns the last message if it's from the user, otherwise user message with empty text
    const msgs = this.content();
    if (msgs.length === 0) return { role: 'user', text: '' };
    const last = msgs[msgs.length - 1];
    if (last.role === 'user') return last;
    return { role: 'user', text: '' };
  }

  constructor() {
    this.content$
      .pipe(
        bufferCount(2, 1),
        map(([a, b]) => [txtLength(sentContent(a)), txtLength(sentContent(b))] as const),
        filter(([a, b]) => a !== b),
        takeUntilDestroyed()
      )
      .subscribe(([a, b]) => {
        const el = this.scrollable()?.nativeElement as HTMLDivElement;
        if (!el) return;
        // scroll to bottom with smooth behavior
        el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
      });
  }
}
