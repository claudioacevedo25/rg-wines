// @ts-check
import { defineConfig } from "astro/config"

import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
	site: "https://rgwines.com",
	image: {
		domains: ["images.unsplash.com"],
	},

	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
		routing: {
			prefixDefaultLocale: false,
		},
	},

	integrations: [icon()],
})
