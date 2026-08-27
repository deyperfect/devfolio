const TechStackCard = ({ technology }) => {
  return (
    <div className="flex flex-col items-center justify-center g-[0.5rem] py-3 px-2 rounded-xl border border-transparent bg-tertiary">
      <div className="flex items-center justify-center">
        <img className="size-8 max-w-full max-h-full object-contain" 
          src={technology.image} 
          alt={technology.alt} 
          loading="lazy"
        />
      </div>
      <p className="text-[0.7rem] text-center text-primary font-semibold m-0">
        {technology.name}
      </p>
    </div>
  )
}

export default TechStackCard
