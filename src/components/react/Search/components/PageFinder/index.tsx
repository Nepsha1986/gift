import React, { useEffect } from "react";

const PageFinder: React.FC = () => {
  useEffect(() => {
    // @ts-expect-error as we use https://pagefind.app, please see docs
    // eslint-disable-next-line no-new
    new PagefindUI({
      element: "#search",
    });
  }, []);

  return <div id="search" />;
};

export default PageFinder;
