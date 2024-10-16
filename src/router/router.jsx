import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import PostLayout from "../layout/PostLayout";

import HomePage from "../pages/Home";
import ErrorPage from "../pages/Error";
import Post from "../pages/Post";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SinglePost from "../pages/SinglePost";
import PostByTag from "../pages/PostByTag";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "posts",
        element: <PostLayout />,
        children: [
          { index: true, element: <Post /> },
          { path: ":postId", element: <SinglePost /> },
          { path: "tag/:tag", element: <PostByTag /> },
        ],
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
