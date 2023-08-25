import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Links, Profile } from "./pages";
import { Layout } from "./components/layout";
import { AnimatePresence } from "framer-motion";
import { Error } from "./pages/error";
import { Protected } from "./components/protected";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import Preview from "./pages/Preview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/",
        element: (
          <Protected>
            <Links />
          </Protected>
        ),
      },
      {
        path: "links",
        element: (
          <Protected>
            <Links />
          </Protected>
        ),
      },
      {
        path: "profile",
        element: (
          <Protected>
            <Profile />
          </Protected>
        ),
      },
    ],
  },
  {
    path: "/preview",
    element: (
      <Protected>
        <Preview />
      </Protected>
    ),
  },
]);

function App() {
  return (
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
