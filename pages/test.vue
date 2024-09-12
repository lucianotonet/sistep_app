<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">{{ currentTest.name }}</h1>
    
    <div v-for="(question, index) in questions" :key="question.id" class="mb-6">
      <h2 class="text-xl font-semibold mb-2">Questão {{ index + 1 }}</h2>
      <p class="mb-4">{{ question.text }}</p>
      <div class="space-y-2">
        <div v-for="option in question.options" :key="option.value" class="flex items-center">
          <input
            type="radio"
            :id="`question-${question.id}-${option.value}`"
            :name="`question-${question.id}`"
            :value="option.value"
            v-model="answers[question.id]"
            @change="setAnswer(question.id, option.value)"
          >
          <label :for="`question-${question.id}-${option.value}`" class="ml-2">{{ option.label }}</label>
        </div>
      </div>
    </div>
    
    <Button @click="submitTest" class="mt-6">Enviar Respostas</Button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useTestStore } from '~/stores/test'
import { Button } from '~/components/ui/button'

const router = useRouter()
const testStore = useTestStore()

const currentTest = computed(() => testStore.currentTest)
const questions = computed(() => testStore.questions)
const answers = computed(() => testStore.answers)

const setAnswer = (questionId, answer) => {
  testStore.setAnswer(questionId, answer)
}

const submitTest = async () => {
  // Implementar lógica para enviar as respostas para a API
  await submitTestToAPI(currentTest.value.id, answers.value)
  router.push('/results')
}

async function submitTestToAPI(testId, answers) {
  // Implementar chamada à API para enviar as respostas do teste
}
</script>