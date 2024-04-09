<template>
  <div class="app">
    <div class="tag-list">
      <div class="loop-slider" style="--duration:20000ms; --direction:normal;">
        <div class="inner">
          <div class="tag"><span>#</span> JavaScript</div>
          <div class="tag"><span>#</span> webdev</div>
          <div class="tag"><span>#</span> Typescript</div>
          <div class="tag"><span>#</span> Next.js</div>
          <div class="tag"><span>#</span> UI/UX</div>
          <!-- duplicated content -->
          <div class="tag"><span>#</span> JavaScript</div>
          <div class="tag"><span>#</span> webdev</div>
          <div class="tag"><span>#</span> Typescript</div>
          <div class="tag"><span>#</span> Next.js</div>
          <div class="tag"><span>#</span> UI/UX</div>
        </div>
      </div>
      <div class="loop-slider" style="--duration:11000ms; --direction:reverse;">
        <div class="inner">
          <div class="tag"><span>#</span> webdev</div>
          <div class="tag"><span>#</span> Gatsby</div>
          <div class="tag"><span>#</span> JavaScript</div>
          <div class="tag"><span>#</span> Tailwind</div>
          <div class="tag"><span>#</span> Typescript</div>
          <!-- duplicated content -->
          <div class="tag"><span>#</span> webdev</div>
          <div class="tag"><span>#</span> Gatsby</div>
          <div class="tag"><span>#</span> JavaScript</div>
          <div class="tag"><span>#</span> Tailwind</div>
          <div class="tag"><span>#</span> Typescript</div>
        </div>
      </div>
      <div class="loop-slider" style="--duration:6449ms; --direction:normal;">
        <div class="inner">
          <div class="tag"><span>#</span> animation</div>
          <div class="tag"><span>#</span> Tailwind</div>
          <div class="tag"><span>#</span> React</div>
          <div class="tag"><span>#</span> SVG</div>
          <div class="tag"><span>#</span> HTML</div>
          <!-- duplicated content -->
          <div class="tag"><span>#</span> animation</div>
          <div class="tag"><span>#</span> Tailwind</div>
          <div class="tag"><span>#</span> React</div>
          <div class="tag"><span>#</span> SVG</div>
          <div class="tag"><span>#</span> HTML</div>
        </div>
      </div>
      <div class="fade-app"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsComponent"
}
</script>

<style scoped>
body {
  font-family: 'Montserrat', sans-serif;
}

.app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #1e293b;
  color: #f8fafc;
}


.tag-list {
  width: 50rem;
  max-width: 90vw;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 1rem 0;
  position: relative;
  padding: 1.5rem 0;
  overflow: hidden;
}

.loop-slider .inner {
  display: flex;
  width: fit-content;
  animation-name: loop;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: var(--direction);
  animation-duration: var(--duration);

}

.tag {
  display: flex;
  align-items: center;
  gap: 0 0.2rem;
  color: #e2e8f0;
  font-size: 0.9rem;
  background-color: #334155;
  border-radius: 0.4rem;
  padding: 0.7rem 1rem;
  margin-right: 1rem;
  box-shadow:
  0 0.1rem 0.2rem rgb(0 0 0 / 20%),
  0 0.1rem 0.5rem rgb(0 0 0 / 30%),
  0 0.2rem 1.5rem rgb(0 0 0 / 40%);

}

.tag span {
  font-size: 1.2rem;
  color: #64748b;
}

.fade-app {
  pointer-events: none;
  background: linear-gradient(90deg, #1e293b, transparent 30%, transparent 70%, #1e293b);
  position: absolute;
  inset: 0;
}

@keyframes loop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

</style>