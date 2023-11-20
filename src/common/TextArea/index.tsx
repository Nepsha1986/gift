import React from "react";
import styles from "./styles.module.scss";

interface TextareaProps {
  name: string;
  value: string;
  onChange?: (val: string) => void;
  label: string;
  placeholder?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  name,
  value,
  onChange,
  label,
  placeholder,
}) => {
  return (
    <div className={styles.textarea}>
      <label className={styles.textarea__label} htmlFor={name}>
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        onChange={(event) => {
          onChange && onChange(event.target.value);
        }}
        value={value}
        className={styles.textarea__input}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Textarea;
