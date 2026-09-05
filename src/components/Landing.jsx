import ProfileCard from "./ProfileCard";
import LandingText from "./LandingText";

const Landing = () => {
  return (
    <section
      className="lg:min-h-screen lg:flex lg:items-center mt-[3rem] lg:mt-0"
      id="hero"
    >
      <div className="grid gap-5 grid-cols-12 px-5" id="landing-row">
        
        <ProfileCard />
        <LandingText />
        
      </div>
    </section>
  );
};

export default Landing;
