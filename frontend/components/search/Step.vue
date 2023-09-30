<script setup lang="ts">
interface Props {
  step: number
  label: string
}

const props = defineProps<Props>()

const searchStore = useSearchStore()

const active = computed(() => props.step === searchStore.step)
</script>

<template>
  <div class="flex items-center text-primary">
    <div
      class="w-10 h-10 transition border font-bold rounded-full flex justify-center items-center" :class="
        {
          'bg-blue-500 border-blue-600 text-white': active,
          'border-secundary text-slate-500': !active,
          'bg-blue-400 text-white border-blue-300': step < searchStore.step,
        }
      "
    >
      {{ step }}
    </div>

    <div class="flex-1 text-center mx-2">
      {{ label }}
    </div>
  </div>
</template>
