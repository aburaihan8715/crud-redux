import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Error from "../pages/Error";
import Users from "../pages/Users";
import AddUsers from "../pages/AddUsers";
import UpdateUsers from "../pages/UpdateUsers";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Users />,
      },
      {
        path: "/create-user",
        element: <AddUsers />,
      },
      {
        path: "/update-user/:id",
        element: <UpdateUsers />,
      },
    ],
  },
]);
