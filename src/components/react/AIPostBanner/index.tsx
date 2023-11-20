import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import Banner from "src/common/Banner";
import translations from "./translations.ts";
import { useTranslations } from "@i18n/utils.ts";
import type { SupportedLanguages } from "@i18n/ui.ts";

interface Props {
  lang: SupportedLanguages;
}
const AIPostBanner: React.FC<Props> = ({ lang }) => {
  const t = useTranslations(lang as SupportedLanguages, translations);

  return (
    <div style={{ marginBottom: "1rem", marginTop: "3rem" }}>
      <Banner
        image={<FontAwesomeIcon icon={faInfoCircle} />}
        text={t("banner.text")}
      />
    </div>
  );
};

export default AIPostBanner;
