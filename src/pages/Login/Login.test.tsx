import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import Login from "./Login";

describe("Login", () => {
  it("renders the login form with all elements", () => {
    render(<Login />);

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
    render(<Login />);

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
    render(<Login />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");

    await user.type(emailInput, "test@example.com");
    await user.type(passwordInput, "secret123");

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("secret123");
  });

  it("submits the form without page reload", async () => {
    const user = userEvent.setup();
    render(<Login />);

    await user.type(screen.getByLabelText("Email"), "test@example.com");
    await user.type(screen.getByLabelText("Password"), "secret123");
    await user.click(screen.getByRole("button", { name: /log in/i }));

    // Form should still be visible (no navigation since we prevent default)
    expect(screen.getByRole("heading", { name: /welcome/i })).toBeInTheDocument();
  });

  it("has correct forgot password link", () => {
    render(<Login />);
    const link = screen.getByRole("link", { name: /forgot password/i });
    expect(link).toHaveAttribute("href", "/forgot-password");
  });
});
