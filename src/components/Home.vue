<template>
    <div class="relative min-h-screen overflow-hidden">
        <!-- Animated background -->
        <div class="absolute inset-0 -z-10">
            <!-- Base gradient -->
            <div
                class="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 dark:to-primary/5">
            </div>

            <!-- Decorative circles -->
            <div class="absolute top-20 left-[20%] w-[500px] h-[500px] rounded-full blur-3xl animate-blob
                bg-gradient-to-br from-primary/20 to-accent-blue/20 dark:from-primary/5 dark:to-accent-blue/5">
            </div>
            <div class="absolute bottom-20 right-[20%] w-[500px] h-[500px] rounded-full blur-3xl animate-blob animation-delay-2000
                bg-gradient-to-tr from-accent-purple/20 to-primary/20 dark:from-accent-purple/5 dark:to-primary/5">
            </div>
            <div class="absolute top-[40%] right-[40%] w-[500px] h-[500px] rounded-full blur-3xl animate-blob animation-delay-4000
                bg-gradient-to-bl from-accent-orange/20 to-primary/20 dark:from-accent-orange/5 dark:to-primary/5">
            </div>

            <!-- Grid pattern -->
            <div class="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02]"></div>
        </div>

        <!-- Content -->
        <div class="container mx-auto max-w-screen-lg relative">
            <div class="flex items-center justify-between gap-24 min-h-screen">
                <HomeContent />
                <ProfileImage />
            </div>
        </div>
    </div>
</template>

<script setup>
import ProfileImage from './ProfileImage.vue'
import HomeContent from './HomeContent.vue'
</script>

<style scoped>
.bg-grid-pattern {
    background-image: linear-gradient(var(--foreground) 1px, transparent 1px),
        linear-gradient(to right, var(--foreground) 1px, transparent 1px);
    background-size: 40px 40px;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}
</style>
