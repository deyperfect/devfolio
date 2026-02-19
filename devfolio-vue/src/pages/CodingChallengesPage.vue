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
      <div class="row g-4">

        <div
          v-for="challenge in challenges"
          :key="challenge.id"
          class="col-10 col-md-6 col-lg-3 mx-auto mx-lg-0"
        >
          <a class="project-link" :href="challenge.url" target="_blank">
            <div class="project-card">
              <div class="img-holder">
                <img :src="challenge.image" :alt="challenge.title" class="project-image" />
              </div>
              <div class="project-content">
                <h3 class="project-title">{{ challenge.title }}</h3>
                <div class="tags">
                  <p v-for="tag in challenge.tags" :key="tag" class="tag">{{ tag }}</p>
                </div>
                <p class="project-description">{{ challenge.description }}</p>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  </section>

</template>

<script setup>

import { useDarkMode } from '../composables/theme.js'
const { isDark, toggleTheme } = useDarkMode()

const challenges = [
  {
    id: 1,
    title: 'Age Calculator',
    url: 'https://deyperfect.github.io/age-calculator/',
    image: '/images/calculator.webp',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: 'The goal of this challenge is to learn how to use external packages using npm. The user inputs their birthdate via a JavaScript Datepicker, and the app calculates and displays their exact age, including years and months, using Luxon.'
  }
]
</script>