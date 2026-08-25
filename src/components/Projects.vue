<script setup>
// import ProjectCard component
import ProjectCard from "./ProjectCard.vue";

// import projects data
import projects from "../data/projects.json";
</script>


<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="section-heading">
        <h2 class="section-title">Projects</h2>
        <p class="section-subtitle">Some of my selected works</p>
      </div>
      <div class="row g-4 justify-content-center" id="completed-projects">
        <div
          v-for="project in projects"
          :key="project.id"
          class="col-12 col-md-6 col-lg-3"
        >
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.projects-section {
  background-color: var(--color-primary);
  padding: 3rem 0;
}

@media (min-width: 768px) {
  .projects-section {
    padding: 60px 0;
  }
}

@media (min-width: 992px) {
 .projects-section {
    padding: 6rem 0;
  }
}
</style>
