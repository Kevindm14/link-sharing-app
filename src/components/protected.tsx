import { Navigate } from "react-router-dom";
import useAuthStore from "./store/AuthStore";

type Props = {
  children: JSX.Element;
};

export const Protected: React.FC<Props> = ({ children }) => {
  const session = useAuthStore((state) => state.session);

  return session?.access_token ? children : <Navigate to="/login" replace />;
};
