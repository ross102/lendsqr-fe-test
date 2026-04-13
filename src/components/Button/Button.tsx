import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className, ...props }: ButtonProps) => (
  <button className={`${styles.button} ${className ?? ""}`} {...props}>
    {children}
  </button>
);

export default Button;