<template>
    <section id="projects" class="projects-section">
        <div class="container">

            <h2 class="section-title">My Projects</h2>

            <div class="row g-4" id="completed-projects">
                
                <!-- Project 1 -->
                <div class="col-10 col-md-6 col-lg-3 mx-auto mx-lg-0">
                    
                    <div class="project-card">

                        <div class="img-holder">
                            <div class="image-wrapper">
                                <img src="/images/cs50.webp" alt="Project 1 Thumbnail" class="project-image" loading="lazy" decoding="async">

                                <div class="project-overlay">
                                <button class="view-btn" onclick="openProject('https://github.com/deyperfect/CS50x-2025-Portfolio') " aria-label="View CS50 Project on Github">View Project</button>
                                </div>
                            </div>
                        </div>

                        <div class="project-content">
                            <h3 class="project-title">
                            <a class="project-link" 
                                href="https://github.com/deyperfect/CS50x-2025-Portfolio" 
                                target="_blank"
                                aria-label="View CS50 Project on Github">
                                CS50X 2025 Portfolio
                            </a>
                            </h3>

                            <p class="project-description">
                            A curated collection of problem sets and coding projects from Harvard's CS50 2025. This compilation demonstrates foundational programming skills, including C, Python, SQL, and web development with HTML, CSS, and JavaScript course.
                            </p>
                        </div>

                    </div>

                </div>
                

                <!-- Project 2 -->
                <div class="col-10 col-md-6 col-lg-3 mx-auto mx-lg-0">
                    <div class="project-card">

                        <div class="img-holder">
                            <div class="image-wrapper">
                            <img src="/images/puzzle.webp" alt="Coding Challenges Thumbnail" class="project-image" loading="lazy" decoding="async">

                            <div class="project-overlay">
                                <RouterLink 
                                    class="view-btn" 
                                    to="/coding-challenges"
                                    aria-label="View Coding Challenges Page">
                                    View Project
                                </RouterLink>
                            </div>
                            </div>
                        </div>

                        <div class="project-content">
                            <h3 class="project-title">
                            <RouterLink 
                                class="project-link" 
                                to="/coding-challenges"
                                aria-label="View Coding Challenges Page">
                                Coding Challenges
                            </RouterLink>
                            </h3>

                            <p class="project-description">
                            A collection of projects focused on converting designs into responsive, accessible, and performant web interfaces. These challenges from Frontend Mentor and roadmap.sh test my proficiency in semantic HTML, modern CSS, and JavaScript.
                            </p>
                        </div>

                    </div>

                </div>

                <!-- Project 3 -->
                <div class="col-10 col-md-6 col-lg-3 mx-auto mx-lg-0">
                    <div class="project-card">

                        <div class="img-holder">
                            <div class="image-wrapper">
                            <img src="/images/coursebooking.webp" alt="Course Booking API Documentation Thumbnail" class="project-image" loading="lazy" decoding="async">

                            <div class="project-overlay">
                                <button 
                                class="view-btn" 
                                onclick="openProject('https://github.com/deyperfect/Online-Course-Booking-API')"
                                aria-label="View Course Booking API Documentation Page">
                                View Project
                                </button>
                            </div>
                            </div>
                        </div>


                        <div class="project-content">
                            <h3 class="project-title">
                            <a class="project-link" 
                                href="https://github.com/deyperfect/Online-Course-Booking-API" 
                                target="_blank" aria-label="View Course Booking API Documentation Page">
                                Course Booking API Documentation
                            </a>
                            </h3>

                            <p class="project-description">
                            RESTful API for managing course enrollments, featuring user registration, authentication, and retrieval of user details. Supports course creation, updates, archiving, activation, and student enrollment. Publicly documented using Postman.
                            </p>
                        </div>

                    </div>
                    
                </div>
                
            </div>          
        </div>
    </section>
</template>

<style scoped>
/* Projects Section */
.projects-section {
    background-color: var(--color-primary);
    padding: 80px 0;
}

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
}
.view-btn:hover {
    box-shadow: 0 0 15px var(--color-accent);
    transform: scale(1.05);
}

.project-title:hover {
        color: var(--color-accent);
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

/* For Medium/Tablets */
@media (min-width: 768px) {
    .projects-section {
        padding: 60px 0;
    }
}

/* For desktop */
@media (min-width: 992px) {
    #upcoming-projects .container {
        max-width: 1000px;
    }

    .project-description {
        font-size: 0.9rem;
    }

    #completed-projects {
        display: flex !important;
        justify-content: center !important;
        gap: 1.2rem !important;
    }
}
</style>