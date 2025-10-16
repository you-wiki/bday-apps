import { ChatMessage, Role } from "./texts";

const CPS = 20;
const DELAY_MS = { user: 3000, assistant: 8000 } as const;
const VOID_TAGS = new Set(['br','hr','img','input','meta','link','source','col','area','embed','param','track','wbr']);

function countVisibleChars(html: string): number {
  let i = 0, n = 0;
  while (i < html.length) {
    const c = html[i];
    if (c === '<') {                      // skip tags entirely
      const j = html.indexOf('>', i + 1);
      if (j < 0) break;
      i = j + 1;
      continue;
    }
    if (c === '&') {                      // count entities as one
      const j = html.indexOf(';', i + 1);
      if (j > -1) { n++; i = j + 1; continue; }
    }
    n++; i++;
  }
  return n;
}

function takeHtmlByVisibleChars(html: string, take: number): string {
  let i = 0, n = 0, out = '';
  const stack: string[] = [];

  while (i < html.length && n < take) {
    const c = html[i];
    if (c === '<') {
      const j = html.indexOf('>', i + 1);
      if (j < 0) break;
      const tagInner = html.slice(i + 1, j).trim();
      out += html.slice(i, j + 1);

      if (!tagInner.startsWith('!')) {
        if (tagInner.startsWith('/')) {
          const name = tagInner.slice(1).split(/\s+/)[0].toLowerCase();
          if (stack.at(-1) === name) stack.pop();
        } else {
          const name = tagInner.split(/\s+/)[0].replace(/\/$/, '').toLowerCase();
          const selfClosing = tagInner.endsWith('/') || VOID_TAGS.has(name);
          if (!selfClosing) stack.push(name);
        }
      }
      i = j + 1;
      continue;
    }

    if (c === '&') {
      const j = html.indexOf(';', i + 1);
      if (j > -1) { if (n + 1 > take) break; out += html.slice(i, j + 1); i = j + 1; n++; continue; }
    }

    out += c; i++; n++;
  }
  for (let k = stack.length - 1; k >= 0; k--) out += `</${stack[k]}>`;
  return out;
}

/**
 * Returns the chat up to elapsedMs, revealing text at 20 cps,
 * skipping tag characters, adding per-role delays, and inserting
 * a typing indicator during assistant delays.
 */
export function projectChat(messages: ChatMessage[], elapsedMs: number): ChatMessage[] {
  const out: ChatMessage[] = [];
  let t = 0;

  for (const m of messages) {
    const preDelay = DELAY_MS[m.role];
    const len = countVisibleChars(m.text);
    const typeMs = Math.ceil((len / CPS) * 1000);

    const typingStart = t + preDelay;
    const end = typingStart + typeMs;

    if (elapsedMs < typingStart) {
      // message not started; show typing bubble only if next is assistant
      if (m.role === 'assistant') {
        out.push({ role: 'assistant', text: '<span class="typing-indicator" aria-live="polite">●</span>' });
      }
      break;
    }

    if (elapsedMs >= end) {
      out.push(m); // full message done
      t = end;
      continue;
    }

    // we are mid-typing this message
    const progressedMs = elapsedMs - typingStart;
    const visible = Math.max(0, Math.min(len, Math.floor((progressedMs / 1000) * CPS)));
    const partial = takeHtmlByVisibleChars(m.text, visible);
    out.push({ role: m.role, text: partial });
    break;
  }

  return out;
}


export function txtLength(msgs: ChatMessage[]): number {
  return msgs.reduce((sum, m) => sum + countVisibleChars(m.text), 0);
}

export function sentContent(msgs: ChatMessage[]): ChatMessage[] {
    if (msgs.length === 0) return msgs;
    if (msgs[msgs.length - 1].role === 'user') return msgs.slice(0, -1);
    return msgs;

}