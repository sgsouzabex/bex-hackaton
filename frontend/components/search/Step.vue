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
  <div class="flex md:w-full flex-col md:flex-row items-center text-primary">
    <div
      class="h-6 w-6 md:w-10 md:h-10 transition border md:font-bold rounded-full flex justify-center items-center" :class="
        {
          'bg-blue-500 border-blue-600 text-white': active,
          'border-secundary text-slate-500': !active,
          'bg-blue-300 text-white border-blue-400': step < searchStore.step,
        }
      "
    >
      {{ step }}
    </div>

    <div class="flex-1 text-center text-xs md:text-base mx-2">
      {{ label }}
    </div>
  </div>
</template>
