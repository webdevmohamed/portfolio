<template>
  <div id="home" class="relative md:min-h-screen max-md:py-16 p-5">
    <div
      class="container mx-auto xl:max-w-screen-lg max-xl:justify-center max-md:flex-col-reverse lg:px-0 md:px-[30px] flex items-center justify-between gap-5"
    >
      <HomeContent class="w-1/2 max-xl:w-4/12 max-lg:w-5/12 max-md:w-full" />
      <ProfileImage class="w-1/2 max-xl:w-4/12 max-lg:w-5/12 max-md:w-full"/>
    </div>
  </div>
</template>

<script setup>

import HomeContent from '@/components/HomeContent.vue'
import ProfileImage from '@/components/ProfileImage.vue'
</script>

<style scoped></style>
