import TechStackCard from "./TechStackCard.jsx";
import technologies from "../data/techStack.json";

const TechStack = () => {
  return (
    
    <section>

      <div >
        <h2 >Tech Stack</h2>
        <p >What I currently work with</p>
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
