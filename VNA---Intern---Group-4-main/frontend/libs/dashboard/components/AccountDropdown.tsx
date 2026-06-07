"use client";

import Image from "next/image";

interface Props {
showMenu: boolean;
setShowMenu: (value: boolean) => void;
handleLogout: () => void;
styles: any;
}

export default function UserDropdown({
showMenu,
setShowMenu,
handleLogout,
styles
}: Props) {
return ( <div className={styles.userSection}>
<button
className={styles.userButton}
onClick={() => setShowMenu(!showMenu)}
> <Image
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
      <button>Thông tin tài khoản</button>

      <button>Đổi mật khẩu</button>

      <button onClick={handleLogout}>
        Đăng xuất
      </button>
    </div>
  )}
</div>

);
}
