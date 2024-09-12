<template>
    <div :class="`text-${testStore.fontSize}`" class="min-h-dvh text-foreground bg-background flex flex-col p-4"
        v-cloak>
        <AppHeader :miniLogo="false" />
        <slot />
        <AppFooter />
    </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import { useTestStore } from '~/stores/test';

const testStore = useTestStore();
</script>