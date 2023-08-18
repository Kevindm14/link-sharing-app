import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Links } from "./pages";
import { Layout } from "./components/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "",
        element: <Links />,
      },
      {
        path: "links",
        element: <Links />,
      },
      {
        path: "profile",
        element: <div>Profile</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
