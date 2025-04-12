<template>
  <div id="home" class="relative min-h-screen">
    <div
      class="container mx-auto max-w-screen-lg flex items-center justify-between gap-5 min-h-screen"
    >
      <HomeContent />
      <ProfileImage @click="goToLinkedin"/>
    </div>
  </div>
</template>

<script setup>
import ProfileImage from './ProfileImage.vue'
import HomeContent from './HomeContent.vue'

const goToLinkedin = () => {
  window.open('https://www.linkedin.com/in/mohamed-mortahil-elaaouad/', '_blank')
}
</script>

<style scoped></style>
