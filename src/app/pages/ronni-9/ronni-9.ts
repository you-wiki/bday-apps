import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ronni-9',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './ronni-9.html',
  styleUrl: './ronni-9.scss',
})
export default class Ronni9 {
  protected readonly isOpen = signal(false);
  private readonly cardHeading = viewChild<ElementRef<HTMLHeadingElement>>('cardHeading');

  protected openCard(): void {
    this.isOpen.set(true);
    queueMicrotask(() => this.cardHeading()?.nativeElement.focus());
  }
}
