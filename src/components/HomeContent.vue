<template>
    <div class="w-1/2">
        <h1 class="text-5xl font-bold bg-clip-text text-foreground">
            Hola, soy <span class="text-primary-light">Mohamed</span>
        </h1>
        <div class="flex items-baseline gap-2 mt-10">
            <div class="h-[2px] w-8 bg-foreground"></div>
            <p class="text-2xl text-foreground leading-loose w-10/12">
                <span class="bg-gradient-to-r from-primary to-accent-blue/30 pl-2 py-1 mr-1 rounded-md font-semibold">
                    Desarrollador Web,
                </span>
                gran apasionado de la programación y la fotografía.
            </p>
        </div>

        <div class="flex justify-between">
            <!-- Modern scroll indicator -->
            <div class="relative w-fit flex flex-col items-start gap-3 pt-20 group">
                <div class="flex items-center gap-3 cursor-pointer">
                    <div
                        class="relative w-14 h-14 animate-pulse group-hover:animate-none rounded-full bg-gradient-to-br from-primary/40 to-accent-blue/40 group-hover:from-primary/60 group-hover:to-accent-blue/60 transition-all duration-300 overflow-hidden flex items-center justify-center">
                        <div class="w-3 h-3 border-r-[2px] border-b-[2px] border-primary animate-fade-move-down">
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <span
                            class="text-sm font-medium text-foreground/50 group-hover:text-primary transition-colors duration-300">
                            Scroll
                        </span>
                        <span
                            class="text-xs font-medium text-foreground/30 group-hover:text-primary/60 transition-colors duration-300">
                            para explorar
                        </span>
                    </div>
                </div>
            </div>

            <!-- Graphic element -->
            <img class="w-[150px] h-fit dark:filter dark:invert opacity-30" src="@/assets/tachado.png" alt="" />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>