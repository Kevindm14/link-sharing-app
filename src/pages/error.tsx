import { NavLink, useRouteError } from "react-router-dom";

interface ErrorInterface {
  status: number;
  statusText: string;
}

export const Error = () => {
  const { status, statusText } = useRouteError() as ErrorInterface;

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-9xl font-bold mb-1">{status}</h1>
      <h2 className="text-2xl mb-4">{statusText}</h2>
      <NavLink
        to="/links"
        className="text-blue-500 hover:text-blue-600 bg-white px-5 py-2 rounded-md font-bold shadow-sm"
      >
        Go back
      </NavLink>
    </div>
  );
};
