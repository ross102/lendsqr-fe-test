import type { ReactNode } from "react";
import styles from "./StatCard.module.scss";

interface StatCardProps {
  icon: ReactNode;
  iconColor: "pink" | "purple" | "orange" | "red";
  label: string;
  value: string;
}

const StatCard = ({ icon, iconColor, label, value }: StatCardProps) => (
  <div className={styles["stat-card"]}>
    <div
      className={`${styles["stat-card__icon"]} ${styles[`stat-card__icon--${iconColor}`]}`}
    >
      {icon}
    </div>
    <span className={styles["stat-card__label"]}>{label}</span>
    <span className={styles["stat-card__value"]}>{value}</span>
  </div>
);

export default StatCard;