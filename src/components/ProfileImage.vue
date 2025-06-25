<template>
    <div class="flex flex-row-reverse justify-center gap-5 max-md:gap-12 max-md:items-center max-md:flex-col">
      <h1 class="md:hidden text-5xl max-xl:text-3xl max-lg:text-2xl font-bold bg-clip-text text-foreground">
        {{ t('home.hiIm') }} <span class="text-primary">Mohamed</span>
      </h1>
        <div class="relative group cursor-pointer w-fit" @click="goToLinkedin">
            <!-- Main image with container -->
            <div class="h-[500px] w-[340px] max-xl:h-[350px] max-xl:w-[238px] max-lg:h-[300px] max-lg:w-[204px] relative transform-gpu transition-all duration-500 ease-out group-hover:scale-[1.02]">
                <div class="w-full h-full bg-[url('@/assets/picture-of-me-2.jpeg')] bg-cover bg-center relative rounded-xl overflow-hidden
                before:absolute before:inset-0 before:rounded-xl before:opacity-0 before:transition-all before:duration-500 before:scale-105
                group-hover:before:opacity-100 group-hover:before:scale-100">
                    <!-- Overlay with soft gradient -->
                    <div
                        class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-t from-primary/70 via-transparent to-transparent">
                    </div>

                    <!-- Light effect -->
                    <div
                        class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 ease-out bg-gradient-radial from-white via-transparent to-transparent translate-y-full group-hover:translate-y-0">
                    </div>
                </div>

                <!-- Main frame with glow and pattern -->
                <div class="absolute -z-10 top-5 left-5 w-full h-full border-2 border-primary rounded-xl overflow-hidden
                transition-all duration-500 ease-out group-hover:border-primary-400 dark:group-hover:border-primary-200 group-hover:shadow-[0_0_15px_rgba(104,165,6,0.3)]
                group-hover:translate-x-2 group-hover:translate-y-2">
                    <!-- Pattern background -->
                    <div class="absolute inset-0 bg-gradient-to-b from-accent-blue/20 to-primary/20 opacity-0 scale-110
                    transition-all duration-500 ease-out transform
                    group-hover:opacity-100 group-hover:scale-100">
                    </div>
                </div>
            </div>
        </div>

        <!-- Graphic element -->
        <img class="w-[150px] max-xl:w-[100px] max-lg:w-[80px] max-md:-rotate-12 h-fit md:mt-12 dark:filter dark:invert opacity-85" src="@/assets/flecha.png" alt="" />
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
const goToLinkedin = () => {
  window.open('https://www.linkedin.com/in/mohamed-mortahil-elaaouad/', '_blank')
}
</script>

<style scoped></style>
