<script setup lang="ts">
const { locale } = useI18n();

const { data: page } = await useAsyncData(
    `home-${locale.value}`,
    () => {
        const collection = ("hero_" + locale.value) as "hero_fr" | "hero_en";
        return queryCollection(collection).first();
    },
    { watch: [locale] },
);
</script>

<template>
    <UPageHero v-if="page" :title="page.title" :description="page.description" :links="page.links">
        <template #headline>
            <NuxtImg src="/logo.png" class="w-48 mx-auto" />
        </template>
    </UPageHero>
    <UContainer class="py-8">
        <UPageGrid v-if="page">
            <Feature
                v-for="feature of page.features"
                :title="feature.title"
                :description="feature.description"
                :image="feature.image"
            />
        </UPageGrid>
    </UContainer>

    <UPageSection id="about" :title="page.about.title" :description="page.about.description" class="bg-muted" />

    <UPageSection :title="page.contact.title" :links="page.contact.links" />
</template>
