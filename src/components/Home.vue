<template>
    <div id="home" class="container mx-auto max-w-screen-lg relative">
        <div class="flex items-center justify-between gap-5 min-h-screen">
            <HomeContent />
            <ProfileImage />
        </div>
    </div>
</template>

<script setup>
import ProfileImage from './ProfileImage.vue'
import HomeContent from './HomeContent.vue'
</script>

<style scoped></style>
