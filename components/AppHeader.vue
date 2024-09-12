<template>
    <header class="flex h-auto items-center gap-4 md:px-4 lg:h-[60px] lg:px-6 sticky top-0 bg-background z-20">
        <NuxtLink to="/"
            class="logo flex flex-col items-center justify-center transition-all h-8 w-auto border rounded-sm p-2">
            <h3 v-if="miniLogo" class="font-mono text-2xl font-bold">S</h3>
            <h3 v-else class="font-mono text-2xl font-bold">SISTEP</h3>
        </NuxtLink>
        <div class="flex flex-row justify-center items-center ml-auto">
            <div v-if="miniLogo" class="flex flex-row items-center">
                <Button @click="changeFontSize('decrease')" size="icon" variant="ghost" class="text-sm">-</Button>
                <span :class="`text-${testStore.fontSize}`"
                    class="overflow-hidden text-center font-mono self-center w-6 -my-4">A</span>
                <Button @click="changeFontSize('increase')" size="icon" variant="ghost" class="text-lg">+</Button>
            </div>
            <DarkModeToggle></DarkModeToggle>
        </div>
    </header>
</template>

<script setup>
import DarkModeToggle from './DarkModeToggle.vue';
import { useTestStore } from '~/stores/test';
import Button from './ui/button/Button.vue';
import { onMounted } from 'vue';

const testStore = useTestStore();
const { miniLogo } = defineProps({
    miniLogo: {
        type: Boolean,
        default: true
    }
});
const changeFontSize = (direction) => {
    const sizes = ['2xs', 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'];
    const currentIndex = sizes.indexOf(testStore.fontSize);
    let newSize;

    if (direction === 'increase' && currentIndex < sizes.length - 1) {
        newSize = sizes[currentIndex + 1];
    } else if (direction === 'decrease' && currentIndex > 0) {
        newSize = sizes[currentIndex - 1];
    } else {
        newSize = testStore.fontSize; // Não muda se não houver alteração
    }

    testStore.setFontSize(newSize);
    localStorage.setItem('fontSize', newSize); // Salvar no localStorage
};

onMounted(() => {
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        testStore.setFontSize(savedFontSize);
    }
});
</script>