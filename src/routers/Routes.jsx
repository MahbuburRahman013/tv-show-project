import {
    createBrowserRouter,
  } from "react-router-dom";
import HomePage from "../components/HomePage";
import Summery from "../components/Summery";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/:id",
      element: <Summery/>,
    },
  ]);