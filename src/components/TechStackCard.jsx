import { FaReact, FaHtml5, FaCss3Alt, FaVuejs, FaNodeJs, FaBootstrap, FaAws } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiPostman, SiTailwindcss } from "react-icons/si";

const techIcons = {
  React: { icon: FaReact, color: "text-[#61DAFB]" },
  HTML: { icon: FaHtml5, color: "text-[#E34C26]" },
  CSS: { icon: FaCss3Alt, color: "text-[#1572B6]" },
  "Vue.js": { icon: FaVuejs, color: "text-[#42B883]" },
  "Node.js": { icon: FaNodeJs, color: "text-[#83CD29]" },
  Bootstrap: { icon: FaBootstrap, color: "text-[#563D7C]" },
  AWS: { icon: FaAws, color: "text-[#FF9900]" },
  JavaScript: { icon: SiJavascript, color: "text-[#F7DF1E]", background: "bg-black" },
  MongoDB: { icon: SiMongodb, color: "text-[#47A248]" },
  "Express.js": { icon: SiExpress, color: "text-[#000000]" },
  Postman: { icon: SiPostman, color: "text-[#FF6C34]" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-[#06B6D4]" }
};

const TechStackCard = ({ technology }) => {
  const tech = techIcons[technology.name];
  const Icon = tech.icon;
  const color = tech.color;
  const background = tech.background;

  return (
    <div className="flex flex-col items-center justify-center gap-[0.5rem] py-3 px-2 rounded-xl border border-transparent bg-[color-mix(in_srgb,var(--color-tertiary)_20%,transparent)]">
      <div className="flex items-center justify-center">
        <Icon className={`size-8 ${color} ${background ?? "bg-transparent"}`} />
      </div>
      <p className="text-[0.7rem] text-center text-secondary font-figtree m-0">
        {technology.name}
      </p>
    </div>
  )
}

export default TechStackCard
