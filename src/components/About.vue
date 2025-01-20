<template>
    <div class="relative min-h-screen overflow-hidden">
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
                    <a href="/path/to/cv.pdf"
                        class="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-light transition duration-300 transform hover:scale-105">Descargar
                        CV</a>
                    <a href="mailto:your-email@example.com"
                        class="px-4 py-2 bg-accent-blue text-white rounded-md hover:bg-accent-blue/80 transition duration-300 transform hover:scale-105">Contáctame</a>
                    <a href="https://github.com/your-github" target="_blank"
                        class="px-8 py-2 bg-gradient-to-r from-primary to-accent-orange text-white rounded-md hover:from-primary-light hover:to-accent-orange/80 transition duration-300 transform hover:scale-105">GitHub</a>
                </div>
            </div>
            <img src="@/assets/about-3.svg" alt="About" class="w-1/2 h-auto" />
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped></style>
