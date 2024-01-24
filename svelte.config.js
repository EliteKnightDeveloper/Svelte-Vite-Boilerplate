import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { resolve } from 'path';

export default {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: false
		}),
		alias: {
			$components: resolve('./src/components')
		}
	}
};
