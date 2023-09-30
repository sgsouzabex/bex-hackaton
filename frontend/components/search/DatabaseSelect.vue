<script setup lang="ts">
import type { Tabela } from '~/types'

const searchStore = useSearchStore()
const confirmReset = ref<Tabela>()
</script>

<template>
  <div class="md:absolute md:top-4 md:right-4 md:w-52 m-2 md:m-0">
    <UiSelect :model-value="searchStore.values.one" @update:model-value="confirmReset = $event as Tabela">
      <UiSelectTrigger>
        <UiSelectValue placeholder="" />
      </UiSelectTrigger>
      <UiSelectContent>
        <UiSelectGroup>
          <UiSelectItem v-for="item in searchStore.lists.one" :key="item.value" :value="item.value">
            {{ item.label }}
          </UiSelectItem>
        </UiSelectGroup>
      </UiSelectContent>
    </UiSelect>

    <SearchConfirmReset v-model="confirmReset" />
  </div>
</template>
