import React from "react";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  label: string;
  value: string;
  onChange?: (val: string) => void;
  placeholder?: string;
}
const Input: React.FC<Props> = ({
  name,
  value,
  onChange,
  label,
  placeholder,
}) => {
  return (
    <div className={styles.input}>
      <label className={styles.input__label} htmlFor={name}>
        {label}
      </label>

      <input
        id={name}
        type="text"
        name={name}
        onChange={(event) => {
          onChange && onChange(event.target.value);
        }}
        value={value}
        className={styles.input__input}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
