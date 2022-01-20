import path from 'path';
import { defineUserConfig } from 'vuepress-vite';
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite';
import sidebar from './sidebar';

const config = defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
	bundler: '@vuepress/vite',
	templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
	templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
	lang: 'en-US',
	title: 'Nate Bot Support',
	description: 'The official support website for Nate Bot, which includes guides and FAQs regarding the bot.',
	head: [
		['meta', { charset: 'utf-8' }],
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
		['link', { rel: 'icon', href: 'https://i.imgur.com/AZu5cyY.png' }],
		['meta', { name: 'theme-color', content: '#76d6ff' }],
		['meta', { name: 'twitter:card', content: 'summary' }],
		['meta', { property: 'og:title', content: 'Nate Bot Support' }],
		['meta', { property: 'og:description', content: 'The official support website for Nate Bot, which includes guides and FAQs regarding the bot.' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:url', content: 'https://support.natebot.xyz/' }],
		['meta', { property: 'og:locale', content: 'en_US' }],
		['meta', { property: 'og:image', content: 'https://i.imgur.com/AZu5cyY.png' }],
	],
	theme: path.join(__dirname, 'theme', 'index.ts'),
	themeConfig: {
		contributors: false,
		sidebar,
		repo: 'ntm-development/natebot-guide',
		docsDir: 'guide',
		sidebarDepth: 3,
		editLinks: true,
		lastUpdated: true,
		navbar: [
			{
				text: 'Website',
				link: 'https://natebot.xyz/',
			},
			{
				text: 'Discord Server',
				link: 'https://discord.com/invite/G2rb53z',
			},
			{
				text: 'Invite Bot',
				link: 'https://natebot.xyz/invite',
			}
		],
		themePlugins: {
			mediumZoom: false,
		},
	},
	plugins: [],
});

const { ALGOLIA_DOCSEARCH_API_KEY, GOOGLE_ANALYTICS_ID, NODE_ENV } = process.env;

if (NODE_ENV === 'production' && ALGOLIA_DOCSEARCH_API_KEY && GOOGLE_ANALYTICS_ID) {
	config.plugins.push(
		[
			'@vuepress/plugin-docsearch',
			{
				apiKey: ALGOLIA_DOCSEARCH_API_KEY,
				indexName: 'natebot',
				placeholder: 'Search guide',
			},
		],
		[
			'@vuepress/plugin-google-analytics',
			{ id: GOOGLE_ANALYTICS_ID },
		],
	);
}

export default config;
