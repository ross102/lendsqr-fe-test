import { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Topbar from "@/components/TopBar/TopBar";
import StatCard from "@/components/StatCard/StatCard";
import UserIcon1 from "@/assets/users-icon1.svg";
import UserIcon2 from "@/assets/users-icon2.svg";
import UserIcon3 from "@/assets/users-icon3.svg"
import UserIcon4 from "@/assets/users-icon4.svg"
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
               <img
          src={UserIcon1}
          alt="user icon"
          width={40}
          height={40}
        />
              }
           
              label="USERS"
              value="2,453"
            />
            <StatCard
              icon={
                 <img
          src={UserIcon2}
          alt="active user icon"
          width={40}
          height={40}
        />
              }
              
              label="ACTIVE USERS"
              value="2,453"
            />
            <StatCard
              icon={
                <img
          src={UserIcon3}
          alt=" users with loan icon"
          width={40}
          height={40}
        />
              }
             
              label="USERS WITH LOANS"
              value="12,453"
            />
            <StatCard
              icon={
                 <img
          src={UserIcon4}
          alt="users with savings icon"
          width={40}
          height={40}
        />
              }
            
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
