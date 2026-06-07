"use client";

import Image from "next/image";
import styles from "@/app/dashboard/dashboard.module.css";

export default function UserProfile() {
  return (
    <div className={styles.card}>
      <h3>Thông tin cá nhân</h3>

      <div className={styles.avatarSection}>
        <Image
          src="/images/avatar.png"
          alt="Avatar"
          width={120}
          height={120}
          className={styles.avatar}
        />

        <button className={styles.uploadBtn}>
          Tải ảnh lên
        </button>
      </div>

      <div className={styles.grid}>
        <input placeholder="Tên đăng nhập" />

        <input placeholder="Họ và tên" />

        <input type="date" />

        <select>
          <option>Nam</option>
          <option>Nữ</option>
        </select>

        <input placeholder="Chức danh" />

        <select>
          <option>Quản trị viên</option>
          <option>Người dùng</option>
        </select>

        <input
          placeholder="Email"
          className={styles.fullWidth}
        />
      </div>

      <h3 style={{ marginTop: "30px" }}>
        Thông tin liên hệ
      </h3>

      <div className={styles.grid}>
        <input placeholder="Tỉnh/Thành phố" />

        <input placeholder="Phường/Xã" />

        <input
          placeholder="Địa chỉ"
          className={styles.fullWidth}
        />
      </div>
    </div>
  );
}