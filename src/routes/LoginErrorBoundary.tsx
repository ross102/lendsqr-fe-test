import React from "react"
import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError() as any;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Something went wrong </h1>
      <p>{error?.message || "Unexpected error occurred"}</p>
    </div>
  );
};

export default ErrorBoundary;