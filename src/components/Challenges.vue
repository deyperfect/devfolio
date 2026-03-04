<script setup>
import ChallengesCard from "./ChallengesCard.vue";

import challenges from "../data/challenges.json";
</script>


<template>

  <!-- Landing Section -->
  <section id="landing" class="landing-section">
    <div class="container mx-auto">
      <div class="row align-items-center">
        <div class="col-lg-8 mx-auto text-center">
          <h1 class="landing-title">Coding Challenges</h1>
          <p class="landing-subtitle">
            This page contains coding challenges I've worked on to practice my programming
            skills and improve my problem-solving approach. Each challenge helps me better
            understand how to write clearer, more efficient code while learning from mistakes
            and refining my solutions over time.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="projects-section">
    <div class="container">
      <h2 class="section-title">roadmap.sh</h2>
      <div class="row g-4 justify-content-center">

        <div
            v-for="challenge in challenges"
            :key="challenge.id"
            class="col-10 col-md-6 col-lg-3 mx-auto mx-lg-0"
            >
            <ChallengesCard :challenge="challenge" />
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.landing-section {
  background-color: var(--color-primary);
  padding-top: 150px;
}

.projects-section {
  padding-top: 100px;
}
</style>

