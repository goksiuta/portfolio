import { projects } from "../data/content";

const ExternalLinkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M3 13L13 3M13 3H7M13 3V9"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Projects() {
  return (
    <section className="mb-12">
      <h2 className="text-[24px] font-normal text-gray-900 mb-4 pb-4 border-b border-[#F2F2F2]">Projects</h2>
      <div className="flex flex-col gap-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
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
              <span
                className="text-gray-400 shrink-0 mr-6 opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
              >
                <ExternalLinkIcon />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
