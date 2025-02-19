<template>
    <div
      class="fixed text-[10vw] leading-[0.8] font-bold text-background opacity-50 bottom-0"
    >
      {{ name }}.
    </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<style scoped>

</style>
