import React, { useState } from "react";
import { Button, Dialog } from "@src/common";
import PageFinder from "./components/PageFinder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import type { SupportedLanguages } from "@i18n/ui.ts";
import { useTranslations } from "@i18n/utils.ts";
import translations from "./translations.ts";

const hasSearch = import.meta.env.MODE === "production";

interface Props {
  lang: SupportedLanguages;
}

const Search: React.FC<Props> = ({ lang }) => {
  const t = useTranslations(lang as SupportedLanguages, translations);
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Dialog
        heading={t("search.heading")}
        size="medium"
        open={opened}
        onClickClose={() => {
          setOpened(false);
        }}
      >
        <p>{t("search.term")}</p>
        {hasSearch ? (
          <PageFinder />
        ) : (
          <p>
            {
              'Available only for production, or run "npm run preview:pagefind" to preview locally'
            }
          </p>
        )}
      </Dialog>

      <Button
        color="transparent"
        onClick={() => {
          setOpened(true);
        }}
      >
        <FontAwesomeIcon icon={faSearch} style={{ marginRight: "10px" }} />{" "}
        {t("search.heading")}
      </Button>
    </>
  );
};

export default Search;
