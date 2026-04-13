import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Login from "@/pages/Login/index";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
])

export default Routes;