/**
 * @license MIT
 */

/// <reference lib="dom"/>

declare module 'xterm' {
	type LinkMatcherHandler = (event: MouseEvent, uri: string) => boolean | void;

	export class Terminal {
		cols: number;

		/**
		 * Creates a new `Terminal` object.
		 *
		 * @param {object} options An object containing a set of options.
		 */
		constructor(options?: any);
	}
}
