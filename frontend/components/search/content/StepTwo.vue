<script setup lang="ts">
import { ContratanteService } from '~/services'

const searchStore = useSearchStore()

watch(() => searchStore.values.one, async (system) => {
  if (!system)
    return

  const response = await ContratanteService.list(system)

  searchStore.lists.two = response
}, { immediate: true })
</script>

<template>
  <div>
    <h1 class="text-2xl mb-4">
      Contratante
    </h1>

    <div class="flex gap-x-2">
      <label class="flex-1">
        <span class="text-gray-400">Contratante</span>

        <UiSelect v-model="searchStore.values.two">
          <UiSelectTrigger>
            <UiSelectValue placeholder="" />
          </UiSelectTrigger>
          <UiSelectContent>
            <UiSelectGroup>
              <UiSelectItem
                v-for="item in searchStore.lists.two"
                :key="item.contratante_id"
                :value="item.contratante_id.toString()"
              >
                {{ item.contratante_descricao }}
              </UiSelectItem>
            </UiSelectGroup>
          </UiSelectContent>
        </UiSelect>
      </label>
    </div>
  </div>
</template>
