import styles from "./Topbar.module.scss";

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar = ({ onMenuClick }: TopbarProps) => (
  <header className={styles.topbar}>
    <button className={styles.topbar__hamburger} onClick={onMenuClick}>
      <svg className={styles["topbar__hamburger-icon"]} viewBox="0 0 24 24">
        <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
      </svg>
    </button>

    <div className={styles.topbar__search}>
      <input
        className={styles["topbar__search-input"]}
        placeholder="Search for anything"
        type="text"
      />
      <button className={styles["topbar__search-btn"]}>
        <svg className={styles["topbar__search-btn-icon"]} viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </button>
    </div>

    <div className={styles.topbar__right}>
      <button className={styles.topbar__docs}>Docs</button>

      <button className={styles.topbar__bell}>
        <svg className={styles["topbar__bell-icon"]} viewBox="0 0 24 24">
          <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
        </svg>
      </button>

      <button className={styles.topbar__user}>
        <div className={styles.topbar__avatar}>A</div>
        <span className={styles.topbar__username}>Adedeji</span>
        <svg className={styles["topbar__dropdown-arrow"]} viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </button>
    </div>
  </header>
);

export default Topbar;
