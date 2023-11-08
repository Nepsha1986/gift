import React from "react";
import styles from "./styles.module.scss";

interface Option {
  value: string;
  label: string;
}

interface Props {
  name: string;
  value: string;
  onChange: (val: string) => void;
  label: string;
  options: Option[];
}

const Select: React.FC<Props> = ({ name, value, onChange, label, options }) => {
  return (
    <div className={styles.select}>
      <label className={styles.select__label} htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        value={value}
        className={styles.select__select}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
