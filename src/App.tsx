import React from "react";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes";

function App() {

  return (
    <div>
      <RouterProvider router={Routes} />
    </div>
    
  )
}

export default App
