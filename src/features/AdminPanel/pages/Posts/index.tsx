import React from "react";
import { useAstroContext } from "@src/features/AdminPanel/context/astroContext.tsx";

const Posts: React.FC = () => {
  const { ideaPages } = useAstroContext();

  return (
    <div>
      <h1>Posts</h1>
      {ideaPages?.map((i, index) => (
        <div key={i.slug}>
          {index + 1}.{" "}
          <a
            target="_blank"
            href={`https://github.com/Nepsha1986/gift/edit/main/src/content/gifts/${i.slug}.md`}
            rel="noreferrer"
          >
            {i.title} - {i.slug}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Posts;
