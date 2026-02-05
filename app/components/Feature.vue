<script setup lang="ts">
defineProps<{
    title: string;
    description: string;
    image: string;
}>();
</script>

<template>
    <div class="flex flex-col gap-4 h-full">
        <UCard variant="soft" class="flex-1">
            <h2 class="font-semibold text-xl text-primary-50 mb-2">{{ title }}</h2>
            <p>{{ description }}</p>
        </UCard>
        <NuxtImg :src="image" class="rounded-lg aspect-video" />
    </div>
</template>
