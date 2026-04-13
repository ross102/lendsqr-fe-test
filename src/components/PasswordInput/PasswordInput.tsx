import type { InputHTMLAttributes } from "react";
import styles from "./PasswordInput.module.scss";

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  showPassword: boolean;
  onToggleVisibility: () => void;
}

const PasswordInput = ({
  label,
  showPassword,
  onToggleVisibility,
  ...props
}: PasswordInputProps) => (
  <div className={styles["password-input__wrapper"]}>
    <input
      type={showPassword ? "text" : "password"}
      className={styles["password-input__input"]}
      aria-label={label}
      {...props}
    />
    <button
      type="button"
      className={styles["password-input__toggle-btn"]}
      onClick={onToggleVisibility}
      aria-label={showPassword ? "Hide password" : "Show password"}
    >
      {showPassword ? "HIDE" : "SHOW"}
    </button>
  </div>
);

export default PasswordInput;
