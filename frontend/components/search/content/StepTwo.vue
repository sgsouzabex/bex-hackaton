<script setup lang="ts">
import { ContratatadaService } from '@/services'

const searchStore = useSearchStore()

onMounted(() => {
  const response = ContratatadaService.list(searchStore.values.one!)
})
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
              <UiSelectItem value="apple">
                Apple
              </UiSelectItem>
            </UiSelectGroup>
          </UiSelectContent>
        </UiSelect>
      </label>
    </div>
  </div>
</template>
