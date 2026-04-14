import styles from "./UsersTable.module.scss";
import filterIcon from "@/assets/filtericon.svg"

interface User {
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
}

const users: User[] = [
  { organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
  { organization: "Irorun", username: "Debby Ogana", email: "debby2@irorun.com", phone: "08160780928", dateJoined: "Apr 30, 2020 10:00 AM", status: "Pending" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
  { organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "07003309226", dateJoined: "Apr 10, 2020 10:00 AM", status: "Pending" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Active" },
  { organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "08060780900", dateJoined: "Apr 10, 2020 10:00 AM", status: "Active" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
  { organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "08060780900", dateJoined: "Apr 10, 2020 10:00 AM", status: "Inactive" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Inactive" },
];

const columns = ["Organization", "Username", "Email", "Phone Number", "Date Joined", "Status"];

const UsersTable = () => (
  <div className={styles["users-table-wrapper"]}>
    <table className={styles["users-table"]}>
      <thead className={styles["users-table__head"]}>
        <tr>
          {columns.map((col) => (
            <th key={col}>
              <span>
                {col}   <img
                      src={filterIcon}
                      alt="users with savings icon"
                      width={16}
                      height={16}
                    />
              </span>
            </th>
          ))}
          <th />
        </tr>
      </thead>
      <tbody className={styles["users-table__body"]}>
        {users.map((user, idx) => (
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
            <td>
              <button className={styles["users-table__actions"]}>⋮</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className={styles["users-table__pagination"]}>
      <div className={styles["users-table__showing"]}>
        Showing
        <select className={styles["users-table__showing-select"]}>
          <option>100</option>
        </select>
        out of 100
      </div>

      <div className={styles["users-table__pages"]}>
        <button className={`${styles["users-table__page-btn"]} ${styles["users-table__page-btn--nav"]}`}>
          &lt;
        </button>
        {[1, 2, 3].map((p) => (
          <button
            key={p}
            className={`${styles["users-table__page-btn"]} ${
              p === 1 ? styles["users-table__page-btn--active"] : ""
            }`}
          >
            {p}
          </button>
        ))}
        <span className={styles["users-table__page-ellipsis"]}>...</span>
        {[15, 16].map((p) => (
          <button key={p} className={styles["users-table__page-btn"]}>
            {p}
          </button>
        ))}
        <button className={`${styles["users-table__page-btn"]} ${styles["users-table__page-btn--nav"]}`}>
          &gt;
        </button>
      </div>
    </div>
  </div>
);

export default UsersTable;
