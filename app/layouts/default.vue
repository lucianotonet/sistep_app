<template>
    <div class="min-h-dvh text-foreground bg-background flex flex-col p-4" v-cloak>
        <header class="flex h-auto items-center gap-4 px-2 md:px-4 lg:h-[60px] lg:px-6 sticky top-0 bg-background z-20">
            <Logo />
            <DarkModeToggle class="ml-auto"></DarkModeToggle>
        </header>

        <slot />


    </div>
</template>

<script setup>
import Logo from '@/components/Logo.vue';
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