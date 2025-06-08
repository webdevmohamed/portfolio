<template>
    <div class="flex flex-row-reverse gap-5">
        <div class="relative group cursor-pointer">
            <!-- Main image with container -->
            <div class="relative transform-gpu transition-all duration-500 ease-out group-hover:scale-[1.02]">
                <div class="h-[500px] w-[340px] max-xl:h-[400px] max-xl:w-[240px] bg-[url('@/assets/picture-of-me-2.jpeg')] bg-cover bg-center relative rounded-xl overflow-hidden
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
                <div class="absolute -z-10 top-5 left-5 w-full h-full border-4 border-primary rounded-xl overflow-hidden
                transition-all duration-500 ease-out group-hover:border-primary-400 dark:group-hover:border-primary-200 group-hover:shadow-[0_0_15px_rgba(104,165,6,0.3)]
                group-hover:translate-x-2 group-hover:translate-y-2">
                    <!-- Pattern background -->
                    <div class="absolute inset-0 pattern-background opacity-0 scale-110 blur-sm
                    transition-all duration-500 ease-out transform
                    group-hover:opacity-100 group-hover:scale-100 group-hover:blur-none">
                    </div>
                </div>
            </div>

            <!-- Ambient light effect -->
            <div class="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                <div class="absolute inset-0 bg-primary/5 blur-2xl transform scale-110"></div>
            </div>
        </div>

        <!-- Graphic element -->
        <img class="w-[150px] max-xl:w-[100px] h-fit mt-12 dark:filter dark:invert opacity-85" src="@/assets/flecha.png" alt="" />
    </div>
</template>

<script setup>

</script>

<style scoped>
.pattern-background {
  background-color: #e5e5f7;
  background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, var(--background) 15px ), repeating-linear-gradient( #68a50655, #68a506 );
}



</style>
