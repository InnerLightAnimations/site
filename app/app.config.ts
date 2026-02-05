export default defineAppConfig({
    contact: "contact@innerlightanimations.fr",

    ui: {
        colors: {
            primary: "primary",
            neutral: "slate",
        },

        button: {
            compoundVariants: [
                {
                    color: "primary",
                    variant: "solid",
                    class: "text-default",
                },
            ],
        },
        card: {
            variants: {
                variant: {
                    soft: {
                        root: "bg-muted",
                    },
                },
            },
        },
        pageSection: {
            slots: {
                container: "py-16!",
                title: "text-3xl!",
            },
        },
        pageHero: {
            slots: {
                container: "py-24!",
                title: "text-5xl!",
            },
        },
        blogPost: {
            variants: {
                variant: {
                    soft: {
                        root: "bg-muted",
                        title: "text-primary-50",
                    },
                },
            },
        },
    },
});
