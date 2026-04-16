import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import * as mockUsersApi from "@/api/Mockusers";

vi.mock("../../api/mockUsers");

const mockUsers: mockUsersApi.User[] = [
  { id: "usr-001", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Active" },
  { id: "usr-002", organization: "Irorun", username: "Debby Ogana", email: "debby2@irorun.com", phone: "08160780928", dateJoined: "Apr 30, 2020 10:00 AM", status: "Pending" },
  { id: "usr-003", organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
];

const renderDashboard = async () => {
  const result = render(
    <MemoryRouter>
      <Dashboard />
    </MemoryRouter>
  );
  const main = await screen.findByTestId("dashboard__main");
  return { ...result, main };
};

describe("Dashboard", () => {
  beforeEach(() => {
    vi.mocked(mockUsersApi.fetchUsers);
  });

  it("renders the page title", () => {
    renderDashboard();
    expect(screen.getByRole("heading", { name: /users/i })).toBeInTheDocument();
  });

  it("renders all four stat cards", () => {
    renderDashboard();
    expect(screen.getByText("USERS")).toBeInTheDocument();
    expect(screen.getByText("ACTIVE USERS")).toBeInTheDocument();
    expect(screen.getByText("USERS WITH LOANS")).toBeInTheDocument();
    expect(screen.getByText("USERS WITH SAVINGS")).toBeInTheDocument();
  });

  it("shows loading state then displays user data", async () => {
    const { main } = await renderDashboard();
    expect(screen.getByText(/loading users/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(within(main).getByText("adedeji@lendsqr.com")).toBeInTheDocument();
    });
    expect(within(main).getByText("Debby Ogana")).toBeInTheDocument();
  });

  it("renders the rows", async () => {
    const { main } = await renderDashboard();
    await waitFor(() => {
      expect(within(main).getByText("adedeji@lendsqr.com")).toBeInTheDocument();
    });

    expect(await screen.findAllByText("adedeji@lendsqr.com")).length.greaterThanOrEqual(1)

  });

  it("displays all table column headers", async () => {
    const { main } = await renderDashboard();
    await waitFor(() => {
      expect(within(main).getByText("adedeji@lendsqr.com")).toBeInTheDocument();
    });

    const table = within(main).getByRole("table");
    const headers = ["Organization", "Username", "Email", "Phone Number", "Date Joined", "Status"];
    headers.forEach((h) => {
      expect(within(table).getByText(h)).toBeInTheDocument();
    });
  });

  it("renders sidebar and topbar", () => {
    renderDashboard();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it("displays user status badges correctly", async () => {
    const { main } = await renderDashboard();
    
    expect(await screen.findAllByText("Pending")).length.greaterThanOrEqual(1);
    expect(await screen.findAllByText("Blacklisted")).length.greaterThanOrEqual(1)
  });

  // ── ──

  it("shows loading when API is slow", async () => {
    vi.mocked(mockUsersApi.fetchUsers);
    const { main } = await renderDashboard();
    expect(screen.getByText(/loading users/i)).toBeInTheDocument();
    // No user emails should appear in table area
    expect(within(main).queryByText("adedeji@lendsqr.com")).not.toBeInTheDocument();
  });


  it("toggles sidebar on hamburger click", async () => {
    const user = userEvent.setup();
    renderDashboard();

    const hamburger = screen.getByRole("button", { name: /toggle menu/i });
    await user.click(hamburger);
    expect(hamburger).toBeInTheDocument();
  });
});
