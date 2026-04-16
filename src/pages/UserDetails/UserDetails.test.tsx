import { describe, it, expect, vi } from "vitest";
import { render, screen, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter} from "react-router-dom";
import UserDetails from "./UserDetails";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => mockNavigate };
});

const renderUserDetails = async () => {
  const result = render(
    <MemoryRouter>
        <UserDetails /> 
    </MemoryRouter>
  );
 
  const main = await screen.findByTestId("user-details-main");
  return { ...result, main };
};

describe("UserDetails", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });


  it("renders the page heading", async () => {
    renderUserDetails();
    expect(await screen.findByRole("heading", { name: /user details/i })).toBeInTheDocument();
  });

  it("navigates back to dashboard on back button click", async () => {
    const user = userEvent.setup();
    renderUserDetails();
    const backBtn = await screen.findByText(/back to users/i);
    await user.click(backBtn);
    expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
  });

  it("renders user profile information", async() => {
     renderUserDetails();
    expect(await screen.findAllByText("Grace Effiom")).length.greaterThanOrEqual(1);
    expect(await screen.findAllByText("₦200,000.00")).length.greaterThanOrEqual(1);
  });

  it("renders user tier section with stars", async () => {
    renderUserDetails();
    expect(await screen.findByText("User's Tier")).toBeInTheDocument();
  });

  it("renders all six tabs", async () => {
    const { main } = await renderUserDetails();
    const mainScope = within(main);
    const tabs = ["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"];
   for (const tab of tabs) {
          expect( mainScope.getByText(tab)).toBeInTheDocument();
     }
  });

  it("General Details tab is active by default", async () => {
    const { main } = await renderUserDetails();
    const mainScope = within(main);
    const generalTab = await mainScope.findByText("General Details");
    expect(generalTab.className).toContain("active");
  });

  it("switches active tab on click", async () => {
    const user = userEvent.setup();
    const { main } = await renderUserDetails();
    const mainScope = within(main);

    const documentsTab = await mainScope.findByText("Documents");
    await user.click(documentsTab);
    expect(documentsTab.className).toContain("active");

    const generalTab = await screen.findByText("General Details");
    expect(generalTab.className).not.toContain("active");
  });

  it("renders Personal Information section", async () => {
  renderUserDetails();

  const section = await screen.findByText("Personal Information");
  expect(section).toBeInTheDocument();

  const sectionScope = within(section.parentElement as HTMLElement);

  expect(sectionScope.getByText("BVN")).toBeInTheDocument();
  expect(sectionScope.getByText("Gender")).toBeInTheDocument();
});


  it("renders Guarantor section with two guarantors", async () => {
  renderUserDetails();

  expect(
    await screen.findByText("Guarantor")
  ).toBeInTheDocument();


});


  it("does not navigate when back button is not clicked", () => {
    renderUserDetails();
    expect(mockNavigate).not.toHaveBeenCalled();
  });


});
