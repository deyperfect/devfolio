<script setup>
import ToolCard from "./ToolCard.vue";

import techStack from "../data/techStack.json";
</script>

<template>
  <section id="tools" class="tools-section">
    <div class="container mx-auto">
      <div class="section-heading">
        <h2 class="section-title">Tech Stack</h2>
        <p class="section-subtitle">What I currently work with</p>
      </div>
      <div class="row g-3 justify-content-center">
        <div
          v-for="stack in techStack"
          :key="stack.id"
          class="col-4 col-md-3"
        >
          <ToolCard :stack="stack" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tools Section Start */
.tools-section {
  background-color: var(--color-primary);
  padding: 3rem 0;
}

/* #tools .container {
  max-width: 350px;
} */

/* For Medium/Tablets */
@media (min-width: 768px) {
  .tools-section {
    padding: 60px 0;
  }

  /* #tools .container {
    max-width: 500px;
  } */
}

/* For desktop */
@media (min-width: 992px) {
  .tools-section {
    padding: 6rem 0;
  }
}
</style>