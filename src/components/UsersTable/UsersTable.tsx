import React from 'react';
import styles from "./UsersTable.module.scss";
import filterIcon from "@/assets/filtericon.svg";
import viewIcon from "@/assets/view-eye.svg";
import blacklistIcon from "@/assets/delete-user.svg";
import activateIcon from "@/assets/activate-user.svg";

interface User {
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
}

const allUsers: User[]= [
  { organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
  { organization: "Irorun", username: "Debby Ogana", email: "debby2@irorun.com", phone: "08160780928", dateJoined: "Apr 30, 2020 10:00 AM", status: "Pending" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
  { organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "07003309226", dateJoined: "Apr 10, 2020 10:00 AM", status: "Pending" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Active" },
  { organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "08060780900", dateJoined: "Apr 10, 2020 10:00 AM", status: "Active" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
  { organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "08060780900", dateJoined: "Apr 10, 2020 10:00 AM", status: "Inactive" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Inactive" },
   { organization: "Irorun", username: "Kemi Adeyemi", email: "kemi@irorun.com", phone: "08034567890", dateJoined: "Mar 20, 2020 10:00 AM", status: "Active" },
  { organization: "Lendsqr", username: "Fola Akinyemi", email: "fola@lendsqr.com", phone: "09012345678", dateJoined: "Feb 14, 2020 10:00 AM", status: "Pending" },
  { organization: "Lendstar", username: "Bola Ogunyemi", email: "bola@lendstar.com", phone: "07098765432", dateJoined: "Jan 5, 2020 10:00 AM", status: "Active" },
  { organization: "Irorun", username: "Chidi Nwankwo", email: "chidi@irorun.com", phone: "08123456789", dateJoined: "Jun 12, 2020 10:00 AM", status: "Blacklisted" },
  { organization: "Lendsqr", username: "Ayo Bakare", email: "ayo@lendsqr.com", phone: "07045678901", dateJoined: "Jul 22, 2020 10:00 AM", status: "Inactive" },
  { organization: "Lendstar", username: "Ngozi Eze", email: "ngozi@lendstar.com", phone: "08056789012", dateJoined: "Aug 3, 2020 10:00 AM", status: "Active" },
  { organization: "Irorun", username: "Tunde Fashola", email: "tunde@irorun.com", phone: "09087654321", dateJoined: "Sep 18, 2020 10:00 AM", status: "Pending" },
  { organization: "Lendsqr", username: "Ada Obi", email: "ada@lendsqr.com", phone: "08167890123", dateJoined: "Oct 1, 2020 10:00 AM", status: "Active" },
   { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Inactive" },
   { organization: "Irorun", username: "Kemi Adeyemi", email: "kemi@irorun.com", phone: "08034567890", dateJoined: "Mar 20, 2020 10:00 AM", status: "Active" },
  { organization: "Lendsqr", username: "Fola Akinyemi", email: "fola@lendsqr.com", phone: "09012345678", dateJoined: "Feb 14, 2020 10:00 AM", status: "Pending" },
  { organization: "Lendstar", username: "Bola Ogunyemi", email: "bola@lendstar.com", phone: "07098765432", dateJoined: "Jan 5, 2020 10:00 AM", status: "Active" },
  { organization: "Irorun", username: "Chidi Nwankwo", email: "chidi@irorun.com", phone: "08123456789", dateJoined: "Jun 12, 2020 10:00 AM", status: "Blacklisted" },
  { organization: "Lendsqr", username: "Ayo Bakare", email: "ayo@lendsqr.com", phone: "07045678901", dateJoined: "Jul 22, 2020 10:00 AM", status: "Inactive" },
  { organization: "Lendstar", username: "Ngozi Eze", email: "ngozi@lendstar.com", phone: "08056789012", dateJoined: "Aug 3, 2020 10:00 AM", status: "Active" },
  { organization: "Irorun", username: "Tunde Fashola", email: "tunde@irorun.com", phone: "09087654321", dateJoined: "Sep 18, 2020 10:00 AM", status: "Pending" },
  { organization: "Lendsqr", username: "Ada Obi", email: "ada@lendsqr.com", phone: "08167890123", dateJoined: "Oct 1, 2020 10:00 AM", status: "Active" },
  { organization: "Lendstar", username: "Emeka Uche", email: "emeka@lendstar.com", phone: "07078901234", dateJoined: "Nov 25, 2020 10:00 AM", status: "Blacklisted" },
  { organization: "Lendstar", username: "Emeka Uche", email: "emeka@lendstar.com", phone: "07078901234", dateJoined: "Nov 25, 2020 10:00 AM", status: "Blacklisted" },
];


const ITEMS_PER_PAGE = 9;
const columns = ["Organization", "Username", "Email", "Phone Number", "Date Joined", "Status"];

const ActionsMenu = ({
  onClose,
  onViewDetails,
  onBlacklist,
  onActivate,
}: {
  onClose: () => void;
  onViewDetails: () => void;
  onBlacklist: () => void;
  onActivate: () => void;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div ref={ref} className={styles["actions-menu"]}>
      <button className={styles["actions-menu__item"]} onClick={onViewDetails}>
        <img src={viewIcon} width={16} height={16} alt="view details" />
        View Details
      </button>
      <button className={styles["actions-menu__item"]} onClick={onBlacklist}>
        <img src={blacklistIcon} width={14} height={14} alt="blacklist user" />
        Blacklist User
      </button>
      <button className={styles["actions-menu__item"]} onClick={onActivate}>
        <img src={activateIcon} width={14} height={14} alt="activate user" />
        Activate User
      </button>
    </div>
  );
};

const UsersTable = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [users, setUsers] = React.useState<User[]>(allUsers);
  const [activeMenu, setActiveMenu] = React.useState<number | null>(null);

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedUsers = users.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handleBlacklist = (idx: number) => {
    const globalIdx = startIdx + idx;
    setUsers((prev) => prev.map((u, i) => (i === globalIdx ? { ...u, status: "Blacklisted" } : u)));
    setActiveMenu(null);
  };

  const handleActivate = (idx: number) => {
    const globalIdx = startIdx + idx;
    setUsers((prev) => prev.map((u, i) => (i === globalIdx ? { ...u, status: "Active" } : u)));
    setActiveMenu(null);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1, 2, 3);
      if (currentPage > 3 && currentPage < totalPages - 1) {
        pages.push("...", currentPage);
      }
      if (totalPages > 4) pages.push("...");
      pages.push(totalPages - 1, totalPages);
    }
    return [...new Set(pages)];
  };

  return (
    <div className={styles["users-table-wrapper"]}>
      <table className={styles["users-table"]}>
        <thead className={styles["users-table__head"]}>
          <tr>
            {columns.map((col) => (
              <th key={col}>
                <span>
                  {col} <img src={filterIcon} width={16} height={16} alt="filter icon" />
                </span>
              </th>
            ))}
            <th />
          </tr>
        </thead>
        <tbody className={styles["users-table__body"]}>
          {paginatedUsers.map((user, idx) => (
            <tr key={idx}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.dateJoined}</td>
              <td>
                <span
                  className={`${styles["users-table__status"]} ${
                    styles[`users-table__status--${user.status.toLowerCase()}`]
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td style={{ position: "relative" }}>
                <button
                  className={styles["users-table__actions"]}
                  onClick={() => setActiveMenu(activeMenu === idx ? null : idx)}
                >
                  ⋮
                </button>
                {activeMenu === idx && (
                  <ActionsMenu
                    onClose={() => setActiveMenu(null)}
                    onViewDetails={() => {
                      alert(`Viewing details for ${user.username}`);
                      setActiveMenu(null);
                    }}
                    onBlacklist={() => handleBlacklist(idx)}
                    onActivate={() => handleActivate(idx)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles["users-table__pagination"]}>
        <div className={styles["users-table__showing"]}>
          Showing
          <select className={styles["users-table__showing-select"]} value={ITEMS_PER_PAGE}>
            <option>{ITEMS_PER_PAGE}</option>
          </select>
          out of {users.length}
        </div>

        <div className={styles["users-table__pages"]}>
          <button
            className={`${styles["users-table__page-btn"]} ${styles["users-table__page-btn--nav"]}`}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {getPageNumbers().map((p, i) =>
            typeof p === "string" ? (
              <span key={`e${i}`} className={styles["users-table__page-ellipsis"]}>...</span>
            ) : (
              <button
                key={p}
                className={`${styles["users-table__page-btn"]} ${
                  p === currentPage ? styles["users-table__page-btn--active"] : ""
                }`}
                onClick={() => setCurrentPage(p)}
              >
                {p}
              </button>
            )
          )}
          <button
            className={`${styles["users-table__page-btn"]} ${styles["users-table__page-btn--nav"]}`}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
