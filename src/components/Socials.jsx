import socials from "../data/socials.json";
import { FaGithub, FaLinkedinIn  } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const socialIcons = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  email: CiMail
};

const SocialLinks = () => (
  
  <div className="flex gap-3.5 md:mt-5">
    {socials.map((social) => {
      const Icon = socialIcons[social.icon]

      return (
        <a
        key={social.id}
        href={social.link}
        aria-label={social.label}
        {...(social.external && { target: "_blank", rel: "noopener noreferrer" })}
        className="icon-link"
      >
        <Icon className="text-2xl"/>
      </a>
      )
      
    })}
  </div>
);

export default SocialLinks;
