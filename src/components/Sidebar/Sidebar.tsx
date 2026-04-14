import Logo from "@/assets/logo.svg";
import styles from "./Sidebar.module.scss";
import DownIcon from "@/assets/down-icon.svg"
import BriefcaseIcon from "@/assets/briefcase 1.svg"
import HomeIcon from "@/assets/home 1.svg"

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
        <img
                      src={Logo}
                      alt="logo "
                      width={144}
                      height={30}
                    />
      </div>

      <button className={styles.sidebar__switch}>
                 <img
                      src={BriefcaseIcon}
                      alt="organisation icon "
                      width={14}
                      height={14}
                    />
        Switch Organization
                  <img
                      src={DownIcon}
                      alt="down icon"
                      width={14}
                      height={14}
                    />
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
             <img
                      src={HomeIcon}
                      alt="nav icons"
                      width={14}
                      height={14}
                    />
              {item.label}
            </button>
          ))}
        </div>
      ))}
    </aside>
  </>
);

export default Sidebar;
