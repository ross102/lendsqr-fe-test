import Logo from "@/assets/logo.svg";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  label: string;
  active?: boolean;
}

interface NavSection {
  title?: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    items: [{ label: "Dashboard" }],
  },
  {
    title: "CUSTOMERS",
    items: [
      { label: "Users", active: true },
      { label: "Guarantors" },
      { label: "Loans" },
      { label: "Decision Models" },
      { label: "Savings" },
      { label: "Loan Requests" },
      { label: "Whitelist" },
      { label: "Karma" },
    ],
  },
  {
    title: "BUSINESSES",
    items: [
      { label: "Organization" },
      { label: "Loan Products" },
      { label: "Savings Products" },
      { label: "Fees and Charges" },
      { label: "Transactions" },
      { label: "Services" },
      { label: "Service Account" },
      { label: "Settlements" },
      { label: "Reports" },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { label: "Preferences" },
      { label: "Fees and Pricing" },
      { label: "Audit Logs" },
    ],
  },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => (
  <>
    {isOpen && (
      <div className={styles.sidebar__overlay} onClick={onClose} />
    )}
    <aside
      className={`${styles.sidebar} ${isOpen ? styles["sidebar--open"] : ""}`}
    >
      <div className={styles.sidebar__logo}>
        <Logo />
      </div>

      <button className={styles.sidebar__switch}>
        <svg className={styles["sidebar__switch-icon"]} viewBox="0 0 24 24">
          <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
        </svg>
        Switch Organization
        <svg className={styles["sidebar__switch-arrow"]} viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </button>

      {navSections.map((section, sIdx) => (
        <div className={styles.sidebar__section} key={sIdx}>
          {section.title && (
            <div className={styles["sidebar__section-title"]}>
              {section.title}
            </div>
          )}
          {section.items.map((item) => (
            <button
              key={item.label}
              className={`${styles["sidebar__nav-item"]} ${
                item.active ? styles["sidebar__nav-item--active"] : ""
              }`}
            >
              <svg
                className={styles["sidebar__nav-item-icon"]}
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="3" />
              </svg>
              {item.label}
            </button>
          ))}
        </div>
      ))}
    </aside>
  </>
);

export default Sidebar;
