<script setup lang="ts">
import type { STEPS_NUMBER } from '~/constants'
import { numberToStep } from '~/helpers'

const searchStore = useSearchStore()

const MAX = 6

function back() {
  searchStore.step--
}

function handleSearch() {
  searchStore.step < MAX && searchStore.step++
}

const canSkip = computed(
  () => searchStore.valid[
    numberToStep(searchStore.step).toLowerCase() as Lowercase<typeof STEPS_NUMBER[number]>
  ],
)

const nextLabel = computed(() => {
  return searchStore.step === 5 ? 'Pesquisar' : 'Próximo'
})
</script>

<template>
  <div class="border-t text-right space-x-2 p-2">
    <UiButton
      variant="outline"
      :disabled="searchStore.step === 1"
      @click="back"
    >
      Voltar
    </UiButton>

    <UiButton :disabled="!canSkip" @click="handleSearch">
      {{ nextLabel }}
    </UiButton>
  </div>
</template>
