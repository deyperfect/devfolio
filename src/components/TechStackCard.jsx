const TechStackCard = ({ technology }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[0.5rem] py-3 px-2 rounded-xl border border-transparent bg-[color-mix(in_srgb,var(--color-tertiary)_20%,transparent)]">
      <div className="flex items-center justify-center">
        <img className="size-8 max-w-full max-h-full object-contain" 
          src={technology.image} 
          alt={technology.alt} 
          loading="lazy"
        />
      </div>
      <p className="text-[0.7rem] text-center text-secondary font-figtree m-0">
        {technology.name}
      </p>
    </div>
  )
}

export default TechStackCard
