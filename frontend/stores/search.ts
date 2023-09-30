function initialValues() {
  return {
    one: undefined,
    two: undefined,
    three: undefined,
    four: new Set<string>([]),
    five: new Set<string>([]),
    six: { startDate: undefined, endDate: undefined },
  }
}

function initialLists() {
  return {
    one: [{ label: 'V1', value: 'documentos_v1' }, { label: 'V2', value: 'documentos_v2' }, { label: 'V3', value: 'documentos_v3' }, { label: 'BexUp', value: 'BexUp' }],
    two: [{ label: 'Apple', value: 'apple' }, { label: 'Google', value: 'google' }, { label: 'Microsoft', value: 'microsoft' }],
    three: [{ label: 'Apple', value: 'apple' }, { label: 'Google', value: 'google' }, { label: 'Microsoft', value: 'microsoft' }],
    four: [{ label: 'Apple', value: 'apple' }, { label: 'Google', value: 'google' }, { label: 'Microsoft', value: 'microsoft' }],
    five: [{ label: 'Apple', value: 'apple' }, { label: 'Google', value: 'google' }, { label: 'Microsoft', value: 'microsoft' }],
  }
}

const useSearchStore = defineStore('search', () => {
  const step = ref(1)
  const values = ref(initialValues())
  const lists = ref(initialLists())
  const valid = computed(() => ({
    one: !!values.value.one,
    two: !!values.value.two,
    three: !!values.value.three,
    four: !!values.value.four.size,
    five: !!values.value.five.size,
    six: !!values.value.six.startDate && !!values.value.six.endDate,
  }))

  function reset() {
    step.value = 1
    values.value = (initialValues())
    lists.value = initialLists()
  }

  watch(() => values.value.one, (_system, oldSystem) => {
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
