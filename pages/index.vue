<template>
  <main class="flex flex-1 flex-col items-center justify-center">
    <p class="hints"></p>
    <div>
      <p class="output"></p>
    </div>
    <div class="flex gap-2">
      <NuxtLink to="/DASS-21">
        <Button variant="default" size="xs">Iniciar teste</Button>
      </NuxtLink>
    </div>
  </main>
</template>

<script setup>
import { Button } from '@/components/ui/button';
</script>