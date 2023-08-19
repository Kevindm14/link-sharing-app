import { Navigate } from "react-router-dom";
import { supabase } from "../libraries/supabase";

type Props = {
  children: JSX.Element;
};

export const Protected: React.FC<Props> = ({ children }) => {
  const data = null;
  supabase.auth.getSession().then((data) => (data = data));

  return data?.data.session != null ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};
