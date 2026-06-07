import { InputHTMLAttributes } from "react";

import styles from "./Checkbox.module.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Checkbox({ label, id, ...props }: CheckboxProps) {
  return (
    <label className={styles.checkbox} htmlFor={id}>
      <input id={id} type="checkbox" {...props} />
      <span className={styles.customCheckmark} />
      <span className={styles.labelSpan}>{label}</span>
    </label>
  );
}

