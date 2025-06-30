<template>
  <div id="home" class="relative md:min-h-screen py-5 px-5 max-md:py-16 max-md:px-20 max-sm:px-16 max-xs:px-12 max-xxs:px-5">
    <div
      class="container mx-auto xl:max-w-screen-lg max-w-screen-md max-xl:justify-center max-md:flex-col-reverse lg:px-0 md:px-[30px] flex items-center justify-between gap-5"
    >
      <HomeContent class="w-1/2 max-md:w-full" />
      <ProfileImage class="w-1/2 max-md:w-full"/>
    </div>
  </div>
</template>

<script setup>

import HomeContent from '@/components/HomeContent.vue'
import ProfileImage from '@/components/ProfileImage.vue'
</script>

<style scoped></style>
