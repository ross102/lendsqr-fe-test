import type { ReactNode } from "react";
import styles from "./StatCard.module.scss";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string;
}

const StatCard = ({ icon, label, value }: StatCardProps) => (
  <div className={styles["stat-card"]}>
    <div
      className={`${styles["stat-card__icon"]} `}
    >
      {icon}
    </div>
    <span className={styles["stat-card__label"]}>{label}</span>
    <span className={styles["stat-card__value"]}>{value}</span>
  </div>
);

export default StatCard;