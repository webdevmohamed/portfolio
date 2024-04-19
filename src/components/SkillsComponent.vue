<template>
  <div class="skills">
    <div class="tag-list">
      <div class="loop-slider" style="--duration:15951ms; --direction:normal;">
        <div class="inner">
          <div class="tag"><span>#</span> JavaScript</div>
          <div class="tag"><span>#</span> CSS</div>
          <div class="tag"><span>#</span> HTML</div>
          <div class="tag"><span>#</span> Vue.js</div>
          <div class="tag"><span>#</span> Nuxt</div>

          <div class="tag"><span>#</span> JavaScript</div>
          <div class="tag"><span>#</span> CSS</div>
          <div class="tag"><span>#</span> HTML</div>
          <div class="tag"><span>#</span> Vue.js</div>
          <div class="tag"><span>#</span> Nuxt</div>
        </div>
      </div>
      <div class="loop-slider" style="--duration:19260ms; --direction:reverse;">
        <div class="inner">
          <div class="tag"><span>#</span> PHP</div>
          <div class="tag"><span>#</span> MySQL</div>
          <div class="tag"><span>#</span> REST API</div>
          <div class="tag"><span>#</span> Doctrine</div>
          <div class="tag"><span>#</span> Java</div>

          <div class="tag"><span>#</span> PHP</div>
          <div class="tag"><span>#</span> MySQL</div>
          <div class="tag"><span>#</span> REST API</div>
          <div class="tag"><span>#</span> Doctrine</div>
          <div class="tag"><span>#</span> Java</div>
        </div>
      </div>
      <div class="loop-slider" style="--duration:10449ms; --direction:normal;">
        <div class="inner">
          <div class="tag"><span>#</span> jQuery</div>
          <div class="tag"><span>#</span> Bootstrap</div>
          <div class="tag"><span>#</span> Axios</div>
          <div class="tag"><span>#</span> Git</div>
          <div class="tag"><span>#</span> Strapi</div>

          <div class="tag"><span>#</span> jQuery</div>
          <div class="tag"><span>#</span> Bootstrap</div>
          <div class="tag"><span>#</span> Axios</div>
          <div class="tag"><span>#</span> Git</div>
          <div class="tag"><span>#</span> Strapi</div>
        </div>
      </div>

      <div class="loop-slider" style="--duration:16638ms; --direction:reverse;">
        <div class="inner">
          <div class="tag"><span>#</span> Vue.js</div>
          <div class="tag"><span>#</span> JavaScript</div>
          <div class="tag"><span>#</span> CSS</div>
          <div class="tag"><span>#</span> HTML</div>
          <div class="tag"><span>#</span> jQuery</div>

          <div class="tag"><span>#</span> Vue.js</div>
          <div class="tag"><span>#</span> JavaScript</div>
          <div class="tag"><span>#</span> CSS</div>
          <div class="tag"><span>#</span> HTML</div>
          <div class="tag"><span>#</span> jQuery</div>
        </div>
      </div>

      <div class="loop-slider" style="--duration:15936ms; --direction:normal;">
        <div class="inner">
          <div class="tag"><span>#</span> Git</div>
          <div class="tag"><span>#</span> PHP</div>
          <div class="tag"><span>#</span> Java</div>
          <div class="tag"><span>#</span> MySQL</div>
          <div class="tag"><span>#</span> Doctrine</div>

          <div class="tag"><span>#</span> Git</div>
          <div class="tag"><span>#</span> PHP</div>
          <div class="tag"><span>#</span> Java</div>
          <div class="tag"><span>#</span> MySQL</div>
          <div class="tag"><span>#</span> Doctrine</div>
        </div>
      </div>
      <div class="fade-skills"></div>
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

.skills {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #68a506;
  color: #f8fafc;
}


.skills .tag-list {
  width: 30rem;
  max-width: 90vw;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 1rem 0;
  position: relative;
  padding: 1.5rem 0;
  overflow: hidden;
}

.skills .loop-slider .inner {
  display: flex;
  width: fit-content;
  animation-name: loop;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: var(--direction);
  animation-duration: var(--duration);

}

.skills .tag {
  display: flex;
  align-items: center;
  gap: 0 0.2rem;
  color: #e2e8f0;
  font-size: 0.9rem;
  background-color: black;
  border-radius: 0.4rem;
  padding: 0.3rem 1rem;
  margin-right: 1rem;
  white-space: nowrap;
  box-shadow:
  0 0.1rem 0.2rem rgb(0 0 0 / 20%),
  0 0.1rem 0.5rem rgb(0 0 0 / 30%),
  0 0.2rem 1.5rem rgb(0 0 0 / 40%);

}

.skills .tag span {
  font-size: 1.2rem;
  color: #64748b;
}

.skills .fade-skills {
  pointer-events: none;
  background: linear-gradient(90deg, #68a506, transparent 30%, transparent 70%, #68a506);
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