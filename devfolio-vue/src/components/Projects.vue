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