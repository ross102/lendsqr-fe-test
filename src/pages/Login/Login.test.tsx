import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter} from "react-router-dom";
import Login from "./Login";


const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => mockNavigate };
});

const renderLogin = () => {
  return render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
};

describe("Login", () => {
  it("renders the login form with all elements", () => {
    renderLogin();

    expect(screen.getByRole("heading", { name: /welcome/i })).toBeInTheDocument()
    expect(screen.getByText("Enter details to login.")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /show password/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /forgot password/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });

  it("toggles password visibility", async () => {
    const user = userEvent.setup();
     renderLogin();

    const passwordInput = screen.getByLabelText("Password");
    const toggleBtn = screen.getByRole("button", { name: /show password/i });

    expect(passwordInput).toHaveAttribute("type", "password");

    await user.click(toggleBtn);
    expect(passwordInput).toHaveAttribute("type", "text");
    expect(toggleBtn).toHaveTextContent("HIDE");

    await user.click(toggleBtn);
    expect(passwordInput).toHaveAttribute("type", "password");
    expect(toggleBtn).toHaveTextContent("SHOW");
  });

  it("allows typing in email and password fields", async () => {
    const user = userEvent.setup();
     renderLogin();

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");

    await user.type(emailInput, "test@example.com");
    await user.type(passwordInput, "secret123");

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("secret123");
  });

  it("submits the form without page reload", async () => {
    const user = userEvent.setup();
     renderLogin();

    await user.type(screen.getByLabelText("Email"), "test@example.com");
    await user.type(screen.getByLabelText("Password"), "secret123");
    await user.click(screen.getByRole("button", { name: /log in/i }));

    expect(screen.getByRole("heading", { name: /welcome/i })).toBeInTheDocument();
  });

  it("has correct forgot password link", () => {
    renderLogin();
    const link = screen.getByRole("link", { name: /forgot password/i });
    expect(link).toHaveAttribute("href", "/forgot-password");
  });

  it("navigates to dashboard when login button is clicked", async () => {
     renderLogin();
  const user = userEvent.setup();

  const loginButton = await screen.findByTestId("login-button");

  await user.click(loginButton);

  expect(mockNavigate).toHaveBeenCalledWith("/dashboard");

});
});
