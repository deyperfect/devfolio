<script setup>
import ToolCard from "./ToolCard.vue";

import techStack from "../data/techStack.json";
</script>



<template>
    <section id="tools" class="tools-section">
        <div class="container mx-auto">
            <h2 class="section-title">Tech Stack</h2>

            <div class="row g-2 justify-content-center">
                <div
                    v-for="stack in techStack"
                    :key="stack.id"
                    class="col-6 col-lg-3"
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
    padding: 80px 0;
}


#tools .container {
        max-width: 350px;
    }


/* For Medium/Tablets */
@media (min-width: 768px) {
    .tools-section {
        padding: 60px 0;
    }

    #tools .container {
        max-width: 500px;
    }
}

/* For desktop */
@media (min-width: 992px) {
    #tools .container {
        max-width: 800px;
    }
}
</style>