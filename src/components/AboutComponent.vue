<template>
    <div id="about" class="relative md:min-h-screen py-5 px-5 max-md:py-16 max-md:px-20 max-sm:px-16 max-xs:px-12 max-xxs:px-5">
        <!-- Content -->
        <div class="container mx-auto xl:max-w-screen-lg max-w-screen-md max-xl:justify-center max-md:flex-col-reverse lg:px-0 md:px-[30px] flex items-center justify-between gap-5">
            <div class="w-1/2 max-md:w-full">
                <h1 class="text-5xl max-xl:text-3xl max-lg:text-2xl font-bold bg-clip-text text-foreground">
                    {{ t('about.title') }}
                </h1>
                <p class="text-xl max-xl:text-lg max-lg:text-base text-foreground leading-loose mt-4">
                    {{ t('about.paragraph') }}
                </p>
                <div class="flex max-lg:grid max-lg:grid-cols-2 max-md:flex max-sm:grid max-xs:grid-cols-1 gap-4 max-xl:gap-2 max-xl:items-start mt-6">
                    <DownloadCvButton />
                    <ContactMeButton />
                    <GithubButton class="xs:col-span-2" />
                </div>
            </div>
            <img src="@/assets/about-4.svg" alt="About" class="w-1/2 max-md:w-2/3 max-sm:w-4/6 max-xs:w-full" />
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
