export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
}

const mockUsers: User[] = [
  { id: "usr-001", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
  { id: "usr-002", organization: "Irorun", username: "Debby Ogana", email: "debby2@irorun.com", phone: "08160780928", dateJoined: "Apr 30, 2020 10:00 AM", status: "Pending" },
  { id: "usr-003", organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
  { id: "usr-004", organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "07003309226", dateJoined: "Apr 10, 2020 10:00 AM", status: "Pending" },
  { id: "usr-005", organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Active" },
  { id: "usr-006", organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "08060780900", dateJoined: "Apr 10, 2020 10:00 AM", status: "Active" },
  { id: "usr-007", organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
  { id: "usr-008", organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "08060780900", dateJoined: "Apr 10, 2020 10:00 AM", status: "Inactive" },
  { id: "usr-009", organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Inactive" },
  { id: "usr-010", organization: "Irorun", username: "Kemi Adeyemi", email: "kemi@irorun.com", phone: "08034567890", dateJoined: "Mar 20, 2020 10:00 AM", status: "Active" },
  { id: "usr-011", organization: "Lendsqr", username: "Fola Akinyemi", email: "fola@lendsqr.com", phone: "09012345678", dateJoined: "Feb 14, 2020 10:00 AM", status: "Pending" },
  { id: "usr-012", organization: "Lendstar", username: "Bola Ogunyemi", email: "bola@lendstar.com", phone: "07098765432", dateJoined: "Jan 5, 2020 10:00 AM", status: "Active" },
  { id: "usr-013", organization: "Irorun", username: "Chidi Nwankwo", email: "chidi@irorun.com", phone: "08123456789", dateJoined: "Jun 12, 2020 10:00 AM", status: "Blacklisted" },
  { id: "usr-014", organization: "Lendsqr", username: "Ayo Bakare", email: "ayo@lendsqr.com", phone: "07045678901", dateJoined: "Jul 22, 2020 10:00 AM", status: "Inactive" },
  { id: "usr-015", organization: "Lendstar", username: "Ngozi Eze", email: "ngozi@lendstar.com", phone: "08056789012", dateJoined: "Aug 3, 2020 10:00 AM", status: "Active" },
  { id: "usr-016", organization: "Irorun", username: "Tunde Fashola", email: "tunde@irorun.com", phone: "09087654321", dateJoined: "Sep 18, 2020 10:00 AM", status: "Pending" },
  { id: "usr-017", organization: "Lendsqr", username: "Ada Obi", email: "ada@lendsqr.com", phone: "08167890123", dateJoined: "Oct 1, 2020 10:00 AM", status: "Active" },
  { id: "usr-018", organization: "Lendstar", username: "Emeka Uche", email: "emeka@lendstar.com", phone: "07078901234", dateJoined: "Nov 25, 2020 10:00 AM", status: "Blacklisted" },
  { id: "usr-019", organization: "Lendstar", username: "Emeka Uche", email: "emeka@lendstar.com", phone: "07078901234", dateJoined: "Nov 25, 2020 10:00 AM", status: "Blacklisted" },
 { id: "usr-020", organization: "Lendstar", username: "Emeka Uche", email: "emeka@lendstar.com", phone: "07078901234", dateJoined: "Nov 25, 2020 10:00 AM", status: "Blacklisted" },
  { id: "usr-001", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
  { id: "usr-002", organization: "Irorun", username: "Debby Ogana", email: "debby2@irorun.com", phone: "08160780928", dateJoined: "Apr 30, 2020 10:00 AM", status: "Pending" },
  { id: "usr-003", organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
  { id: "usr-004", organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "07003309226", dateJoined: "Apr 10, 2020 10:00 AM", status: "Pending" },
  { id: "usr-005", organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Active" },
  { id: "usr-006", organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "08060780900", dateJoined: "Apr 10, 2020 10:00 AM", status: "Active" },
  { id: "usr-007", organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
  { id: "usr-008", organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "08060780900", dateJoined: "Apr 10, 2020 10:00 AM", status: "Inactive" },
  { id: "usr-009", organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Inactive" },
  { id: "usr-010", organization: "Irorun", username: "Kemi Adeyemi", email: "kemi@irorun.com", phone: "08034567890", dateJoined: "Mar 20, 2020 10:00 AM", status: "Active" },
  { id: "usr-011", organization: "Lendsqr", username: "Fola Akinyemi", email: "fola@lendsqr.com", phone: "09012345678", dateJoined: "Feb 14, 2020 10:00 AM", status: "Pending" },
  { id: "usr-012", organization: "Lendstar", username: "Bola Ogunyemi", email: "bola@lendstar.com", phone: "07098765432", dateJoined: "Jan 5, 2020 10:00 AM", status: "Active" },
  { id: "usr-013", organization: "Irorun", username: "Chidi Nwankwo", email: "chidi@irorun.com", phone: "08123456789", dateJoined: "Jun 12, 2020 10:00 AM", status: "Blacklisted" },
  { id: "usr-014", organization: "Lendsqr", username: "Ayo Bakare", email: "ayo@lendsqr.com", phone: "07045678901", dateJoined: "Jul 22, 2020 10:00 AM", status: "Inactive" },
  { id: "usr-015", organization: "Lendstar", username: "Ngozi Eze", email: "ngozi@lendstar.com", phone: "08056789012", dateJoined: "Aug 3, 2020 10:00 AM", status: "Active" },
  { id: "usr-016", organization: "Irorun", username: "Tunde Fashola", email: "tunde@irorun.com", phone: "09087654321", dateJoined: "Sep 18, 2020 10:00 AM", status: "Pending" },
  { id: "usr-017", organization: "Lendsqr", username: "Ada Obi", email: "ada@lendsqr.com", phone: "08167890123", dateJoined: "Oct 1, 2020 10:00 AM", status: "Active" },
  { id: "usr-018", organization: "Lendstar", username: "Emeka Uche", email: "emeka@lendstar.com", phone: "07078901234", dateJoined: "Nov 25, 2020 10:00 AM", status: "Blacklisted" },
  { id: "usr-019", organization: "Lendstar", username: "Emeka Uche", email: "emeka@lendstar.com", phone: "07078901234", dateJoined: "Nov 25, 2020 10:00 AM", status: "Blacklisted" },
 { id: "usr-020", organization: "Lendstar", username: "Emeka Uche", email: "emeka@lendstar.com", phone: "07078901234", dateJoined: "Nov 25, 2020 10:00 AM", status: "Blacklisted" },
];

export const fetchUsers = (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockUsers), 500);
  });
};

export const fetchUserById = (id: string): Promise<User | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockUsers.find((u) => u.id === id)), 300);
  });
};
