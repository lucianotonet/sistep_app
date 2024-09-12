<template>
    <div class="min-h-dvh text-foreground bg-background flex flex-col p-4" v-cloak>
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
import { ref, onMounted, computed } from 'vue';

const isDark = ref(false)

onMounted(async () => {
    isDark.value = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)
    document.documentElement.classList.toggle('dark', isDark.value)
    document.body.classList.toggle('dark', isDark.value)
});
</script>

<style>
[v-cloak] {
    display: none !important;
    /* Added !important to force the override */
}
</style>