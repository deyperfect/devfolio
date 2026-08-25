<script setup>
defineProps({
  stack: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="tool-card">
    <div class="tool-icon">
      <img :src="stack.image" :alt="stack.alt" loading="lazy" />
    </div>
    <p class="tool-name">{{ stack.name }}</p>
  </div>
</template>

<style scoped>
.tool-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 0.5rem;
  border-radius: 12px;
  border: 1px solid transparent;
  background-color: color-mix(in srgb, var(--color-tertiary) 6%, transparent);
  transition: all 0.25s ease;
}

.tool-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
  background-color: color-mix(in srgb, var(--color-accent) 10%, transparent);
}

.tool-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tool-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.tool-name {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-tertiary);
  text-align: center;
  margin: 0;
  transition: color 0.25s ease;
}

.tool-card:hover .tool-name {
  color: var(--color-accent);
}

/* For Medium/Tablets and up */
@media (min-width: 768px) {
  .tool-card {
    padding: 1.1rem 0.75rem;
  }

  .tool-icon {
    width: 40px;
    height: 40px;
  }

  .tool-name {
    font-size: 0.8rem;
  }
}
</style>