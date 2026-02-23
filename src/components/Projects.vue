<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <h2 class="section-title">My Projects</h2>
      <div class="row g-4 justify-content-center" id="completed-projects">
        <div
          v-for="project in projects"
          :key="project.id"
          class="col-10 col-md-6 col-lg-3"
        >
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import ProjectCard component
import ProjectCard from "./ProjectCard.vue";

// import projects data
import projects from "../data/projects.json";
</script>

<style scoped>
.projects-section {
  background-color: var(--color-primary);
  padding: 80px 0;
}

@media (min-width: 768px) {
  .projects-section {
    padding: 60px 0;
  }
}

@media (min-width: 992px) {
  /* #completed-projects {
        display: flex !important;
        justify-content: center !important;
        gap: 1.2rem !important;
    } */
}
</style>
