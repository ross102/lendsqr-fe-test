import Logo from "@/assets/logo.svg";
import styles from "./Sidebar.module.scss";
import { useNavigate } from "react-router-dom";
import DownIcon from "@/assets/down-icon.svg"
import BriefcaseIcon from "@/assets/briefcase 1.svg"
import HomeIcon from "@/assets/home 1.svg"
import UserIcon from "@/assets/user-friends 1.svg"
import SackIcon from "@/assets/sack 1.svg"
import handShakeIcon from "@/assets/handshake-regular 1.svg"
import piggbankIcon from "@/assets/piggy-bank 1.svg"
import MoneyBank from "@/assets/Group 104.svg"


interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  label: string;
  active?: boolean;
  icon: string;
  link?: string;
}

interface NavSection {
  title?: string;
  items: NavItem[];
 
}

const navSections: NavSection[] = [
  {
    items: [{ label: "Dashboard", icon: HomeIcon, link: "/dashboard" }],
  },
  {
    title: "CUSTOMERS",
    items: [
      { label: "Users", active: true, icon: UserIcon, link: "/dashboard" },
      { label: "Guarantors" , icon: UserIcon},
      { label: "Loans", icon: SackIcon },
      { label: "Decision Models", icon: handShakeIcon },
      { label: "Savings" , icon: piggbankIcon},
      { label: "Loan Requests",  icon: MoneyBank },
      { label: "Whitelist" , icon: UserIcon},
      { label: "Karma" , icon: UserIcon},
    ],
  },
  {
    title: "BUSINESSES",
    items: [
      { label: "Organization" , icon: HomeIcon},
      { label: "Loan Products" , icon: SackIcon},
      { label: "Savings Products" , icon: piggbankIcon},
      { label: "Fees and Charges" , icon: piggbankIcon},
      { label: "Transactions" , icon: piggbankIcon},
      { label: "Services" , icon: SackIcon},
      { label: "Service Account" , icon: SackIcon},
      { label: "Settlements" , icon: SackIcon},
      { label: "Reports" , icon: SackIcon},
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { label: "Preferences" , icon: SackIcon},
      { label: "Fees and Pricing" , icon: piggbankIcon},
      { label: "Audit Logs" , icon: SackIcon},
    ],
  },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
 const navigate = useNavigate()
  return  <>
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
             onClick={() => {
              navigate(`${item.link}`)
             }}
              key={item.label}
              className={`${styles["sidebar__nav-item"]} ${
                item.active ? styles["sidebar__nav-item--active"] : ""
              }`}
            >
              
             <img
                      src={item.icon}
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
}


export default Sidebar;
