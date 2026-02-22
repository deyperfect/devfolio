<template>
    <div class="project-card">

        <div class="img-holder">
            <div class="image-wrapper">
                <img :src="project.image" :alt="project.alt" class="project-image" loading="lazy" decoding="async" />
                <div class="project-overlay">
                    <a v-if="project.external" class="view-btn" :href="project.link" target="_blank"
                        :aria-label="`View ${project.title}`">View Project</a>
                    <RouterLink v-else class="view-btn" :to="project.link" :aria-label="`View ${project.title}`">
                        View Project
                    </RouterLink>
                </div>
            </div>
        </div>

        <div class="project-content">
            <h3 class="project-title">
                <a v-if="project.external" class="project-link" :href="project.link" target="_blank"
                    :aria-label="`View ${project.title}`">{{ project.title }}</a>
                <RouterLink v-else class="project-link" :to="project.link" :aria-label="`View ${project.title}`">
                    {{ project.title }}
                </RouterLink>
            </h3>
            <p class="project-description">{{ project.description }}</p>
        </div>

    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    project: {
        type: Object,
        required: true
    }
})
</script>

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

@media (min-width: 992px) {
    .project-description {
        font-size: 0.9rem;
    }
}
</style>