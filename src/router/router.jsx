
import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/layouts/RootLayout";
import MainHome from "../pages/Home/MainHome";
import { Component } from "react";
import AppointmentSection from "../pages/appointment/appointment";
import Booking from "../pages/Booking/Booking";
import Team from "../pages/Team/Team";



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: MainHome,
      },
      {
        path: "/appointment",
        Component: Booking
      },
      {
        path: "/team",
        Component: Team
      },
    ],
  },
]);

export default router;
