import socials from "../data/socials.json";

const SocialLinks = () => (
  <div className="flex gap-3.5 md:mt-5">
    {socials.map(({ id, label, link, external, path }) => (
      <a
        key={id}
        href={link}
        aria-label={label}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        className="icon-link"
      >
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d={path} />
        </svg>
      </a>
    ))}


    {/* Hardcoded Email Icon */}
    <a href="mailto:edrylpalinis@gmail.com" aria-label="Email">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="icon-link"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    </a>
  </div>
);

export default SocialLinks;
