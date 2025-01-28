<template>
    <div id="about"
        class="relative min-h-screen overflow-hidden bg-gradient-to-br from-background to-accent-blue/10 dark:from-background dark:to-accent-blue/20">
        <!-- Content -->
        <div class="container mx-auto max-w-screen-lg relative flex items-center justify-between min-h-screen">
            <div class="w-1/2">
                <h1 class="text-5xl font-bold bg-clip-text text-foreground">
                    Acerca de mí
                </h1>
                <p class="text-xl text-foreground leading-loose mt-4">
                    Con una trayectoria de 3 años en el campo del Desarrollo Web, me destaco por mi capacidad de
                    aprendizaje continuo y mi eficacia en la resolución de desafíos en cada proyecto que emprendo.
                </p>
                <div class="flex gap-4 mt-6">
                    <a href="@/assets/Mohamed_Mortahil_Elaaouad_Junio_2024.pdf" download
                        class="group relative flex items-center gap-2 px-6 py-3 bg-background-secondary border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                        <svg class="w-5 h-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span class="font-semibold text-foreground">Descargar CV</span>
                        <div
                            class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent-blue/20 transition-colors duration-300">
                        </div>
                    </a>

                    <a href="mailto:your-email@example.com"
                        class="group relative flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                        <svg class="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span class="font-semibold">Contáctame</span>
                        <div
                            class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-light/30 transition-colors duration-300">
                        </div>
                    </a>

                    <a href="https://github.com/your-github" target="_blank"
                        class="group relative flex items-center justify-center p-3 bg-background-secondary border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                        <svg class="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <div
                            class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300">
                        </div>
                    </a>
                </div>
            </div>
            <img src="@/assets/about-3.svg" alt="About" class="w-1/2 h-auto" />
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped></style>
