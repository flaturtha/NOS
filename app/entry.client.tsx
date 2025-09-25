import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import Root from "./root";
import Home from "./routes/home";
import Landing from "./routes/landing-ebook";
import Landing31TBe from "./routes/31TBe";
import Landing31BTe from "./routes/31BTe";
import Landing32BTe from "./routes/32BTe";
import Landing32TBe from "./routes/32TBe";
import Landing37TBe from "./routes/37TBe";

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
      {
        path: "31TBe",
        element: <Landing31TBe />,
      },
      {
        path: "31BTe",
        element: <Landing31BTe />,
      },
      {
        path: "32BTe",
        element: <Landing32BTe />,
      },
      {
        path: "32TBe",
        element: <Landing32TBe />,
      },
      {
        path: "37TBe",
        element: <Landing37TBe />,
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
