"use client";

import {
FaHome,
FaCog,
FaLaptopCode,
FaBook,
FaSchool,
FaChevronDown,
FaChevronRight
} from "react-icons/fa";

interface SidebarProps {
openSystem: boolean;
setOpenSystem: (value: boolean) => void;

openSoftware: boolean;
setOpenSoftware: (value: boolean) => void;

openTeacher: boolean;
setOpenTeacher: (value: boolean) => void;

openPrincipal: boolean;
setOpenPrincipal: (value: boolean) => void;

styles: any;
}

export default function Sidebar({
openSystem,
setOpenSystem,
openSoftware,
setOpenSoftware,
openTeacher,
setOpenTeacher,
openPrincipal,
setOpenPrincipal,
styles
}: SidebarProps) {
return ( <nav> <ul className={styles.menu}> <li> <span> <FaHome /> Trang chủ </span> </li>

```
    <li onClick={() => setOpenSystem(!openSystem)}>
      <span>
        <FaCog /> Hệ thống
      </span>

      {openSystem ? (
        <FaChevronDown />
      ) : (
        <FaChevronRight />
      )}
    </li>

    {openSystem && (
      <ul className={styles.subMenu}>
        <li>Quản lý người dùng</li>
        <li>Vai trò người dùng</li>
        <li>Tiếp nhận</li>
      </ul>
    )}

    <li onClick={() => setOpenSoftware(!openSoftware)}>
      <span>
        <FaLaptopCode /> Quản trị phần mềm
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

    <li onClick={() => setOpenTeacher(!openTeacher)}>
      <span>
        <FaBook /> Chuẩn nghề nghiệp giáo viên
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

    <li onClick={() => setOpenPrincipal(!openPrincipal)}>
      <span>
        <FaSchool /> Chuẩn nghề nghiệp HT-HP
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
);
}
