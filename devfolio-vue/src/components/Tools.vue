<template>
    <section id="tools" class="tools-section">
        <div class="container mx-auto">
            <h2 class="section-title">Tech Stack</h2>

            <div class="row g-2">
                <div class="col-6 col-lg-3">
                    <div class="tool-card">
                        <img class="img-fluid" src="/images/html.webp" alt="HTML Logo" loading="lazy">
                        <h3 class="tool-name">HTML5</h3>
                    </div>
                </div>
                <div class="col-6 col-lg-3">
                    <div class="tool-card">
                        <img class="img-fluid" src="/images/css.webp" alt="CSS Logo" loading="lazy">
                        <h3 class="tool-name">CSS3</h3>
                    </div>
                </div>
                <div class="col-6 col-lg-3">
                    <div class="tool-card">
                        <img class="img-fluid" src="/images/js.webp" alt="Javascript Logo" loading="lazy">
                        <h3 class="tool-name">JavaScript</h3>
                    </div>
                </div>
                <div class="col-6 col-lg-3">
                    <div class="tool-card">
                        <img class="img-fluid" src="/images/vue.webp" alt="Vue.js Logo" loading="lazy">
                        <h3 class="tool-name">Vue.js</h3>
                    </div>
                </div>                            
            </div>

            <div class="row g-2">
                <div class="col-6 col-lg-3">
                    <div class="tool-card">
                        <img class="img-fluid" src="/images/mongodb.webp" alt="MongoDB Logo" loading="lazy">
                        <h3 class="tool-name">MongoDB</h3>
                    </div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="tool-card">
                        <img class="img-fluid" src="/images/express.webp" alt="Express.js Logo" loading="lazy">
                        <h3 class="tool-name">Express</h3>
                    </div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="tool-card">
                        <img class="img-fluid" src="/images/nodejs.webp" alt="Node.js Logo" loading="lazy">
                        <h3 class="tool-name">Node.js</h3>
                    </div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="tool-card">
                        <img class="img-fluid" src="/images/bootstrap.webp" alt="Bootstrap Logo" loading="lazy">
                        <h3 class="tool-name">Bootstrap</h3>
                    </div>
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

.tools-container {
    padding: 1rem;
}

.tool-card {
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.tool-card img {
    width: 80px;        
    object-fit: contain;
    margin-bottom: 1rem;
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

#tools .container {
        max-width: 350px;
    }


/* For Medium/Tablets */
@media (min-width: 768px) {
    .tools-section {
        padding: 60px 0;
    }
   
    .tool-card {
        min-height: 100px;
        padding: 1.5rem;
    }
    
    .tool-name {
        font-size: 1rem;
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