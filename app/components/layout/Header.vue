<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { en, fr } from "@nuxt/ui/locale";

const { locale, setLocale, t } = useI18n();
const localePath = useLocalePath();

const items = computed<NavigationMenuItem[]>(() => [
    {
        label: t("about"),
        to: localePath("/#about"),
    },
    {
        label: t("work"),
        to: localePath("/blog"),
    },
]);
</script>

<template>
    <UHeader title="InnerLight" :to="localePath('/')">
        <UNavigationMenu :items="items" />
        <template #right>
            <ULocaleSelect
                v-model="locale"
                :locales="[en, fr]"
                variant="ghost"
                @update:modelValue="setLocale($event as 'fr' | 'en')"
            />
        </template>
        <template #body>
            <UNavigationMenu :items="items" />
        </template>
    </UHeader>
</template>
