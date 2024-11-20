import * as runtime from '$lib/paraglide/runtime';
import { createI18n } from '@inlang/paraglide-sveltekit';
import { init, register } from 'svelte-i18n';
import { writable } from 'svelte/store';

// Define types for locales
type Locale = 'en' | 'es';

// Register languages and their translation files
register('en', () => import('$lib/lang/en.json'));
register('es', () => import('$lib/lang/es.json'));

// Set the default language
init({
  fallbackLocale: 'en',
  initialLocale: 'en',
});

// Create the writable store for the current locale
export const currentLocale = writable<Locale>('en');

export const i18n = createI18n(runtime);
