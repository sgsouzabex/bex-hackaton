<script setup lang="ts">
const searchStore = useSearchStore()
</script>

<template>
  <div>
    <h1 class="text-2xl mb-4">
      Sistema
    </h1>

    <div class="flex gap-x-3">
      <label class="flex-1">
        <span class="text-gray-400">Sistema</span>

        <UiSelect v-model="searchStore.values.one">
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
      </label>
    </div>
  </div>
</template>
