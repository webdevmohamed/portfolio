<template>
    <div id="about" class="relative min-h-screen">
        <!-- Content -->
        <div class="container mx-auto max-w-screen-lg relative flex items-center justify-between min-h-screen">
            <div class="w-1/2">
                <h1 class="text-5xl font-bold bg-clip-text text-foreground">
                    {{ t('about.title') }}
                </h1>
                <p class="text-xl text-foreground leading-loose mt-4">
                    {{ t('about.paragraph') }}
                </p>
                <div class="flex gap-4 mt-6">
                    <DownloadCvButton />
                    <ContactMeButton />
                    <GithubButton />
                </div>
            </div>
            <img src="@/assets/about-4.svg" alt="About" class="w-1/2 h-auto" />
        </div>
    </div>
</template>

<script setup>
import DownloadCvButton from './Buttons/DownloadCVButton.vue';
import ContactMeButton from './Buttons/ContactMeButton.vue';
import GithubButton from './Buttons/GithubButton.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
</script>

<style scoped></style>
