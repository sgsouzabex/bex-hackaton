<script setup lang="ts">
import { STEPS_NUMBER } from '~/constants'

const valid = ref(false)
const searchStore = useSearchStore()

const steps = STEPS_NUMBER.map(step =>
  defineAsyncComponent(() => import(`@/components/search/content/Step${step}.vue`)),
)

const stepRef = ref<{ valid: boolean }>()

const stepLabels = [
  'Sistema',
  'Contratante',
  'Contratada',
  'Documentos',
  'Colaboradores',
  'Competência',
]
</script>

<template>
  <UiCard class="p-2 flex gap-x-2 h-[400px] w-[1000px] max-w-full mx-auto relative">
    <UiCard class="p-2 flex justify-around  flex-col flex-[1]">
      <SearchStep v-for="(label, step) in stepLabels" :key="step + 1" :="{ label, step: step+1 }" />
    </UiCard>
    <UiCard class="flex flex-col flex-[3]">
      <SearchDatabaseSelect v-if="searchStore.step > 1" />
      <div class="p-2 flex-1">
        <keep-alive>
          <component :is="steps[searchStore.step - 1]" ref="stepRef" v-model="valid" />
        </keep-alive>
      </div>

      <SearchFooter :can-skip="valid" />
    </UiCard>
  </UiCard>
</template>
