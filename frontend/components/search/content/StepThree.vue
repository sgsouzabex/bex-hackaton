<script setup lang="ts">
const searchStore = useSearchStore()
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
