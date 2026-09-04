import TechStackCard from "./TechStackCard.jsx";
import technologies from "../data/techStack.json";
import SectionHeader from "./SectionHeader.jsx";

const TechStack = () => {
  return (
    
    <section id="tools">

      <div >
        <SectionHeader
         title="Technologies"
         subtitle="What I currently work with"
        />
      </div>

      <div className="grid gap-3 grid-cols-12 px-5 md:px-0 justify-center">
        {technologies.map((technology) => (
            <div key={technology.id} className="col-span-4 md:col-span-3 lg:col-span-2">
                <TechStackCard technology={technology} />
            </div>
        ))}
        
      </div>

    </section>
 
  )
}

export default TechStack
