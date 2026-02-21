import { useEffect } from "react";
import { Thought } from "../data/content";

interface BlogPostProps {
  thought: Thought;
}

export default function BlogPost({ thought }: BlogPostProps) {
  const post = thought.blogPost;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-[920px] mx-auto px-6 pb-24 flex flex-col items-center gap-[34px]">
        {/* Article header */}
        <div className="flex flex-col gap-3 w-full max-w-[673px]">
          <p className="text-[12px] font-medium tracking-[0.48px] uppercase text-[#73838a]">
            {thought.date}
          </p>
          <h1
            className="text-[26px] font-normal text-black leading-[1.371]"
          >
            {thought.title}
          </h1>
        </div>

        {/* Intro */}
        {post?.intro && (
          <div className="w-full max-w-[673px] text-[20px] text-[#404245] leading-[30px]">
            {post.intro.map((para, i) =>
              para === "" ? (
                <p key={i} className="mt-[30px]" />
              ) : (
                <p key={i}>{para}</p>
              )
            )}
          </div>
        )}

        {/* Sections */}
        {post?.sections.map((section, i) => (
          <div key={i} className="w-full flex flex-col items-center gap-[34px]">
            {section.image && (
              <div className="w-full rounded-2xl overflow-hidden bg-[#f2f5f7] h-[486px]">
                <img
                  src={section.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {(section.heading || section.body.length > 0) && (
              <div className="flex flex-col gap-6 w-full max-w-[673px]">
                {section.heading && (
                  <h2 className="text-[24px] font-normal text-black leading-[1.371]">
                    {section.heading}
                  </h2>
                )}
                <div className="text-[20px] text-[#404245] leading-[30px]">
                  {section.body.map((para, j) =>
                    para === "" ? (
                      <p key={j} className="mt-[30px]" />
                    ) : (
                      <p key={j}>{para}</p>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
