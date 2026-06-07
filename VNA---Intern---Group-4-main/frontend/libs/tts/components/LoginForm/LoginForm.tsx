
"use client";

import Image from "next/image";

import { Button } from "@/libs/core/components/Button";
import { Checkbox } from "@/libs/core/components/Checkbox";
import { Input } from "@/libs/core/components/Input";

import styles from "./LoginForm.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:8080/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem(
        "token",
        data.token
      );

      alert("Đăng nhập thành công");
      router.push("/dashboard");
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Lỗi kết nối server");
  }
};

  return (
    <div className={styles.card}>
      <div className={styles.logoWrapper}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={80}
          height={80}
          priority
          className={styles.logo}
        />
      </div>

      <h1 className={styles.title}>
        Phần Mềm Quản Lý - Tạo Lập Cơ Sở Dữ Liệu
        <br />
        An Toàn Vệ Sinh Lao Động
      </h1>

      <form className={styles.form} onSubmit= {handleSubmit}>
        <h2 className={styles.formTitle}>ĐĂNG NHẬP</h2>

        <Input
          id="username"
          label="Tên tài khoản *"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
/>
        <Input
          id="password"
          label="Mật khẩu *"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        <div className={styles.options}>
          <Checkbox id="rememberMe" label="Nhớ đăng nhập" defaultChecked />
          <a href="#" className={styles.forgotPassword}>
            Quên mật khẩu
          </a>
        </div>

        <div className={styles.actions}>
          <Button type="submit">Đăng nhập</Button>
          <Button type="button" variant="outline">
            Đăng ký tài khoản doanh nghiệp
          </Button>
        </div>
      </form>
    </div>
  );
}

