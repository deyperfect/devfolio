<script setup>
import { defineProps } from 'vue';
defineProps({
    stack: {
        type: Object,
        required: true
    }
})
</script>


<template>

    <div class="tool-card">
        <div class="tool-icon">
            <img :src="stack.image" :alt="stack.alt" loading="lazy">
        </div>
        <h3 class="tool-name">{{ stack.name }}</h3>
    </div>           

</template>

<style scoped>
.tool-card {
    border-radius: 15px;
    padding: 1rem;
    text-align: center;
    transition: all 0.3s ease;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.tool-icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

.tool-icon img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.tool-card::before {
  content: "";
  position: relative;
  inset: 0;
}

.tool-card:hover::before {
    opacity: 0.05;
}

.tool-name {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-tertiary);
    margin: 0;
}

.tool-card:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12), 0 0 0 1px var(--color-accent);
    border-color: var(--color-accent);
    background: var(--color-primary);
}

.tool-card:hover .tool-name {
    color: var(--color-accent);
}

@media (min-width: 768px) {
   
    .tool-card {
        min-height: 100px;
        padding: 1.5rem;
    }
    
    .tool-name {
        font-size: 1rem;
    }

}
</style>