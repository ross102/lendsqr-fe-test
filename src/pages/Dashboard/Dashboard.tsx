import { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Topbar from "@/components/TopBar/TopBar";
import StatCard from "@/components/StatCard/StatCard";
import UsersTable from "@/components/UsersTable/UsersTable";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.dashboard}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className={styles.dashboard__main}>
        <Topbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

        <div className={styles.dashboard__content}>
          <h1 className={styles.dashboard__title}>Users</h1>

          <div className={styles.dashboard__stats}>
            <StatCard
              icon={
                <svg viewBox="0 0 24 24" fill="#df18ff">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              }
              iconColor="pink"
              label="USERS"
              value="2,453"
            />
            <StatCard
              icon={
                <svg viewBox="0 0 24 24" fill="#5718ff">
                  <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              }
              iconColor="purple"
              label="ACTIVE USERS"
              value="2,453"
            />
            <StatCard
              icon={
                <svg viewBox="0 0 24 24" fill="#f55f44">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM6 20V4h5v7h7v9H6z" />
                </svg>
              }
              iconColor="orange"
              label="USERS WITH LOANS"
              value="12,453"
            />
            <StatCard
              icon={
                <svg viewBox="0 0 24 24" fill="#ff3366">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                </svg>
              }
              iconColor="red"
              label="USERS WITH SAVINGS"
              value="102,453"
            />
          </div>

          <UsersTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
