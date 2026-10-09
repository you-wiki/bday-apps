import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

async function clearLegacyCaches(): Promise<void> {
  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((registration) => registration.unregister()));
  }

  if ('caches' in globalThis) {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
  }
}

clearLegacyCaches()
  .catch((error: unknown) => console.error('Failed to clear legacy browser caches.', error))
  .finally(() => {
    bootstrapApplication(App, appConfig).catch((error: unknown) => console.error(error));
  });
