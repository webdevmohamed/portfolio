<template>
    <div>
        <h1 class="max-md:hidden text-5xl max-xl:text-3xl max-lg:text-2xl font-bold bg-clip-text text-foreground">
            {{ t('home.hiIm') }} <span class="text-primary">Mohamed</span>
        </h1>
        <div class="flex items-baseline gap-2 mt-10 max-md:mt-4">
            <div class="h-[2px] w-8 bg-foreground max-md:hidden"></div>
            <p class="text-2xl max-xl:text-xl max-lg:text-lg max-md:text-base max-md:text-center text-foreground !leading-loose w-10/12 max-lg:w-full">
                <span class="bg-gradient-to-r text-background from-primary to-accent-blue/30 pl-2 py-1 mr-1 rounded-md font-semibold">
                    {{ t('home.webDeveloper') }},
                </span>
              {{ t('home.paragraph') }}
            </p>
        </div>

        <div class="flex max-md:flex-col-reverse justify-between">
            <!-- Modern scroll indicator -->
            <a @click="store.navigateToSection(1)" class="relative w-fit flex flex-col items-start gap-3 pt-20 max-md:pt-10 group self-center">
                <div class="flex items-center gap-3 cursor-pointer max-md:flex-col max-md:items-center">
                    <div
                        class="relative w-10 h-10 group-hover:animate-none rounded-full bg-gradient-to-br from-primary/50 to-accent-blue/50 group-hover:from-primary/70 group-hover:to-accent-blue/70 transition-all duration-300 overflow-hidden flex items-center justify-center">
                        <div class="w-2 h-2 border-r-[2px] border-b-[2px] border-foreground animate-fade-move-down">
                        </div>
                    </div>
                    <div class="flex flex-col max-md:items-center">
                        <span
                            class="text-sm font-medium text-foreground/50 group-hover:text-primary transition-colors duration-300">
                            Scroll
                        </span>
                        <span
                            class="text-xs font-medium text-foreground/30 group-hover:text-primary/60 transition-colors duration-300">
                            {{ t('home.toExplore') }}
                        </span>
                    </div>
                </div>
            </a>

            <!-- Graphic element -->
            <img class="max-md:hidden w-[150px] max-xl:w-[100px] h-fit dark:filter dark:invert opacity-30 hover:opacity-100 transition-all duration-300" src="@/assets/tachado.png" alt="" />
        </div>
    </div>
</template>

<script setup>
import { useNavigationStore } from '@/stores/navigation.js'
import { useI18n } from 'vue-i18n'

const store = useNavigationStore()

const { t } = useI18n();
</script>

<style scoped></style>
