<script setup lang="ts">
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { cn } from '~/lib/utils'
import { ColaboradorService } from '~/services'
import type { ColaboradorResponse } from '~/types'

const searchStore = useSearchStore()

const open = ref(false)

const value = computed({
  get() {
    return searchStore.values.five
  },
  set(value) {
    searchStore.values.five = value
  },
})

function handleToggle(option: ColaboradorResponse[number]) {
  value.value.has(option) ? value.value.delete(option) : value.value.add(option)
}

function short(value: string) {
  return value.length > 20 ? `${value.slice(0, 20)}...` : value
}

watch(() => searchStore.values.three, async (contratada) => {
  if (!contratada)
    return

  const response = await ColaboradorService.list({
    tabela: searchStore.values.one!,
    contratanteId: searchStore.values.two!,
    contratadaId: contratada,
  })

  searchStore.lists.five = response
}, { immediate: true })
</script>

<template>
  <div>
    <h1 class="text-2xl mb-4">
      Colaboradores
    </h1>

    <div class="flex gap-x-2">
      <label class="flex-1">
        <span class="text-gray-400">Colaboradores</span>

        <UiPopover v-model:open="open">
          <UiPopoverTrigger as-child>
            <UiButton
              variant="outline"
              role="combobox"
              :aria-expanded="open"
              class="w-full min-h-10 h-auto justify-between"
            >
              <div class="flex flex-wrap gap-1 max-w-full overflow-hidden">
                <span
                  v-for="item in value"
                  :key="item.colaborador_id"
                  class="bg-gray-200 p-1 rounded whitespace-nowrap"
                >
                  {{ short(item.colaborador_nome) }}
                </span>
              </div>

              <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </UiButton>
          </UiPopoverTrigger>
          <UiPopoverContent class="w-[500px] p-0">
            <UiCommand>
              <UiCommandInput placeholder="Buscar documento" />
              <UiCommandEmpty>Nenhuma documento encontrado</UiCommandEmpty>
              <UiCommandGroup class="max-h-52 overflow-auto">
                <UiCommandItem
                  v-for="option in searchStore.lists.five"
                  :key="option.colaborador_id"
                  :value="option.colaborador_nome"
                  @click="handleToggle(option)"
                >
                  <Check :class="cn('mr-2 h-4 w-4', value.has(option) ? 'opacity-100' : 'opacity-0')" />
                  {{ option.colaborador_nome }}
                </UiCommandItem>
              </UiCommandGroup>
            </UiCommand>
          </UiPopoverContent>
        </UiPopover>
      </label>
    </div>
  </div>
</template>
