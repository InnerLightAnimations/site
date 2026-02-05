<script setup lang="ts">
import { withoutLeadingSlash } from "ufo";

const route = useRoute();
const { locale } = useI18n();

const slug = computed(() => withoutLeadingSlash(String(route.params.slug)));

const { data: post } = useAsyncData(
    `article-${slug.value}-${locale.value}`,
    () => {
        const collection = ("blog_" + locale.value) as "blog_fr" | "blog_en";

        return queryCollection(collection).path(route.path).first();
    },
    { watch: [locale] },
);
</script>

<template>
    <UContainer class="mt-8">
        <ContentRenderer v-if="post" :value="post" />
    </UContainer>
</template>
