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
  FaChevronRight,
  FaRegCalendarAlt,
  FaRegEye,
  FaRegEyeSlash
} from "react-icons/fa";

export default function Dashboard() {
  const router = useRouter();

  // State điều khiển các menu con bên Sidebar
  const [openSystem, setOpenSystem] = useState(true);
  const [openSoftware, setOpenSoftware] = useState(false);
  const [openTeacher, setOpenTeacher] = useState(false);
  const [openPrincipal, setOpenPrincipal] = useState(false);
  
  // State điều khiển menu User góc dưới trái
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("user-management");

  // State điều khiển trạng thái Kích hoạt (Switch button)
  const [isActive, setIsActive] = useState(true);

  // State điều khiển đóng/mở các loại Pop-up
  const [showOtp, setShowOtp] = useState(false);
  const [showChangeEmail, setShowChangeEmail] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  // State ẩn/hiện mật khẩu trong Pop-up Đổi mật khẩu
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className={styles.layout}>
      
      {/* SIDEBAR - THANH ĐIỀU HƯỚNG TRÁI */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <div className={styles.logoIconPlaceholder}>
            <Image src="/images/logo.png" alt="Logo" width={32} height={32} />
          </div>
          <span>Ủy ban nhân dân<br />tỉnh ABC</span>
        </div>

        <nav className={styles.navContainer}>
          <div className={styles.menuSectionHeading}>Hướng dẫn sử dụng</div>
          
          <ul className={styles.menuList}>
            {/* Trang chủ */}
            <li 
              className={activeMenu === "home" ? styles.menuItemActive : ""}
              onClick={() => setActiveMenu("home")}
            >
              <span><FaHome className={styles.menuIcon} /> Trang chủ</span>
            </li>

            {/* Hệ thống */}
            <li onClick={() => setOpenSystem(!openSystem)}>
              <span><FaCog className={styles.menuIcon} /> Hệ thống</span>
              {openSystem ? <FaChevronDown className={styles.arrowIcon} /> : <FaChevronRight className={styles.arrowIcon} />}
            </li>

            {openSystem && (
              <ul className={styles.subMenu}>
                <li 
                  className={activeMenu === "user-management" ? styles.subItemActive : ""}
                  onClick={() => setActiveMenu("user-management")}
                >
                  Quản lý người dùng
                </li>
                <li onClick={() => router.push("/roles")}>Vai trò người dùng</li>
                <li onClick={() => router.push("/receive")}>Tiếp nhận</li>
              </ul>
            )}

            {/* Quản trị phần mềm */}
            <li onClick={() => setOpenSoftware(!openSoftware)}>
              <span><FaLaptopCode className={styles.menuIcon} /> Quản trị phần mềm</span>
              {openSoftware ? <FaChevronDown className={styles.arrowIcon} /> : <FaChevronRight className={styles.arrowIcon} />}
            </li>

            {/* Chuẩn nghề nghiệp GV */}
            <li onClick={() => setOpenTeacher(!openTeacher)}>
              <span><FaBook className={styles.menuIcon} /> Chuẩn nghề nghiệp giáo viên</span>
              {openTeacher ? <FaChevronDown className={styles.arrowIcon} /> : <FaChevronRight className={styles.arrowIcon} />}
            </li>

            {/* Chuẩn nghề nghiệp HT-HP */}
            <li onClick={() => setOpenPrincipal(!openPrincipal)}>
              <span><FaSchool className={styles.menuIcon} /> Chuẩn nghề nghiệp HT-HP</span>
              {openPrincipal ? <FaChevronDown className={styles.arrowIcon} /> : <FaChevronRight className={styles.arrowIcon} />}
            </li>
          </ul>

          <div className={styles.menuSectionHeading} style={{ marginTop: "15px" }}>Báo cáo thống kê</div>
        </nav>

        {/* GÓC TÀI KHOẢN NGƯỜI DÙNG PHÍA DƯỚI SIDEBAR */}
        <div className={styles.userSection}>
          {showUserMenu && (
            <div className={styles.userDropdownMenu}>
              <div className={styles.dropdownItem} onClick={() => { router.push("/profile"); setShowUserMenu(false); }}>
                <span className={styles.dropdownIcon}>👤</span> Thông tin tài khoản
              </div>
              <div className={styles.dropdownItem} onClick={() => { setShowChangePassword(true); setShowUserMenu(false); }}>
                <span className={styles.dropdownIcon}>🔑</span> Đổi mật khẩu
              </div>
              <div className={`${styles.dropdownItem} styles.logoutBtn`} onClick={handleLogout}>
                <span className={styles.dropdownIcon}>🚪</span> Đăng xuất
              </div>
            </div>
          )}

          <button
            type="button"
            className={styles.userButton}
            onClick={(e) => {
              e.stopPropagation();
              setShowUserMenu(!showUserMenu);
            }}
          >
            <div className={styles.userInfoLeft}>
              <Image
                src="/images/avatar.png"
                alt="Avatar"
                width={28}
                height={28}
                className={styles.userAvatarCircle}
              />
              <span>Phan Thanh Tùng</span>
            </div>
            <FaChevronRight className={styles.userArrowRight} />
          </button>
        </div>
      </aside>

      {/* NỘI DUNG CHÍNH CHỈ TIẾT NGƯỜI DÙNG */}
      <main className={styles.content} onClick={() => setShowUserMenu(false)}>
        <div className={styles.header}>
          <h2>Chi tiết người dùng</h2>
          <div className={styles.headerButtons}>
            <button type="button" className={styles.cancelButton}>Hủy bỏ</button>
            <button type="button" className={styles.saveButton}>Lưu</button>
          </div>
        </div>

        {/* KHU VỰC THẺ TRẮNG CHỨA FORM */}
        <div className={styles.card}>
          <div className={styles.profileFlexContainer}>
            
            {/* Cột trái: Vùng ảnh đại diện + Switch kích hoạt */}
            <div className={styles.leftProfileSide}>
              <div className={styles.avatarDashedCircle}>
                <Image
                  src="/images/avatar.png"
                  alt="Avatar"
                  width={75}
                  height={75}
                  className={styles.avatarImgElement}
                />
                <div className={styles.avatarOverlayText}>Tải ảnh đại diện</div>
              </div>
              <p className={styles.avatarUploadNotice}>
                *.jpeg, *.jpg, *.png.
                <br />
                Kích thước tối đa 5 MB
              </p>
              
              {/* Nút Switch gạt Kích hoạt */}
              <div className={styles.toggleStatusWrapper}>
                <span>Kích hoạt</span>
                <button 
                  type="button"
                  className={`${styles.switchTrack} ${isActive ? styles.switchTrackOn : ""}`}
                  onClick={() => setIsActive(!isActive)}
                >
                  <span className={styles.switchThumb} />
                </button>
              </div>
            </div>

            {/* Cột phải: Lưới điền thông tin cá nhân */}
            <div className={styles.rightFormSide}>
              <h3 className={styles.blockTitleHeading}>Thông tin cá nhân</h3>
              
              <div className={styles.inputGrid}>
                <div className={styles.outlinedFieldGroup}>
                  <input placeholder=" " id="username-f" defaultValue="Vna25112020" />
                  <label htmlFor="username-f">Tên đăng nhập <span className={styles.dangerStar}>*</span></label>
                </div>

                <div className={styles.outlinedFieldGroup}>
                  <input placeholder=" " id="fullname-f" defaultValue="Phan Thanh Tùng" />
                  <label htmlFor="fullname-f">Họ và tên <span className={styles.dangerStar}>*</span></label>
                </div>

                <div className={styles.outlinedFieldGroup}>
                  <div className={styles.innerIconInputWrapper}>
                    <input placeholder=" " id="birthday-f" defaultValue="01/06/1995" />
                    <label htmlFor="birthday-f">Ngày tháng năm sinh</label>
                    <FaRegCalendarAlt className={styles.innerFieldIcon} />
                  </div>
                </div>

                <div className={styles.outlinedFieldGroup}>
                  <select id="gender-f" defaultValue="Nam">
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </select>
                  <label htmlFor="gender-f">Giới tính</label>
                </div>

                <div className={styles.outlinedFieldGroup}>
                  <input placeholder=" " id="title-f" defaultValue="" />
                  <label htmlFor="title-f">Chức danh</label>
                </div>

                <div className={styles.outlinedFieldGroup}>
                  <select id="role-f" defaultValue="Quản trị viên">
                    <option value="Quản trị viên">Quản trị viên</option>
                    <option value="Người dùng">Người dùng</option>
                  </select>
                  <label htmlFor="role-f">Vai trò <span className={styles.dangerStar}>*</span></label>
                </div>

                <div className={`${styles.outlinedFieldGroup} ${styles.gridSpan2}`}>
                  <div className={styles.innerButtonInputWrapper}>
                    <input type="email" placeholder=" " id="email-f" defaultValue="phanthanhung093@gmail.com" />
                    <label htmlFor="email-f">Email</label>
                    <button type="button" className={styles.inlineFieldActionBtn} onClick={() => setShowOtp(true)}>
                      Thay đổi
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.horizontalRowDivider} />

          {/* PHẦN THÔNG TIN LIÊN HỆ PHÍA DƯỚI */}
          <div className={styles.contactContainerBlock}>
            <h3 className={styles.blockTitleHeading}>Thông tin liên hệ</h3>
            <div className={styles.inputGrid}>
              <div className={styles.outlinedFieldGroup}>
                <select id="city-f" defaultValue="Thành phố Hồ Chí Minh">
                  <option value="Thành phố Hồ Chí Minh">Thành phố Hồ Chí Minh</option>
                </select>
                <label htmlFor="city-f">Tỉnh/ Thành phố</label>
              </div>

              <div className={styles.outlinedFieldGroup}>
                <select id="ward-f" defaultValue="Phường Gò Vấp">
                  <option value="Phường Gò Vấp">Phường Gò Vấp</option>
                </select>
                <label htmlFor="ward-f">Phường/ xã</label>
              </div>

              <div className={`${styles.outlinedFieldGroup} ${styles.gridSpan2}`}>
                <input placeholder=" " id="address-f" defaultValue="" />
                <label htmlFor="address-f">Địa chỉ</label>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ================= MODAL LỚP PHỦ 1: THAY ĐỔI EMAIL (NHẬP OTP) ================= */}
      {showOtp && (
        <div className={styles.modalBlurOverlay} onClick={() => setShowOtp(false)}>
          <div className={styles.modalWhiteBox} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.modalHeaderTitleBlue}>THAY ĐỔI EMAIL</h2>
            
            <p className={styles.modalMiddleDescriptionText}>
              Chúng tôi đã gửi mã xác minh qua số email cũ <br />
              <strong className={styles.boldTextEmailTarget}>phanthanhung093@gmail.com</strong> <br />
              Bạn vui lòng kiểm tra và điền mã xác thực
            </p>

            <div className={styles.outlinedFieldGroup} style={{ marginBottom: "8px" }}>
              <input type="text" id="otp-code-input" placeholder=" " defaultValue="122456" />
              <label htmlFor="otp-code-input">OTP <span className={styles.dangerStar}>*</span></label>
            </div>

            <div className={styles.countdownTimerDisplay}>00:60</div>
            <button type="button" className={styles.resendCodeLinkButton}>Chưa nhận được mã? Gửi lại</button>

            <button
              type="button"
              className={styles.modalActionSubmitBtnBlue}
              onClick={() => {
                setShowOtp(false);
                setShowChangeEmail(true);
              }}
            >
              Xác nhận
            </button>

            <button type="button" className={styles.modalActionCloseTextBtn} onClick={() => setShowOtp(false)}>
              Hủy bỏ
            </button>
          </div>
        </div>
      )}

      {/* ================= MODAL LỚP PHỦ 1B: NHẬP EMAIL MỚI ================= */}
      {showChangeEmail && (
        <div className={styles.modalBlurOverlay} onClick={() => setShowChangeEmail(false)}>
          <div className={styles.modalWhiteBox} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.modalHeaderTitleBlue}>THAY ĐỔI EMAIL</h2>
            <p className={styles.modalMiddleDescriptionText} style={{ marginBottom: "20px" }}>
              Vui lòng nhập email mới
            </p>

            <div className={styles.outlinedFieldGroup} style={{ marginBottom: "24px" }}>
              <input type="email" id="new-email-addr" placeholder=" " defaultValue="Phanthanhtung094@gmail.com" />
              <label htmlFor="new-email-addr">Email <span className={styles.dangerStar}>*</span></label>
            </div>

            <button type="button" className={styles.modalActionSubmitBtnBlue} onClick={() => setShowChangeEmail(false)}>
              Lưu
            </button>

            <button type="button" className={styles.modalActionCloseTextBtn} onClick={() => setShowChangeEmail(false)}>
              Hủy bỏ
            </button>
          </div>
        </div>
      )}

      {/* ================= MODAL LỚP PHỦ 2: ĐỔI MẬT KHẨU ================= */}
      {showChangePassword && (
        <div className={styles.modalBlurOverlay} onClick={() => setShowChangePassword(false)}>
          <div className={styles.passwordModalStructuredCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.passwordModalTopBanner}>
              Đổi mật khẩu
            </div>
            
            <div className={styles.passwordModalInnerPaddingForm}>
              <div className={styles.outlinedFieldGroup}>
                <input 
                  type={showOldPassword ? "text" : "password"} 
                  id="old-pwd-field" 
                  placeholder=" " 
                  defaultValue="oldpassword123" 
                />
                <label htmlFor="old-pwd-field">Mật khẩu cũ <span className={styles.dangerStar}>*</span></label>
                <button 
                  type="button" 
                  className={styles.inputAdornmentEyeButton}
                  onClick={() => setShowOldPassword(!showOldPassword)}
                >
                  {showOldPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>

              <div className={styles.outlinedFieldGroup}>
                <input 
                  type={showNewPassword ? "text" : "password"} 
                  id="new-pwd-field" 
                  placeholder=" " 
                  defaultValue="12345678" 
                />
                <label htmlFor="new-pwd-field">Mật khẩu mới <span className={styles.dangerStar}>*</span></label>
                <button 
                  type="button" 
                  className={styles.inputAdornmentEyeButton}
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>

              <div className={styles.outlinedFieldGroup}>
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  id="confirm-pwd-field" 
                  placeholder=" " 
                  defaultValue="12345678" 
                />
                <label htmlFor="confirm-pwd-field">Nhập lại mật khẩu mới <span className={styles.dangerStar}>*</span></label>
                <button 
                  type="button" 
                  className={styles.inputAdornmentEyeButton}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>

              <div className={styles.passwordModalLowerRightFlexActions}>
                <button type="button" className={styles.modalActionCloseTextBtn} onClick={() => setShowChangePassword(false)}>
                  Huỷ bỏ
                </button>
                <button type="button" className={styles.passwordModalConfirmSaveBtnBlue} onClick={() => setShowChangePassword(false)}>
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}