import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
  state: () => ({
    currentTest: null,
    questions: [],
    answers: {},
    fontSize: 'base', // Tamanho padrão
  }),
  actions: {
    initializeNewTest() {
      this.currentTest = { id: 'new' }
      this.questions = []
      this.answers = {}
    },
    async loadTestFromQRCode(qrCodeData) {
      const testData = await fetchTestFromAPI(qrCodeData)
      this.currentTest = testData
      this.questions = testData.questions
      this.answers = {}
    },
    async loadTestFromCode(testCode) {
      const testData = await fetchTestFromAPI(testCode)
      this.currentTest = testData
      this.questions = testData.questions
      this.answers = {}
    },
    setAnswer(questionId, answer) {
      this.answers[questionId] = answer
    },
    setFontSize(size) {
      this.fontSize = size; // Apenas atualiza o estado
    },
  },
})

async function fetchTestFromAPI(testIdentifier) {
  // Implementar chamada à API para buscar os dados do teste
  // Retornar os dados do teste
}