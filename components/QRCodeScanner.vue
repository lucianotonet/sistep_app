<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-4 rounded-lg">
      <h2 class="text-xl font-bold mb-4">Escaneie o QR Code</h2>
      <qrcode-stream @decode="onDecode" @init="onInit"></qrcode-stream>
      <Button @click="$emit('close')" class="mt-4">Fechar</Button>
    </div>
  </div>
</template>

<script setup>
import { QrcodeStream } from 'vue-qrcode-reader'
import { Button } from '~/components/ui/button'

const emit = defineEmits(['scanned', 'close'])

const onDecode = (decodedString) => {
  emit('scanned', decodedString)
}

const onInit = async (promise) => {
  try {
    await promise
  } catch (error) {
    if (error.name === 'NotAllowedError') {
      console.error('User denied camera access')
    } else if (error.name === 'NotFoundError') {
      console.error('No suitable camera device found')
    } else if (error.name === 'NotSupportedError') {
      console.error('Secure context required (HTTPS, localhost)')
    } else if (error.name === 'NotReadableError') {
      console.error('Camera already in use')
    } else if (error.name === 'OverconstrainedError') {
      console.error('Installed cameras are not suitable')
    } else if (error.name === 'StreamApiNotSupportedError') {
      console.error('Stream API is not supported in this browser')
    } else {
      console.error(error)
    }
  }
}
</script>