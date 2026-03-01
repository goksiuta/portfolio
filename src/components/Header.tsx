const link = "underline underline-offset-2 decoration-[1px] decoration-black hover:decoration-[2px] transition-all";

export default function Header() {
  return (
    <header className="mb-12">
      <p className="text-[26px] leading-relaxed text-gray-900 max-w-[671px]">
        Lead Product Designer at{" "}
        <a href="https://app.layer3.xyz" target="_blank" rel="noopener noreferrer" className={link}>Layer3</a>
        , currently working on{" "}
        <a href="http://ample.money/" target="_blank" rel="noopener noreferrer" className={link}>Ample</a>
        {" "}to bring crypto to mass adoption, and{" "}
        <a href="https://apps.apple.com/sk/app/mellowsleep/id6636552824" target="_blank" rel="noopener noreferrer" className={link}>Mellow</a>
        , a mobile app helping young parents with science-backed parenting techniques.
      </p>
      <p className="mt-10 text-[26px] leading-relaxed text-gray-900 max-w-[671px]">
        You can find me at{" "}
        <a href="https://x.com/goksiuta" target="_blank" rel="noopener noreferrer" className={link}>goksiuta</a>
        {" "}posting work and design thoughts or{" "}
        <a href="mailto:greg@goksiuta.com" className={link}>greg@goksiuta.com</a>
      </p>
    </header>
  );
}
