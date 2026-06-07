"use client";

import styles from "./dashboard.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  FaHome,
  FaCog,
  FaLaptopCode,
  FaBook,
  FaSchool,
  FaChevronDown,
  FaChevronRight
} from "react-icons/fa";

export default function Dashboard() {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);

  const [openSystem, setOpenSystem] = useState(false);
  const [openSoftware, setOpenSoftware] = useState(false);
  const [openTeacher, setOpenTeacher] = useState(false);
  const [openPrincipal, setOpenPrincipal] = useState(false);

  const [activeMenu, setActiveMenu] = useState("home");

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
          />

          <span>
            Hệ thống quản lý
            <br />
            An toàn vệ sinh lao động
          </span>
        </div>

        <nav>
          <ul className={styles.menu}>
            {/* Trang chủ */}
            <li
              className={
                activeMenu === "home"
                  ? styles.active
                  : ""
              }
              onClick={() => setActiveMenu("home")}
            >
              <span>
                <FaHome />
                Trang chủ
              </span>
            </li>

            {/* Hệ thống */}
            <li
              onClick={() =>
                setOpenSystem(!openSystem)
              }
            >
              <span>
                <FaCog />
                Hệ thống
              </span>

              {openSystem ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              )}
            </li>

            {openSystem && (
              <ul className={styles.subMenu}>
                <li
                  onClick={() =>
                    router.push("/users")
                  }
                >
                  Quản lý người dùng
                </li>

                <li
                  onClick={() =>
                    router.push("/roles")
                  }
                >
                  Vai trò người dùng
                </li>

                <li
                  onClick={() =>
                    router.push("/receive")
                  }
                >
                  Tiếp nhận
                </li>
              </ul>
            )}

            {/* Quản trị phần mềm */}
            <li
              onClick={() =>
                setOpenSoftware(!openSoftware)
              }
            >
              <span>
                <FaLaptopCode />
                Quản trị phần mềm
              </span>

              {openSoftware ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              )}
            </li>

            {openSoftware && (
              <ul className={styles.subMenu}>
                <li>Danh mục</li>
                <li>Cấu hình hệ thống</li>
                <li>Nhật ký hệ thống</li>
              </ul>
            )}

            {/* Chuẩn nghề nghiệp GV */}
            <li
              onClick={() =>
                setOpenTeacher(!openTeacher)
              }
            >
              <span>
                <FaBook />
                Chuẩn nghề nghiệp giáo viên
              </span>

              {openTeacher ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              )}
            </li>

            {openTeacher && (
              <ul className={styles.subMenu}>
                <li>Tự đánh giá</li>
                <li>Minh chứng</li>
                <li>Báo cáo</li>
              </ul>
            )}

            {/* Chuẩn nghề nghiệp HT-HP */}
            <li
              onClick={() =>
                setOpenPrincipal(!openPrincipal)
              }
            >
              <span>
                <FaSchool />
                Chuẩn nghề nghiệp HT-HP
              </span>

              {openPrincipal ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              )}
            </li>

            {openPrincipal && (
              <ul className={styles.subMenu}>
                <li>Hiệu trưởng</li>
                <li>Hiệu phó</li>
                <li>Thống kê</li>
              </ul>
            )}
          </ul>
        </nav>

        {/* USER MENU */}
        <div className={styles.userSection}>
          <button
            className={styles.userButton}
            onClick={() =>
              setShowMenu(!showMenu)
            }
          >
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              width={40}
              height={40}
              className={styles.userAvatar}
            />

            <span>Nguyễn Văn A ▼</span>
          </button>

          {showMenu && (
            <div className={styles.dropdownMenu}>
              <button
                onClick={() =>
                  router.push("/profile")
                }
              >
                Thông tin tài khoản
              </button>

              <button
                onClick={() =>
                  router.push(
                    "/change-password"
                  )
                }
              >
                Đổi mật khẩu
              </button>

              <button
                onClick={handleLogout}
              >
                Đăng xuất
              </button>
            </div>
          )}
        </div>
      </aside>

      <main className={styles.content}>
        <div className={styles.header}>
          <h2>Chi tiết người dùng</h2>

          <button className={styles.saveButton}>
            Lưu
          </button>
        </div>

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
    <div>
      <label className={styles.fieldLabel}>
        Tên đăng nhập
      </label>
      <input />
    </div>

    <div>
      <label className={styles.fieldLabel}>
        Họ và tên
      </label>
      <input />
    </div>

    <div>
      <label className={styles.fieldLabel}>
        Ngày sinh
      </label>
      <input type="date" />
    </div>

    <div>
      <label className={styles.fieldLabel}>
        Giới tính
      </label>
      <select>
        <option>Nam</option>
        <option>Nữ</option>
      </select>
    </div>

    <div>
      <label className={styles.fieldLabel}>
        Chức danh
      </label>
      <input />
    </div>

    <div>
      <label className={styles.fieldLabel}>
        Vai trò
      </label>
      <select>
        <option>Quản trị viên</option>
        <option>Người dùng</option>
      </select>
    </div>

    <div className={styles.fullWidth}>
      <label className={styles.fieldLabel}>
        Email
      </label>
      <input type="email" />
    </div>
  </div>

  <h3 style={{ marginTop: 30 }}>
    Thông tin liên hệ
  </h3>

  <div className={styles.grid}>
    <div>
      <label className={styles.fieldLabel}>
        Tỉnh/Thành phố
      </label>

      <select>
        <option>-- Chọn Tỉnh/Thành phố --</option>
        <option>TP Hồ Chí Minh</option>
        <option>Hà Nội</option>
        <option>Đà Nẵng</option>
        <option>Cần Thơ</option>
        <option>Đồng Nai</option>
        <option>Bình Dương</option>
        <option>Long An</option>
        <option>Tây Ninh</option>
      </select>
    </div>

    <div>
      <label className={styles.fieldLabel}>
        Phường/Xã
      </label>

      <select>
        <option>-- Chọn Phường/Xã --</option>
        <option>Phường 1</option>
        <option>Phường 2</option>
        <option>Phường 3</option>
      </select>
    </div>

    <div className={styles.fullWidth}>
      <label className={styles.fieldLabel}>
        Địa chỉ chi tiết
      </label>

      <input />
    </div>
  </div>
</div>
 </main>
    </div>
  );
}