import { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const buttonClassName = `${styles.button} ${styles[variant]} ${className}`;

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}
