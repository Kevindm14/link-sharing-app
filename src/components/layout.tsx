import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import { supabase } from "../libraries/supabase";

export const Layout = () => {
  const data = null;
  supabase.auth.getSession().then((data) => (data = data));

  return (
    <>
      {data?.data.session != null && <Navbar />}
      <Outlet />
    </>
  );
};
