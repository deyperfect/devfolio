<template>
    <section id="landing" class="landing-section">
        <div class="container mx-auto">
            <div class="row align-items-center">
                <div class="col-lg-8 mx-auto text-center">
                    <div class="photo-holder mx-auto">
                        <img class="landing-photo" src="/images/photo.webp" alt="Photo of Edryl" 
                        loading="eager" decoding="async" fetchpriority="high">
                    </div>
                    <p class="landing-intro">Hello World! My name is <strong>Edryl</strong>, and I'm a</p>
                    <h1 class="landing-title">Junior Full Stack Developer</h1>
                    
                    <p id="par1" class="landing-subtitle">I&apos;m a developer with a foundation in professional communication and analytical problem-solving developed in the BPO industry. I build clean, user-centered web applications with a focus on functionality, usability, and thoughtful design.</p>  
                    <p id="par2" class="landing-subtitle">I work with JavaScript, HTML, CSS, Bootstrap, and Git, and I'm actively expanding my technical capabilities through hands-on projects and structured learning. This portfolio represents both my current work and my commitment to continuous growth as I build toward production-ready development.</p>
                    
                </div>

                
                <div class="mx-auto" id="landing-button">
                    <a href="#projects" class="btn btn-cta">View My Work</a>
                    <a href="https://drive.google.com/file/d/1Tq3noSrq1Q2-R7v7OzefZLCNoREdVI_1/view?usp=sharing" target="_blank" class="btn btn-cta">View Resume</a>
                </div>
                   
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Landing Section Start*/
.landing-section {
    background-color: var(--color-primary);
    padding: 100px 0;
}

.photo-holder {
    width: 7rem;
    height: 7rem;
    padding: 12px;               
    border-radius: 50%;
    border: 2px solid var(--color-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.4rem;
    box-shadow: 0 0 12px var(--color-accent);
    transition: all 1s ease;
}

.photo-holder:hover {
    transform: translateY(-10px) scale(1.05);
}

.landing-photo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    transform: scale(1.2);
}

.landing-intro {
    font-family: "Inconsolata";
    font-size: 1.2rem;
    padding: 0 2.3rem;
    color: var(--color-secondary);
    animation: fadeInUp 1s ease;
}

.landing-intro strong {
    color: var(--color-accent);
}

.landing-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-secondary);
    margin-bottom: 3rem;
    animation: fadeInUp 1s ease;
}

.landing-subtitle {
    font-family: "Figtree";
    text-align: justify;
    font-size: 1rem;
    padding: 0 2.3rem;
    color: var(--color-tertiary);
    animation: fadeInUp 1s ease 0.2s backwards;
}

#par2 {
    margin-bottom: 3rem;
}

.btn-cta {
    background-color: var(--color-accent);
    border: none;
    color: var(--color-primary);
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 50px;
    transition: all 0.3s ease;
    animation: fadeInUp 1s ease 0.4s backwards;
}

#landing-button a:first-child:hover {
    background-color: var(--color-tertiary);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

#landing-button a:last-child:hover {
    background-color: var(--color-accent);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

#landing-button {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

#landing-button a:last-child {
    background-color: var(--color-tertiary);
}

/* For Small Screens */
@media (min-width: 576px) {
    .landing-title {
        font-size: 2rem;
    }
    
    .landing-subtitle {
        font-size: 1rem;
    }
    
    .btn-cta {
        padding: 12px 30px;
        font-size: 1rem;
    }
}

/* For Medium/Tablets */
@media (min-width: 768px) {
    /* Landing Section */
    .landing-title {
        font-size: 2.7rem;
    }
    
    .landing-subtitle {
        font-size: 1.1rem;
    }
}

/* For desktop */
@media (min-width: 992px) {

    /* Landing Section */
    .photo-holder {
        width: 10rem;
        height: 10rem;
        padding: 1.1rem;
    }

    .landing-intro {
        font-size: 1.4rem;
    }

    .landing-title {
        font-size: 3.7rem;
    }
    
    .landing-subtitle {
        font-size: 1.2rem;
        padding: 0;
    }  
}
</style>