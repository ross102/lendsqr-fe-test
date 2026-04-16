import { useState, useRef, useEffect } from "react";
import styles from "./FilterDropdown.module.scss";

interface FilterValues {
  organization?: string;
  username?: string;
  email?: string;
  date?: string;
  phone?: string;
  status?: string;
}

interface FilterDropdownProps {
  organizations?: string[];
  onFilter?: (filters: FilterValues) => void;
  onReset?: () => void;
  onClose: () => void;
}

const initialFilters: FilterValues = {
  organization: "",
  username: "",
  email: "",
  date: "",
  phone: "",
  status: "",
};

const FilterDropdown = ({ organizations, onFilter, onReset, onClose }: FilterDropdownProps) => {
  const [filters, setFilters] = useState<FilterValues>(initialFilters);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  const handleChange = (field: keyof FilterValues, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };


  return (
    <div ref={ref} className={styles["filter-dropdown"]}>
      <div className={styles["filter-dropdown__field"]}>
        <label className={styles["filter-dropdown__label"]}>Organization</label>
        <div className={styles["filter-dropdown__select-wrapper"]}>
          <select
            className={styles["filter-dropdown__select"]}
           
          >
            <option value="">Select</option>
           
          </select>
        </div>
      </div>

      <div className={styles["filter-dropdown__field"]}>
        <label className={styles["filter-dropdown__label"]}>Username</label>
        <input
          className={styles["filter-dropdown__input"]}
          placeholder="User"
          value={filters.username}
          onChange={(e) => handleChange("username", e.target.value)}
        />
      </div>

      <div className={styles["filter-dropdown__field"]}>
        <label className={styles["filter-dropdown__label"]}>Email</label>
        <input
          className={styles["filter-dropdown__input"]}
          placeholder="Email"
          value={filters.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </div>

      <div className={styles["filter-dropdown__field"]}>
        <label className={styles["filter-dropdown__label"]}>Date</label>
        <input
          className={styles["filter-dropdown__input"]}
          type="date"
          placeholder="Date"
          value={filters.date}
          onChange={(e) => handleChange("date", e.target.value)}
        />
      </div>

      <div className={styles["filter-dropdown__field"]}>
        <label className={styles["filter-dropdown__label"]}>Phone Number</label>
        <input
          className={styles["filter-dropdown__input"]}
          placeholder="Phone Number"
          value={filters.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
      </div>

      <div className={styles["filter-dropdown__field"]}>
        <label className={styles["filter-dropdown__label"]}>Status</label>
        <div className={styles["filter-dropdown__select-wrapper"]}>
          <select
            className={styles["filter-dropdown__select"]}
            value={filters.status}
            onChange={(e) => handleChange("status", e.target.value)}
          >
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Blacklisted">Blacklisted</option>
          </select>
        </div>
      </div>

      <div className={styles["filter-dropdown__actions"]}>
        <button
          className={`${styles["filter-dropdown__btn"]} ${styles["filter-dropdown__btn--reset"]}`}
         
        >
          Reset
        </button>
        <button
          className={`${styles["filter-dropdown__btn"]} ${styles["filter-dropdown__btn--filter"]}`}
         
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterDropdown;