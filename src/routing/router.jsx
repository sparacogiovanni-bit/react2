import {
  createBrowserRouter,
} from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "posts",
        loader: async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          return response.json();
        },
        element: <Posts />,
      },

      {
        path: "posts/:id",
        loader: async ({ params }) => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.id}`
          );
          return response.json();
        },
        element: <Detail />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;