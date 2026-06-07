import { LoginForm } from "@/libs/tts/components/LoginForm";
import { LoginIllustration } from "@/libs/tts/components/LoginIllustration";

import styles from "./LoginPage.module.css";

export function LoginPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.left}>
          <LoginIllustration />
        </section>

        <section className={styles.right}>
          <LoginForm />
        </section>
      </div>
    </main>
  );
}
