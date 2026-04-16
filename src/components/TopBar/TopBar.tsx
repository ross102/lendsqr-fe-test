import styles from "./TopBar.module.scss";
import SearchIcon from "@/assets/searchIcon.svg";
import NotificationIcon from "@/assets/np_notification_2425223_000000 1.svg";
import AvaterIcon from "@/assets/avatar.svg"
import FilterIcon from "@/assets/filtericon.svg"
import Logo from "@/assets/logo.svg";
import DropdownIcon from "@/assets/np_dropdown_615120_000000 1.svg"

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar = ({ onMenuClick }: TopbarProps) => (
  <header className={styles.topbar}>
     <div className={styles.topbar__left}>
        <img
                      src={Logo}
                      alt="logo "
                      width={144}
                      height={30}
                    />
    <button className={styles.topbar__hamburger} onClick={onMenuClick}>
         <img
                      src={FilterIcon}
                      alt="hamburger icon "
                      width={24}
                      height={24}
                    />
    </button>
   </div>

    <div className={styles.topbar__search}>
      <input
        className={styles["topbar__search-input"]}
        placeholder="Search for anything"
        type="text"
      />
      <button className={styles["topbar__search-btn"]}>
                  <img
                      src={SearchIcon}
                      alt="search icon "
                      width={14}
                      height={14}
                    />
      </button>
    </div>

    <div className={styles.topbar__right}>
      <button className={styles.topbar__docs}>Docs</button>

      <button className={styles.topbar__bell}>
                  <img
                      src={NotificationIcon}
                      alt="notification icon "
                      width={26}
                      height={26}
                    />
      </button>

      <button className={styles.topbar__user}>
        <div className={styles.topbar__avatar}>
            <img
                      src={AvaterIcon}
                      alt="avater icon "
                      width={40}
                      height={40}
                    />
        </div>
        <span className={styles.topbar__username}>Adedeji</span>
                   <img
                      src={DropdownIcon}
                      alt="dropdown icon "
                      width={26}
                      height={26}
                    />
      </button>
    </div>
  </header>
);

export default Topbar;
