<script setup lang="ts">
import { z } from 'zod'

const searchStore = useSearchStore()

const validationSchema = toTypedSchema(
  z.object({
    startDate: z.string().regex(/\d{4}-\d{2}-\d{2}/),
    endDate: z.string().regex(/\d{4}-\d{2}-\d{2}/),
  })
    .refine(
      ({ startDate, endDate }) => new Date(endDate) > new Date(startDate),
      { message: 'Competência Final deve ser posterior a Competência Inicial', path: ['endDate'] },
    ),
)

const initialValues = searchStore.values.six

useForm({ validationSchema, initialValues })

const { value: startDateValue, errorMessage: startDateError } = useField<string>('startDate')
const { value: endDateValue, errorMessage: endDateError } = useField<string>('endDate')
</script>

<template>
  <div>
    <h1 class="text-2xl mb-4">
      Competência
    </h1>

    <div class="flex gap-x-2">
      <label class="flex-1">
        <span class="text-gray-400">Competência Inicial</span>
        <UiInput v-model="startDateValue" type="date" />
        <small v-if="startDateError" class="input-error">{{ startDateError }}</small>
      </label>

      <label class="flex-1">
        <span class="text-gray-400">Competência Fim</span>
        <UiInput v-model="endDateValue" type="date" />
        <small v-if="endDateError" class="input-error">{{ endDateError }}</small>
      </label>
    </div>
  </div>
</template>
