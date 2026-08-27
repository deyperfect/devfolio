

const LandingText = () => {
  return (
    <div className="col-span-12 md:col-span-7 lg:col-span-9 mx-auto mt-[3rem] md:mt-0">
      <div className="md:pr-8">
        <div
          className="mb-6
                hidden
                md:inline-flex 
                items-center
                gap-2.5
                font-figtree
                text-[0.9rem] 
                font-semibold
                text-tertiary
                animate-[fadeInUp_1s_ease_0.3s_backwards]"
        >
          <span
            className="size-2 shrink-0 rounded-full
                bg-accent
                shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent)_20%,transparent)]"
          ></span>
          Open to Full Stack / Frontend / Backend junior roles
        </div>

        <h1>Full Stack Web Developer</h1>

        <div
          className="mb-6
                font-figtree
                lg:text-[1.2rem]
                text-tertiary
                animate-[fadeInUp_1s_ease_0.2s_backwards]"
        >
          <p className="mb-4">
            I'm a web developer who learns best by building. I like turning
            ideas into working applications, figuring out how things work, and
            discovering something new with every project. I've worked with Vue,
            React, Node.js, Express, and MongoDB, and I'm always looking for
            ways to improve how I write and build web applications.
          </p>
          <p className="mb-4">
            My journey into web development started as a career change, and a
            lot of my learning has come from self-study, hands-on projects, and
            simply spending time solving problems I don't understand yet. I'm
            still growing as a developer, but I genuinely enjoy the process, and
            I'm excited to keep learning, building, and becoming better at what
            I do.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <a
            href="#projects"
            className="button
                bg-accent"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button
                bg-tertiary"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingText;
