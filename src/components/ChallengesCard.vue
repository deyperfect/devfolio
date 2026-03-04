<script setup>
import { defineProps } from "vue"
import { RouterLink } from "vue-router"

defineProps({
  challenge: {
    type: Object,
    required: true
  }
})

const tagClass = (tag) => {
  const t = tag.toLowerCase()

  if (t === "javascript") return "tag-js"
  if (t === "html") return "tag-html"
  if (t === "css") return "tag-css"
  if (t === "vue") return "tag-vue"
  if (t === "react") return "tag-react"
  if (t === "node") return "tag-node"
  if (t === "mongodb") return "tag-mongo"

  return "tag-default"
}
</script>

<template>
    <div class="project-card">

        <div class="img-holder">
            <div class="image-wrapper">
                <img :src="challenge.image" :alt="challenge.alt" class="project-image" loading="lazy" decoding="async" />
                <div class="project-overlay">
                    <a v-if="challenge.external" class="view-btn" :href="challenge.url" target="_blank"
                        :aria-label="`View ${challenge.title}`">View Project</a>
                    <RouterLink v-else class="view-btn" :to="challenge.url" :aria-label="`View ${challenge.title}`">
                        View Project
                    </RouterLink>
                </div>
            </div>
        </div>

        <div class="project-content">
            <h3 class="project-title">
                <a v-if="challenge.external" class="project-link" :href="challenge.url" target="_blank"
                    :aria-label="`View ${challenge.title}`">{{ challenge.title }}</a>
                <RouterLink v-else class="project-link" :to="challenge.url" :aria-label="`View ${challenge.title}`">
                    {{ challenge.title }}
                </RouterLink>
            </h3>
            <div class="tags">
                <span
                    v-for="tag in challenge.tags"
                    :key="tag"
                    class="tag"
                    :class="tagClass(tag)"
                    >
                    {{ tag }}
                </span>
            </div>
            <p class="project-description">{{ challenge.description }}</p>
        </div>

    </div>
</template>

<style scoped>
.project-card {
    background-color: var(--color-primary);
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--color-accent2);
    position: relative;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-color: var(--color-accent);
}

.project-image {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 12px;
    display: block;
    transition: filter 0.3s ease, transform 0.3s ease;
}

.project-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.image-wrapper {
    position: relative;
    width: calc(100% - 3rem);
    margin: 1.5rem auto;
    border-radius: 12px;
    overflow: hidden;
}

.image-wrapper:hover .project-image {
    filter: brightness(0.4);
    transform: scale(1.02);
}

.image-wrapper:hover .project-overlay {
    opacity: 1;
}

.view-btn {
    pointer-events: auto;
    cursor: pointer;
    padding: 0.6rem 1.4rem;
    border-radius: 50px;
    border: none;
    background: var(--color-accent);
    color: white;
    font-weight: 600;
    text-decoration: none;
}

.view-btn:hover {
    box-shadow: 0 0 15px var(--color-accent);
    transform: scale(1.05);
}

.project-content {
    padding: 0 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.project-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--color-secondary);
    margin-bottom: 0.75rem;
}

.project-title:hover {
    color: var(--color-accent);
}

.project-description {
    color: var(--color-tertiary);
    opacity: 0.8;
    font-size: 0.8rem;
    flex-grow: 1;
    text-align: justify;
}

.project-link {
    text-decoration: none;
    color: inherit;
    position: relative;
    z-index: 1;
}


.tags {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  gap: 6px;
  margin-bottom: 0.6rem;
  overflow-x: auto;
}


.tag {
  font-size: 0.7rem;
  padding: 3px 8px;
  border-radius: 5px;
  color: white;
  font-weight: 500;
}


.tag-js {
  background: #f7df1e;
  color: #000;
}

.tag-html {
  background: #e34f26;
}

.tag-css {
  background: #1572b6;
}

.tag-vue {
  background: #42b883;
}

.tag-react {
  background: #61dafb;
  color: #000;
}

.tag-node {
  background: #68a063;
}

.tag-mongo {
  background: #4db33d;
}

.tag-default {
  background: var(--color-accent2);
}

@media (min-width: 992px) {
    .project-description {
        font-size: 0.9rem;
    }
}
</style>