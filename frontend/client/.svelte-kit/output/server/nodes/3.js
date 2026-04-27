

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.U9PSBd6D.js","_app/immutable/chunks/z4Zar4gR.js","_app/immutable/chunks/CsaauQz1.js","_app/immutable/chunks/Cu4KaFVL.js"];
export const stylesheets = ["_app/immutable/assets/3.C0BAIZy1.css"];
export const fonts = [];
