<template>
    <div id="about" class="relative min-h-screen">
        <!-- Content -->
        <div class="container mx-auto max-w-screen-lg relative flex items-center justify-between min-h-screen">
            <div class="w-1/2">
                <h1 class="text-5xl font-bold bg-clip-text text-foreground">
                    {{ t('about.aboutMe') }}
                </h1>
                <p class="text-xl text-foreground leading-loose mt-4">
                    {{ t('about.paragraph') }}
                </p>
                <div class="flex gap-4 mt-6">
                    <DownloadCV />
                    <ContactMe />
                    <Github />
                </div>
            </div>
            <img src="@/assets/about-4.svg" alt="About" class="w-1/2 h-auto" />
        </div>
    </div>
</template>

<script setup>
import DownloadCV from './Buttons/DownloadCV.vue';
import ContactMe from './Buttons/ContactMe.vue';
import Github from './Buttons/Github.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
</script>

<style scoped></style>
