<template>
    <a href="mailto:your-email@example.com"
        class="group relative flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <svg class="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span class="font-semibold">{{ t('about.contactMe') }}</span>
        <div
            class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-foreground transition-colors duration-300">
        </div>
    </a>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
</script>

<style scoped></style>
