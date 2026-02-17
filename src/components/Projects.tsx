import { projects } from "../data/content";

export default function Projects() {
  return (
    <section className="mb-12">
      <h2 className="text-[24px] font-normal text-gray-900 mb-4 pb-4 border-b border-[#F2F2F2]">Projects</h2>
      <div className="flex flex-col gap-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            className="block group hover:bg-[#F9FBFD] active:bg-[#F2F5F7] rounded-[20px] px-[8px] py-[8px] -mx-[8px] transition-colors"
          >
            <div className="flex items-center gap-8">
              <img
                src={project.icon}
                alt={`${project.name} logo`}
                className="w-[64px] h-[64px] rounded-[20px] shrink-0 object-cover group-active:scale-[0.95] transition-transform"
              />
              <div className="flex-1">
                <h3 className="text-[18px] font-normal text-gray-900 group-hover:text-gray-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-[16px] text-gray-400">{project.description}</p>
              </div>
              <span className="text-gray-300 text-[18px] shrink-0 group-hover:text-gray-400 transition-colors">›</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
