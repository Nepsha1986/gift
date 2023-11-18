import React, { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-solid-svg-icons";

import { useAstroContext } from "@src/features/AdminPanel/context/astroContext.tsx";
import Select from "@reactComponents/Select";
import type { SupportedLocales } from "@i18n/ui.ts";
import { getCleanSlug, getLocaleFromSlug } from "@i18n/utils.ts";
import Button from "@reactComponents/Button";
import type { Category } from "@src/types/category.ts";
import Search from "@src/features/AdminPanel/components/Search";
import LocaleSelect from "@src/features/AdminPanel/components/LocaleSelect";

const PROJECT_GITHUB_REPO = "https://github.com/Nepsha1986/gift";

const Posts: React.FC = () => {
  const { ideaPages } = useAstroContext();
  const [locale, setLocale] = useState<SupportedLocales | "">("");
  const [category, setCategory] = useState<Category | "">("");
  const [search, setSearch] = useState<string>("");

  const filtered = useMemo(() => {
    let filteredPages = ideaPages;

    if (locale) {
      filteredPages = filteredPages?.filter(
        (i) => getLocaleFromSlug(i.slug) === locale,
      );
    }

    if (category) {
      filteredPages = filteredPages?.filter((i) => i.category === category);
    }

    if (search) {
      filteredPages = filteredPages?.filter(
        (i) =>
          i.title.toLowerCase().includes(search.toLowerCase()) ||
          getCleanSlug(i.slug).includes(search.toLowerCase()),
      );
    }

    return filteredPages;
  }, [locale, search, ideaPages, category]);

  return (
    <div>
      <h1>Posts</h1>

      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          display: "flex",
          gap: "10px",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <Search value={search} onChange={setSearch} />
        </div>

        <div style={{ flexGrow: 1 }}>
          <LocaleSelect value={locale} onChange={setLocale} />
        </div>

        <div style={{ flexGrow: 1 }}>
          <Select
            label="Category"
            name="category"
            value={category as string}
            onChange={(val) => {
              setCategory(val as Category);
            }}
            options={[
              {
                label: "All",
                value: "",
              },
              {
                label: "For men",
                value: "for-men",
              },
              {
                label: "For women",
                value: "for-women",
              },
              {
                label: "For teems",
                value: "for-teens",
              },
              {
                label: "For kids",
                value: "for-kids",
              },
            ]}
          />
        </div>
      </div>

      {!filtered?.length && <p>No matching posts found.</p>}

      {!!filtered?.length && (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>RefID / Slug</th>
              <th>Category</th>
              <th>Locale</th>
              <th>Modules</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered?.map((page, index) => (
              <tr key={index}>
                <td>
                  <strong>
                    {index + 1}. {page.title}
                  </strong>
                </td>
                <td>{getCleanSlug(page.slug)}</td>
                <td>{page.category}</td>
                <td>{getLocaleFromSlug(page.slug)}</td>
                <td>{page.modules.join(", ")}</td>
                <td>
                  <div style={{ display: "flex" }}>
                    <Button
                      iconOnly
                      color="transparent"
                      onClick={() => {
                        window.open(
                          `/${getLocaleFromSlug(page.slug)}/gifts/${
                            page.category
                          }/${getCleanSlug(page.slug)}`,
                          "_blank",
                        );
                      }}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </Button>

                    <Button
                      iconOnly
                      color="transparent"
                      onClick={() => {
                        window.open(
                          `${PROJECT_GITHUB_REPO}/edit/main/src/content/gifts/${page.slug}.md`,
                          "_blank",
                        );
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Posts;
