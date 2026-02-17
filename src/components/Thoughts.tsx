import { thoughts } from "../data/content";

export default function Thoughts() {
  return (
    <section>
      <h2 className="text-[24px] font-normal text-gray-900 mb-4 pb-4 border-b border-[#F2F2F2]">Thoughts</h2>
      <div className="flex flex-col gap-2">
        {thoughts.map((thought, index) => (
          <a
            key={index}
            href={thought.url}
            className="block group hover:bg-[#F9FBFD] active:bg-[#F2F5F7] rounded-[20px] px-[8px] py-[16px] -mx-[8px] transition-colors"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <span className="text-xs font-normal tracking-wider text-gray-400 uppercase shrink-0 sm:w-[64px] sm:pt-1">
                {thought.date}
              </span>
              <div className="w-full sm:w-[420px] shrink-0">
                <h3 className="text-[18px] font-normal text-gray-900 leading-snug group-hover:text-gray-600 transition-colors">
                  {thought.title}
                </h3>
                <p className="mt-2 text-[16px] text-gray-400 leading-relaxed">
                  {thought.description}
                </p>
              </div>
              {thought.image ? (
                <img
                  src={thought.image}
                  alt={thought.title}
                  className="w-full sm:flex-1 h-36 bg-gray-100 rounded-xl object-cover group-active:scale-[0.95] transition-transform"
                />
              ) : (
                <div className="w-full sm:flex-1 h-36 bg-gray-100 rounded-xl" />
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
