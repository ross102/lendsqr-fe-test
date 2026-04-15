import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Login from "@/pages/Login/Index";
import Dashboard from "@/pages/Dashboard/Dashboard";
import UserDetails from "@/pages/UserDetails/UserDetails";
import LoginErrorBoundary from "./LoginErrorBoundary"; 

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <LoginErrorBoundary />,
  },
   {
    path: "/dashboard",
    element: <Dashboard />,
  },
   {
    path: "/user-details/:id",
    element: <UserDetails />,
  },
])

export default Routes;