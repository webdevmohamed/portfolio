<template>
  <div id="home" class="relative min-h-screen p-5">
    <div
      class="container mx-auto xl:max-w-screen-lg max-xl:justify-center flex items-center justify-between gap-5 min-h-screen"
    >
      <HomeContent class="w-1/2 max-xl:w-4/12 max-lg:w-5/12" />
      <ProfileImage class="w-1/2 max-xl:w-4/12 max-lg:w-5/12" @click="goToLinkedin"/>
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
