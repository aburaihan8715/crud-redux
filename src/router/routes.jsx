import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Error from "../pages/Error";
import AddUsers from "../pages/AddUsers";
import UpdateUsers from "../pages/UpdateUsers";
import Home from "../pages/Home";
import Post from "../pages/Post";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-user",
        element: <AddUsers />,
      },
      {
        path: "/update-user/:id",
        element: <UpdateUsers />,
      },
      {
        path: "/post",
        element: <Post />,
      },
    ],
  },
]);
