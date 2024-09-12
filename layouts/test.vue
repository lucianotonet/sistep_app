<template>
    <div :class="`text-${testStore.fontSize}`" class="min-h-dvh text-foreground bg-background flex flex-col p-4"
        v-cloak>
        <AppHeader :miniLogo="true" />
        <div
            class="w-full border mt-2 md:mt-0 bg-primary-foreground/50 flex flex-1 flex-col items-center justify-center leading-tight select-none p-4 rounded-sm">
            <slot />
        </div>
        <AppFooter />
    </div>
</template>

<script setup>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import { useTestStore } from '~/stores/test';

const testStore = useTestStore();
</script>