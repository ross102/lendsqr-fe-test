import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Login from "@/pages/Login/Index";
import LoginErrorBoundary from "./LoginErrorBoundary"; 

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <LoginErrorBoundary />,
  },
])

export default Routes;