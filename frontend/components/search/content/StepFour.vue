<script setup lang="ts">
const searchStore = useSearchStore()

const open = ref(false)

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'grape', label: 'Grape' },
]

const value = computed({
  get() {
    return searchStore.values.four
  },
  set(value) {
    searchStore.values.four = value
  },
})
</script>

<template>
  <div>
    <h1 class="text-2xl mb-4">
      Documentos
    </h1>

    <div class="flex gap-x-2">
      <label class="flex-1">
        <span class="text-gray-400">Documentos</span>

        <UiPopover v-model:open="open">
          <UiPopoverTrigger as-child>
            <UiButton
              variant="outline"
              role="combobox"
              :aria-expanded="open"
              class="w-full justify-between"
            >
              <div class="space-x-1">
                <span v-for="item in value" :key="item" class="bg-gray-200 p-1 rounded">{{ item }}</span>
              </div>
              <!-- {{ value ? options.find((option) => option.value === value)?.label : 'Select framework...' }} -->

              <!-- <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" /> -->
            </UiButton>
          </UiPopoverTrigger>
          <UiPopoverContent class="w-[200px] p-0">
            <UiCommand>
              <UiCommandInput placeholder="Buscar contratada" />
              <UiCommandEmpty>Nenhuma contratada encontrada</UiCommandEmpty>
              <UiCommandGroup>
                <UiCommandItem
                  v-for="option in options"
                  :key="option.value"
                  :value="option.value"
                  @click="value.has(option.value) ? value.delete(option.value) : value.add(option.value)"
                >
                  <!-- <Check -->
                  <!--   :class="cn( -->
                  <!--     'mr-2 h-4 w-4', -->
                  <!--     value.some(v => v === option.value) ? 'opacity-100' : 'opacity-0', -->
                  <!--   )" -->
                  <!-- /> -->
                  {{ option.label }}
                </UiCommandItem>
              </UiCommandGroup>
            </UiCommand>
          </UiPopoverContent>
        </UiPopover>
      </label>
    </div>
  </div>
</template>
