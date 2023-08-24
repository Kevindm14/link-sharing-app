import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import useAuthStore from "./store/AuthStore";

export const Layout = () => {
  const session = useAuthStore((state) => state.session);

  return (
    <>
      {session?.access_token && <Navbar />}
      <Outlet />
    </>
  );
};
