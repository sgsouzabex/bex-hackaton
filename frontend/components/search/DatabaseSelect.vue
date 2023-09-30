<script setup lang="ts">
const searchStore = useSearchStore()
const confirmReset = ref<string>()
</script>

<template>
  <div class="absolute top-4 right-4 w-52">
    <UiSelect :model-value="searchStore.values.one" @update:model-value="confirmReset = $event">
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
