/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
	magnification?: number;
	threshold?: number;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	dataLayer?: any;
}
