
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/about" | "/contact" | "/property" | "/property/[id]" | "/services" | "/services/asset-tagging-tracking" | "/services/plant-machinery-valuations" | "/services/property-management" | "/services/property-valuations" | "/signin";
		RouteParams(): {
			"/property/[id]": { id: string }
		};
		LayoutParams(): {
			"/": { id?: string };
			"/about": Record<string, never>;
			"/contact": Record<string, never>;
			"/property": { id?: string };
			"/property/[id]": { id: string };
			"/services": Record<string, never>;
			"/services/asset-tagging-tracking": Record<string, never>;
			"/services/plant-machinery-valuations": Record<string, never>;
			"/services/property-management": Record<string, never>;
			"/services/property-valuations": Record<string, never>;
			"/signin": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/contact" | `/property/${string}` & {} | "/services" | "/services/asset-tagging-tracking" | "/services/plant-machinery-valuations" | "/services/property-management" | "/services/property-valuations" | "/signin";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/tcp.jpeg" | string & {};
	}
}