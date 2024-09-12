<template>
  <div class="container flex flex-col items-center justify-between h-full mx-auto px-4 py-8 border rounded-sm flex-1 mt-2">
    <div class="items-center mt-16 flex flex-col text-center mb-8">
      <NuxtLink to="/"
        class="logo flex flex-col items-center justify-center transition-all mb-4">
        <h3 class="font-mono text-3xl font-bold">SISTEP</h3>
      </NuxtLink>
      <p class="text-muted-foreground">Ferramenta de aplicação de testes psicológicos</p>
    </div>

    <div class="space-y-4 w-full max-w-md">
      <Button @click="startTest" class="w-full text-lg py-4 flex items-center justify-center">
        Novo Teste
      </Button>
      <Button @click="showQRCodeScanner" class="w-full text-lg py-4 flex items-center justify-center">
        Escanear QR Code
      </Button>
      <Button @click="enterTestCode" class="w-full text-lg py-4 flex items-center justify-center">
        Código do Teste
      </Button>
    </div>

    <p class="mt-8 text-sm text-center text-muted-foreground">
      Versão 1.0.0
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTestStore } from '~/stores/test'
import { Button } from '~/components/ui/button'

const router = useRouter()
const testStore = useTestStore()

const isQRCodeScannerVisible = ref(false)
const isTestCodeDialogOpen = ref(false)

const startTest = () => {
  testStore.initializeNewTest()
  router.push('/DASS-21')
}

const showQRCodeScanner = () => {
  isQRCodeScannerVisible.value = true
}

const enterTestCode = () => {
  isTestCodeDialogOpen.value = true
}
</script>