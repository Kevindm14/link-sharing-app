import { useRouteError } from "react-router-dom";

interface ErrorInterface {
  status: number;
  data: string;
  statusText: string;
}

export const Error = () => {
  const { status, data, statusText } = useRouteError() as ErrorInterface;

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">{status}</h1>
      <h2 className="text-lg mb-4">{statusText}</h2>
      <p>{data}</p>
    </div>
  );
};
