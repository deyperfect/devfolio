import Socials from "../components/Socials.jsx"
import { PiMapPinLineLight } from "react-icons/pi";

const ProfileCard = () => {
  return (
    <div
      className="col-span-12 md:col-span-5 lg:col-span-3 mx-auto"
    >
      <div className="flex h-full flex-col items-center justify-center text-center animate-[fadeInUp_1s_ease]">
        <div
            className="mb-5
            size-[250px]
            overflow-hidden
            rounded-full
            border-[3px] border-accent/40
            p-[0.3rem]
            shadow-[0_0_12px_var(--color-accent)]
            transition-all duration-1000
            hover:-translate-y-2.5 hover:scale-105"
        >
          <img
            src="/images/photo.webp"
            alt="Edryl Palinis"
            width={250}
            height={250}
            fetchpriority="high"
            className="aspect-square h-full w-full rounded-full object-cover"
          />
        </div>

        <p className="mb-1 text-2xl lg:text-3xl font-extrabold font-jakarta text-primary">
          Edryl Palinis
        </p>
        <p className="flex items-center gap-1 mb-4 font-figtree text-md text-text">
          <PiMapPinLineLight className="text-md" />
          Bulacan, Philippines
        </p>

        <Socials />
        
      </div>
    </div>
  );
};

export default ProfileCard;
