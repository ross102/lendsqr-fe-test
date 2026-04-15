import React from "react";
import styles from "@/pages/UserDetails/UserDetails.module.scss";


const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className={styles["user-details__info-item"]}>
    <span className={styles["user-details__info-label"]}>{label}</span>
    <span className={styles["user-details__info-value"]}>{value}</span>
  </div>
);

export default InfoItem;