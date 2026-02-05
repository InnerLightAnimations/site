<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();

const { data: posts } = useAsyncData(
    `posts-${locale.value}`,
    () => {
        const collection = ("blog_" + locale.value) as "blog_fr" | "blog_en";

        return queryCollection(collection).all();
    },
    { watch: [locale] },
);
</script>
<template>
    <UContainer class="pt-8">
        <UBlogPosts v-if="posts">
            <UBlogPost v-for="post of posts" variant="soft" v-bind="post" :to="localePath(post.path)" />
        </UBlogPosts>
    </UContainer>
</template>
