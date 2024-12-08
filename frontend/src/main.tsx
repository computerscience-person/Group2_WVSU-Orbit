/// <reference lib="dom" />

import React from "npm:react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ContactsUs from "./pages/ContactsUs.tsx";
import Events from "./pages/Events.tsx";
import Organizations from "./pages/Organizations.tsx";
import OrgPage from "./pages/OrgPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "about",
    element: <AboutUs />,
  },
  {
    path: "contact",
    element: <ContactsUs />,
  },
  {
    path: "events",
    element: <Events />,
  },
  {
    path: "orgs",
    element: <Organizations />,
  },
  {
    path: "orgpage/:org_id", // Dynamic route parameter for organization ID
    element: <OrgPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
