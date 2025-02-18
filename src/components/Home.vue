<template>
  <div id="home" class="relative min-h-screen">
    <div
      class="container mx-auto max-w-screen-lg flex items-center justify-between gap-5 min-h-screen"
    >
      <HomeContent />
      <ProfileImage />
    </div>
    <SectionName name="Home" />
  </div>
</template>

<script setup>
import ProfileImage from './ProfileImage.vue'
import HomeContent from './HomeContent.vue'
import SectionName from '@/components/UI/SectionName.vue'
</script>

<style scoped></style>
