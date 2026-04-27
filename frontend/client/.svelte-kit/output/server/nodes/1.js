

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CIYRBvkV.js","_app/immutable/chunks/Bldlvh4W.js","_app/immutable/chunks/DqCHBP3T.js","_app/immutable/chunks/CsaauQz1.js"];
export const stylesheets = [];
export const fonts = [];
