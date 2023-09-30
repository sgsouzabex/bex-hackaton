import type { ColaboradorResponse, ContratadaResponse, ContratanteResponse, ObjetoAnaliseResponse, Tabela } from '@/types'

function initialValues() {
  return {
    one: undefined as Tabela | undefined,
    two: undefined as string | undefined,
    three: undefined as string | undefined,
    four: new Set<ObjetoAnaliseResponse[number]>([]),
    five: new Set<ColaboradorResponse[number]>([]),
    six: {
      startDate: undefined as string | undefined,
      endDate: undefined as string | undefined,
    },
  }
}

function initialLists() {
  return {
    one: [
      { label: 'V1', value: 'documentos_v1' },
      { label: 'V2', value: 'documentos_v2' },
      { label: 'V3', value: 'documentos_v3' },
    ] as const,
    two: [] as ContratanteResponse,
    three: [] as ContratadaResponse,
    four: [] as ObjetoAnaliseResponse,
    five: [] as ColaboradorResponse,
  }
}

const useSearchStore = defineStore('search', () => {
  const step = ref(1)
  const values = reactive(initialValues())
  const lists = reactive(initialLists())
  const valid = computed(() => ({
    one: !!values.one,
    two: !!values.two,
    three: !!values.three,
    four: !!values.four.size,
    five: !!values.five.size,
    six: !!values.six.startDate && !!values.six.endDate,
  }))

  function reset() {
    step.value = 1
    values.two = undefined
    values.three = undefined
    values.four.clear()
    values.five.clear()
    values.six = {
      startDate: undefined,
      endDate: undefined,
    }

    lists.two = []
    lists.three = []
    lists.four = []
    lists.five = []
  }

  watch(() => values.one, (_system, oldSystem) => {
    if (oldSystem !== undefined)
      reset()
  })

  return {
    step,
    reset,
    lists,
    values,
    valid,
  }
})

export { useSearchStore }
