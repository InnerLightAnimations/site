// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/image", "@nuxtjs/i18n"],

    devtools: {
        enabled: true,
    },

    css: ["~/assets/css/main.css"],

    routeRules: {
        "/": { prerender: true },
    },

    i18n: {
        defaultLocale: "fr",
        locales: [
            { code: "en", name: "English", language: "en-US", file: "en.json" },
            {
                code: "fr",
                name: "Français",
                language: "fr-FR",
                file: "fr.json",
            },
        ],
        langDir: "locales",
        strategy: "prefix_except_default",
    },

    app: {
        baseURL: "/site/",
    },

    compatibilityDate: "2025-01-15",
});
