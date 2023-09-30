<script setup lang="ts">
import type { Tabela } from '~/types'

const props = defineProps<{ modelValue: Tabela | undefined }>()
const emit = defineEmits<{ 'update:modelValue': [undefined] }>()
const value = useVModel(props, 'modelValue', emit)
const searchStore = useSearchStore()

function handleConfirm() {
  searchStore.values.one = value.value
  value.value = undefined
}
</script>

<template>
  <UiDialog :open="!!value" @update:open="value = undefined">
    <UiDialogContent>
      <UiDialogHeader>
        <UiDialogTitle>Alterar sistema?</UiDialogTitle>
        <UiDialogDescription>
          Essa alteração resultará na exclusão dos valores inseridos na busca
        </UiDialogDescription>
      </UiDialogHeader>

      <UiDialogFooter>
        <UiButton @click="handleConfirm">
          Confirmar
        </UiButton>
      </UiDialogFooter>
    </UiDialogContent>
  </UiDialog>
</template>
