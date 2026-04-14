import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Login from "@/pages/Login/Index";
import Dashboard from "@/pages/Dashboard/Dashboard";
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
])

export default Routes;