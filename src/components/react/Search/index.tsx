import React, { useState } from "react";
import { Button, Dialog } from "@src/common";
import PageFinder from "./components/PageFinder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import type { SupportedLanguages } from "@i18n/ui.ts";
import { useTranslations } from "@i18n/utils.ts";
import translations from "./translations.ts";
import styles from "./styles.module.scss";

const hasSearch = import.meta.env.MODE === "production";

interface Props {
  lang: SupportedLanguages;
  compact?: boolean;
}

const Search: React.FC<Props> = ({ lang, compact = false }) => {
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
          opened && <PageFinder />
        ) : (
          <p>
            {
              'Available only for production, or run "npm run preview:pagefind" to preview locally'
            }
          </p>
        )}
      </Dialog>

      {compact ? (
        <Button
          iconOnly
          color="transparent"
          ariaLabel={t("search.heading")}
          onClick={() => {
            setOpened(true);
          }}
        >
          <FontAwesomeIcon icon={faSearch} style={{ fontSize: "1.1rem" }} />
        </Button>
      ) : (
        <button
          type="button"
          className={styles.searchTrigger}
          onClick={() => {
            setOpened(true);
          }}
        >
          <FontAwesomeIcon icon={faSearch} />
          <span>{t("search.heading")}…</span>
        </button>
      )}
    </>
  );
};

export default Search;
