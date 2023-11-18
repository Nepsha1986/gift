import React from "react";
import Card from "@src/features/AdminPanel/components/Card";
import { useAstroContext } from "@src/features/AdminPanel/context/astroContext.tsx";
import type { SupportedLocales } from "@i18n/ui.ts";
import type { Category } from "@src/types/category.ts";
import { Link } from "react-router-dom";

const supportedLocales: SupportedLocales[] = ["en-us", "ru-ua", "uk-ua"];

const ListItem: React.FC<{ title: string; value: number }> = ({
  title,
  value,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px dashed #eee",
      }}
    >
      <span>{title}:</span>{" "}
      <span>
        {value} <span style={{ fontSize: "0.9rem" }}>pages/each</span>
      </span>
    </div>
  );
};

const IdeaPagesOverview: React.FC = () => {
  const { ideaPages } = useAstroContext();

  const getPageCount = (category?: Category): number => {
    if (!category)
      return ideaPages?.length ? ideaPages.length / supportedLocales.length : 0;

    const filtered = ideaPages?.filter((i) => i.category === category);

    return filtered?.length ? filtered.length / supportedLocales.length : 0;
  };

  return (
    <Card header="Ideas">
      <p>
        Locales:{" "}
        <span style={{ fontWeight: "bold" }}>
          {supportedLocales.join(" | ")}
        </span>
      </p>

      <h3>
        Total posts: {ideaPages?.length} ({getPageCount()} for each locale)
      </h3>

      <div style={{ marginBottom: "1rem" }}>
        <ListItem title={"For men"} value={getPageCount("for-men")} />
        <ListItem title={"For women"} value={getPageCount("for-women")} />
        <ListItem title={"For teens"} value={getPageCount("for-teens")} />
        <ListItem title={"For kids"} value={getPageCount("for-kids")} />
      </div>

      <Link to={"/admin/posts?active"}>View</Link>
    </Card>
  );
};

export default IdeaPagesOverview;
