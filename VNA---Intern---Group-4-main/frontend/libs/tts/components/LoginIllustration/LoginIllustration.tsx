import Image from "next/image";

import styles from "./LoginIllustration.module.css";

export function LoginIllustration() {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/images/login-illustration.png"
        alt="Login illustration"
        width={760}
        height={640}
        priority
        className={styles.image}
      />
    </div>
  );
}
