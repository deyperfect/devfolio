import ProfileCard from "./ProfileCard";
import LandingText from "./LandingText";

const Landing = () => {
  return (
    <section
      className="container mx-auto lg:min-h-screen lg:flex lg:items-center landing-section mt-[6.5rem] lg:mt-0"
    >
      <div className="grid gap-5 grid-cols-12 px-5 lg:px-[5rem]" id="landing-row">
        
        <ProfileCard />
        <LandingText />
        
      </div>
    </section>
  );
};

export default Landing;
