import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AllEssays } from "./routes/AllEssays";
import { EssayPage } from "./routes/EssayPage";
import { EssayCorrectionPage } from "./routes/EssayCorrectionPage";
import { WriteEssay } from "./routes/WriteEssay";

import "./index.css";
import { fetcher } from "./api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllEssays />,
    loader: () => fetcher("/Essay"),
  },
  {
    path: "/essays/:id",
    element: <EssayPage />,
    loader: ({ params }) => fetcher(`/Essay/${params.id}`),
  },
  {
    path: "/essays/:id/correction",
    element: <EssayCorrectionPage />,
    loader: ({ params }) => fetcher(`/Essay/${params.id}`),
  },
  {
    path: "/write",
    element: <WriteEssay />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
