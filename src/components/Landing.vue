<script setup>
</script>

<template>
  <section id="landing" class="landing-section">
    <div class="container mx-auto">
      <div class="row g-5" id="landing-row">
        <div class="col-10 col-md-4 mx-auto" id="landing-left">
          <div class="landing-photo-block">
            <div class="photo-holder">
              <img src="/images/photo.webp" alt="Edryl Palinis" />
            </div>

            <p class="landing-name">Edryl Palinis</p>
            <p class="landing-location">Bulacan, Philippines</p>

            <div class="landing-socials">
              <a
                href="https://linkedin.com/in/edrylpalinis"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path
                    d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/deyperfect"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path
                    d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"
                  />
                </svg>
              </a>
              <a href="mailto:edrylpalinis@gmail.com" aria-label="Email">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="col-11 col-md-7 mx-auto" id="landing-right">
          <div class="right-block">
            <div class="landing-availability">
              <span class="availability-dot"></span>
              Open to Full Stack / Frontend / Backend junior roles
            </div>

            <h1 class="landing-title">Full Stack Web Developer</h1>

            <div class="landing-subtitle">
              <p>
                I'm a web developer who learns best by building. I like
                turning ideas into working applications, figuring out how
                things work, and discovering something new with every
                project. I've worked with Vue, React, Node.js, Express, and
                MongoDB, and I'm always looking for ways to improve how I
                write and build web applications.
              </p>
              <p>
                My journey into web development started as a career change,
                and a lot of my learning has come from self-study, hands-on
                projects, and simply spending time solving problems I don't
                understand yet. I'm still growing as a developer, but I
                genuinely enjoy the process, and I'm excited to keep learning,
                building, and becoming better at what I do.
              </p>
            </div>

            <div id="landing-button">
              <a href="#projects" class="btn btn-cta">View My Work</a>
              <a href="/resume.pdf" target="_blank" class="btn btn-cta"
                >View Resume</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Landing Section */
.landing-section {
  background-color: var(--color-primary);
  padding-top: 7rem;
  padding-bottom: 3rem;
}

.landing-section .container {
  max-width: 1100px;
}

#landing-row {
  align-items: stretch;
}

/* Left column */
.landing-photo-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  /* padding-left: 1.5rem; */
  animation: fadeInUp 1s ease;
}


#landing-right {
  padding-right: 1.5rem;
}

.photo-holder {
  width: 180px;
  height: 180px;
  padding: 0.3rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--color-accent);
  box-shadow: 0 0 12px var(--color-accent);
  margin-bottom: 1.25rem;
  transition: all 1s ease;
  &:hover { transform: translateY(-10px) scale(1.05); }
}

.photo-holder img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.landing-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: 0.25rem;
}

.landing-location {
  font-family: "Figtree";
  font-size: 0.95rem;
  color: var(--color-tertiary);
  margin-bottom: 1rem;
}

.landing-socials {
  display: flex;
  gap: 0.85rem;
}

.landing-socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--color-tertiary);
  color: var(--color-tertiary);
  transition: all 0.25s ease;
}

.landing-socials a:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  transform: translateY(-3px);
}

/* Right column */

.landing-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: 1.25rem;
  animation: fadeInUp 1s ease;
}

.landing-subtitle {
  font-family: "Figtree";
  font-size: 1rem;
  color: var(--color-tertiary);
  margin-bottom: 1.5rem;
  animation: fadeInUp 1s ease 0.2s backwards;
}

.landing-subtitle p {
  margin-bottom: 1rem;
}

.landing-subtitle p:last-child {
  margin-bottom: 0;
}

.landing-availability {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: "Figtree";
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-tertiary);
  margin-bottom: 1.5rem;
  animation: fadeInUp 1s ease 0.3s backwards;
}

.availability-dot {
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--color-accent);
  box-shadow: 0 0 0 4px
    color-mix(in srgb, var(--color-accent) 20%, transparent);
}

#landing-button {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
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

#landing-button a:first-child {
  background-color: var(--color-accent);
}

#landing-button a:first-child:hover {
  background-color: var(--color-tertiary);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

#landing-button a:last-child {
  background-color: var(--color-tertiary);
}

#landing-button a:last-child:hover {
  background-color: var(--color-accent);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* For Small Screens */
@media (min-width: 576px) {
  .landing-title {
    font-size: 2.25rem;
  }

  .btn-cta {
    padding: 12px 30px;
    font-size: 1rem;
  }
}

/* For Medium/Tablets */
@media (min-width: 768px) {
  .landing-title {
    font-size: 2.5rem;
  }

  .photo-holder {
    width: 200px;
    height: 200px;
  }

  .landing-photo-block {
    padding-left: 2rem;
  }

  .right-block {
    padding-right: 2rem;
  }

  #landing-button {
    flex-direction: row;
  }
}

/* For Desktop */
@media (min-width: 992px) {
  .landing-section {
    padding: 9rem;
    width: 100%;
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    
  }

  .landing-title {
    font-size: 2.8rem;
  }

  .photo-holder {
    width: 230px;
    height: 230px;
  }
}
</style>