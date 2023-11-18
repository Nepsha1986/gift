import { type SupportedLocales } from "@i18n/ui.ts";
import Select from "@reactComponents/Select";
import React from "react";

interface LocaleSelectProps {
  value: SupportedLocales | "";
  onChange: (val: SupportedLocales | "") => void;
}
const LocaleSelect: React.FC<LocaleSelectProps> = ({ value, onChange }) => {
  return (
    <Select
      label="Locale"
      name="locale"
      value={value}
      onChange={(val) => {
        onChange(val as SupportedLocales | "");
      }}
      options={[
        {
          label: "All",
          value: "",
        },
        {
          label: "English - United States",
          value: "en-us",
        },
        {
          label: "Ukrainian - Ukraine",
          value: "uk-ua",
        },
        {
          label: "Russian - Ukraine",
          value: "ru-ua",
        },
      ]}
    />
  );
};

export default LocaleSelect;
