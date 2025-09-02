import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import Root from "./root";
import Home from "./routes/home";
import Landing from "./routes/landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "landing",
        element: <Landing />,
      },
    ],
  },
]);

startTransition(() => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    hydrateRoot(
      rootElement,
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );
  }
});
