import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";
import Topbar from "@/components/TopBar/TopBar";
import { fetchUserById } from "@/api/Mockusers";
import Star1Icon from "@/assets/star1.svg";
import Star2Icon from "@/assets/star2.svg";
import Star3Icon from "@/assets/star3.svg";
import AvaterIcon from "@/assets/big-avatar.svg"
import BackIcon from "@/assets/back-to-users.svg";
import type { User }  from "@/api/Mockusers";
import styles from "./UserDetails.module.scss";

const tabs = ["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"];

const UserDetails = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("General Details");
  const [user, setUser] = useState<User>();
   const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

   useEffect(() => {
       fetchUserById(id as string).then((data) => {
        setUser(data);
        setLoading(false);
      });
    }, []);

    if (loading) {
    return <div className={styles["users-table-wrapper"]} style={{ padding: "40px", textAlign: "center", color: "#545f7d" }}>Loading users...</div>;
  }

  return (
    <div className={styles["user-details"]}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div data-testid="user-details-main" className={styles["user-details__main"]}>
        <Topbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

        <div className={styles["user-details__content"]}>
          {/* Back link */}
          <button
            className={styles["user-details__back"]}
            onClick={() => navigate("/dashboard")}
          >
           <img src={BackIcon} width={26} height={9} alt="back to users icon" />
            Back to Users
          </button>

          {/* Header */}
          <div className={styles["user-details__header"]}>
            <h1 className={styles["user-details__heading"]}>User Details</h1>
            <div className={styles["user-details__actions"]}>
              <button className={`${styles["user-details__action-btn"]} ${styles["user-details__action-btn--blacklist"]}`}>
                BLACKLIST USER
              </button>
              <button className={`${styles["user-details__action-btn"]} ${styles["user-details__action-btn--activate"]}`}>
                ACTIVATE USER
              </button>
            </div>
          </div>

          {/* Profile Card */}
          <div className={styles["user-details__profile-card"]}>
            <div className={styles["user-details__profile-top"]}>
              <div className={styles["user-details__avatar"]}>
                <img src={AvaterIcon} width={100} height={100} alt="user avater" />
              </div>

              <div className={styles["user-details__profile-name"]}>
                <span className={styles["user-details__name"]}>{user?.username}</span>
                <span className={styles["user-details__id"]}>{user?.phone}</span>
              </div>

              <div className={styles["user-details__divider"]} />

              <div data-testid="user-details-tier" className={styles["user-details__tier"]}>
                <span className={styles["user-details__tier-label"]}>User's Tier</span>
                <div className={styles["user-details__tier-stars"]}>
                  <img src={Star1Icon} width={16} height={16} alt="star rating" />
                  <img src={Star2Icon} width={16} height={16} alt="star rating" />
                   <img src={Star3Icon} width={16} height={16} alt="star rating" />
                </div>
              </div>

              <div className={styles["user-details__divider"]} />

              <div className={styles["user-details__balance-section"]}>
                <span className={styles["user-details__balance"]}>₦200,000.00</span>
                <span className={styles["user-details__bank"]}>{user?.organization}</span>
              </div>
            </div>

            {/* Tabs */}
            <div className={styles["user-details__tabs"]}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`${styles["user-details__tab"]} ${activeTab === tab ? styles["user-details__tab--active"] : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Info Card */}
          <div className={styles["user-details__info-card"]}>
            {/* Personal Information */}
            <div className={styles["user-details__section"]}>
              <h2 className={styles["user-details__section-title"]}>Personal Information</h2>
              <div className={styles["user-details__info-grid"]}>
                <InfoItem label="Full Name" value={user?.username as string} />
                <InfoItem label="Phone Number" value={user?.phone as string} />
                <InfoItem label="Email Address" value={user?.email as string} />
                <InfoItem label="BVN" value={user?.phone as string} />
                <InfoItem label="Gender" value="Female" />
                <InfoItem label="Marital Status" value="Single" />
                <InfoItem label="Children" value="None" />
                <InfoItem label="Type of Residence" value={user?.organization as string} />
              </div>
            </div>

            {/* Education and Employment */}
            <div className={styles["user-details__section"]}>
              <h2 className={styles["user-details__section-title"]}>Education and Employment</h2>
              <div className={styles["user-details__info-grid"]}>
                <InfoItem label="Level of Education" value="B.Sc" />
                <InfoItem label="Employment Status" value="Employed" />
                <InfoItem label="Sector of Employment" value="FinTech" />
                <InfoItem label="Duration of Employment" value="2 years" />
                <InfoItem label="Office Email" value="grace@lendsqr.com" />
                <InfoItem label="Monthly Income" value="₦200,000.00 - ₦400,000.00" />
                <InfoItem label="Loan Repayment" value="40,000" />
              </div>
            </div>

            {/* Socials */}
            <div className={styles["user-details__section"]}>
              <h2 className={styles["user-details__section-title"]}>Socials</h2>
              <div className={styles["user-details__info-grid"]}>
                <InfoItem label="Twitter" value="@grace_effiom" />
                <InfoItem label="Facebook" value="Grace Effiom" />
                <InfoItem label="Instagram" value="@grace_effiom" />
              </div>
            </div>

            {/* Guarantor */}
            <div className={styles["user-details__section"]}>
              <h2 className={styles["user-details__section-title"]}>Guarantor</h2>
              <div className={styles["user-details__guarantor-grid"]}>
                <InfoItem label="Full Name" value="Debby Ogana" />
                <InfoItem label="Phone Number" value="07060780922" />
                <InfoItem label="Email Address" value="debby@gmail.com" />
                <InfoItem label="Relationship" value="Sister" />
              </div>
              <div className={styles["user-details__guarantor-divider"]} />
              <div className={styles["user-details__guarantor-grid"]}>
                <InfoItem label="Full Name" value="Debby Ogana" />
                <InfoItem label="Phone Number" value="07060780922" />
                <InfoItem label="Email Address" value="debby@gmail.com" />
                <InfoItem label="Relationship" value="Sister" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className={styles["user-details__info-item"]}>
    <span className={styles["user-details__info-label"]}>{label}</span>
    <span className={styles["user-details__info-value"]}>{value}</span>
  </div>
);

export default UserDetails;
