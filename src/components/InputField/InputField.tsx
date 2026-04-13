import type { InputHTMLAttributes } from "react";
import styles from "./InputField.module.scss";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField = ({ label, ...props }: InputFieldProps) => (
  <div className={styles["input-field__wrapper"]}>
    <input
      className={styles["input-field__input"]}
      aria-label={label}
      {...props}
    />
  </div>
);

export default InputField;