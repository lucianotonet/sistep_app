<template>
  <main class="flex flex-1 flex-col items-center justify-center leading-tight select-none p-4 border">
    <transition name="fade" mode="out-in">
      <div v-if="currentQuestion < questions.length" :key="'question-' + currentQuestion"
        class="flex flex-col text-left gap-4 w-full max-w-72 md:max-w-xl">
        <p class="mb-4 text-xs text-muted-foreground">Questão {{ currentQuestion + 1 }} de {{ questions.length }}</p>
        <p class="mb-4 text-2xl">
          <small>Na última semana...</small><br />
          {{ questions[currentQuestion].text }}
        </p>
        <RadioGroup v-model="selectedOption">
          <div v-for="(option, index) in options" :key="index" class="mb-2 flex gap-2 items-center">
            <RadioGroupItem :id="'option-' + index" :value="String(index)" />
            <Label :for="'option-' + index" class="ml-2 w-full text-left cursor-pointer">{{ option }}</Label>
          </div>
        </RadioGroup>
        <div class="flex gap-4">
          <Button v-if="currentQuestion > 0" @click="goBack" variant="link" size="sm">← Voltar</Button>
          <Button @click="answerQuestion" variant="default" size="sm" :disabled="selectedOption === null">Continuar
            →</Button>
        </div>
      </div>
      <div v-else :key="'results'" class="flex flex-col items-center text-center p-4 rounded shadow-lg">
        <p class="mb-4 text-2xl font-bold">Questionário concluído!</p>
        <p class="mb-2 text-lg">Resultados:</p>
        <div class="w-full max-w-md">
          <BarChart :data="resultsData" :options="chartOptions" />
        </div>
        <div class="mt-4">
          <p class="text-lg">Depressão: <strong>{{ results.depression }}</strong></p>
          <p class="text-lg">Ansiedade: <strong>{{ results.anxiety }}</strong></p>
          <p class="text-lg">Estresse: <strong>{{ results.stress }}</strong></p>
        </div>
        <div class="mt-6">
          <Button @click="restartTest" variant="secondary" size="sm">↺ &nbsp; Reiniciar Teste</Button>
          <Button @click="shareResults" variant="default" size="sm" class="ml-2">📤 &nbsp; Compartilhar
            Resultados</Button>
        </div>
      </div>
    </transition>
  </main>
</template>

<script setup>
import { ref, watch } from 'vue';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import BarChart from '@/components/BarChart'; // Assumindo que você tem um componente de gráfico de barras

const questions = ref([
  { text: 'Eu achei difícil acalmar-me.', category: 'stress' },
  { text: 'Minha boca ficou seca.', category: 'anxiety' },
  { text: 'Eu não consegui sentir nenhuma emoção positiva.', category: 'depression' },
  { text: 'Eu tive dificuldade para respirar (por exemplo, respiração excessivamente rápida, falta de ar na ausência de esforço físico).', category: 'anxiety' },
  { text: 'Eu achei difícil ter iniciativa para fazer as coisas.', category: 'depression' },
  { text: 'Eu reagi exageradamente a situações.', category: 'stress' },
  { text: 'Eu senti tremores (por exemplo, nas mãos).', category: 'anxiety' },
  { text: 'Eu senti que estava gastando muita energia.', category: 'stress' },
  { text: 'Eu fiquei preocupado com situações em que eu poderia entrar em pânico e parecer ridículo.', category: 'anxiety' },
  { text: 'Eu senti que não tinha nada para esperar.', category: 'depression' },
  { text: 'Eu achei que estava ficando impaciente.', category: 'stress' },
  { text: 'Eu senti que estava prestes a entrar em pânico.', category: 'anxiety' },
  { text: 'Eu não consegui me entusiasmar com nada.', category: 'depression' },
  { text: 'Eu senti que estava valendo muito pouco como pessoa.', category: 'depression' },
  { text: 'Eu senti que estava sendo intolerante com tudo.', category: 'stress' },
  { text: 'Eu senti que meu coração estava acelerado, mesmo sem esforço físico.', category: 'anxiety' },
  { text: 'Eu senti medo sem motivo.', category: 'anxiety' },
  { text: 'Eu senti que a vida não tinha sentido.', category: 'depression' },
  { text: 'Eu senti que estava inquieto.', category: 'stress' },
  { text: 'Eu senti que estava com medo.', category: 'anxiety' },
  { text: 'Eu senti que estava muito nervoso.', category: 'stress' }
]);

const options = ['Não', 'Um pouco', 'Bastante', 'O tempo todo'];
const currentQuestion = ref(0);
const selectedOption = ref(null);
const answers = ref([]);
const results = ref({ depression: 0, anxiety: 0, stress: 0 });

watch(currentQuestion, (newVal) => {
  selectedOption.value = answers.value.find(a => a.questionIndex === newVal)?.answer || null;
});

const answerQuestion = () => {
  if (selectedOption.value !== null) {
    const existingAnswer = answers.value.find(a => a.questionIndex === currentQuestion.value);
    if (existingAnswer) {
      existingAnswer.answer = selectedOption.value;
    } else {
      answers.value.push({ questionIndex: currentQuestion.value, question: questions.value[currentQuestion.value], answer: selectedOption.value });
    }
    currentQuestion.value++;
    if (currentQuestion.value >= questions.value.length) {
      calculateResults();
    }
    selectedOption.value = null;
  } else {
    alert('Por favor, selecione uma opção antes de continuar.');
  }
};

const goBack = () => {
  currentQuestion.value--;
};

const calculateResults = () => {
  const scores = { depression: 0, anxiety: 0, stress: 0 };
  answers.value.forEach(({ question, answer }) => {
    scores[question.category] += parseInt(answer);
  });
  results.value = scores;
};

const restartTest = () => {
  currentQuestion.value = 0;
  selectedOption.value = null;
  answers.value = [];
  results.value = { depression: 0, anxiety: 0, stress: 0 };
};

const shareResults = () => {
  const resultText = `Meus resultados do teste DASS-21: Depressão: ${results.value.depression}, Ansiedade: ${results.value.anxiety}, Estresse: ${results.value.stress}`;
  navigator.share({
    title: 'Resultados do teste DASS-21',
    text: resultText,
  }).catch(console.error);
};

const resultsData = ref([
  { label: 'Depressão', value: results.value.depression },
  { label: 'Ansiedade', value: results.value.anxiety },
  { label: 'Estresse', value: results.value.stress }
]);

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: { beginAtZero: true }
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

main {  
  padding: 20px;
  border-radius: 8px;
}
</style>

