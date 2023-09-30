<script setup lang="ts">
import { ContratadaService } from '~/services'

const searchStore = useSearchStore()

watch(() => searchStore.values.two, async (contratante) => {
  if (!contratante)
    return

  const response = await ContratadaService.list({
    tabela: searchStore.values.one!,
    contratanteId: contratante,
  })

  searchStore.lists.three = response
}, { immediate: true })
</script>

<template>
  <div>
    <h1 class="text-2xl mb-4">
      Contratada
    </h1>

    <div class="flex gap-x-2">
      <label class="flex-1">
        <span class="text-gray-400">Contratada</span>
        <UiSelect v-model="searchStore.values.three">
          <UiSelectTrigger>
            <UiSelectValue placeholder="" />
          </UiSelectTrigger>
          <UiSelectContent>
            <UiSelectGroup class="max-h-52">
              <UiSelectItem v-for="item in searchStore.lists.three" :key="item.contratada_id" :value="item.contratada_id.toString()">
                {{ item.contratada_descricao }}
              </UiSelectItem>
            </UiSelectGroup>
          </UiSelectContent>
        </UiSelect>
      </label>
    </div>
  </div>
</template>
