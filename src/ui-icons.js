// Original, local line icons keep the interface consistent and available offline.
const paths={
 'play':'<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4Z"/>',
 'folder':'<path d="M3 7V5a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm0 2h18"/>',
 'bookmark':'<path d="M6 3h12v19l-6-4-6 4Z"/>',
 'print':'<path d="M7 8V3h10v5M7 17H3V9h18v8h-4M7 14h10v7H7Z"/><path d="M17 11h1"/>',
 'search':'<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/>',
 '⌂':'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/>',
 '▥':'<path d="M12 5C9 3 5 3 2 4v15c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1Zm0 0v15M5 8h4M5 12h4m6-4h4m-4 4h4"/>',
 '▣':'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 3h6v3H9zm0 8h6m-6 4h4"/>',
 '▧':'<path d="M14 3H5v18h14V8Zm0 0v5h5M8 12h8m-8 4h6"/>',
 '✓':'<path d="m5 12 4 4L19 6"/><path d="M20 12a8 8 0 1 1-8-8"/>',
 '♛':'<path d="m3 6 4 4 5-6 5 6 4-4-3 12H6ZM7 21h10"/>',
 '🏆':'<path d="M7 3h10v7a5 5 0 0 1-10 0ZM7 5H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4m-5 3v6m-4 0h8"/>',
 '∑':'<rect x="4" y="2" width="16" height="20" rx="3"/><path d="M8 6h8M8 11h1m6 0h1m-8 4h1m6 0h1m-8 4h1m6 0h1"/>',
 '▤':'<path d="M14 3H5v18h14V8Zm0 0v5h5M8 12h8m-8 4h6"/>',
 '★':'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>',
 '♡':'<path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
 '◇':'<path d="m3 8 4-5h10l4 5-9 13Zm0 0h18M8 8l4 13 4-13M8 8l4-5 4 5"/>',
 '☾':'<path d="M20.8 13.2A9 9 0 0 1 10.8 3 9 9 0 1 0 20.8 13.2Z"/>',
 '☀':'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
 '⋯':'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
 'back':'<path d="m14 5-7 7 7 7"/>',
 'arrow':'<path d="M4 12h16m-7-7 7 7-7 7"/>',
 '↻':'<path d="M20 7a9 9 0 1 0 1 8M20 3v5h-5"/>'
};
export function uiIcon(key){return paths[key]?`<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[key]}</svg>`:key;}
