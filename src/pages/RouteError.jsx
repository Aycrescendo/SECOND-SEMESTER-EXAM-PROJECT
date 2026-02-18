import { useRouteError } from "react-router-dom";

export default function RouteError() {
  const error = useRouteError();
  console.error("Router error:", error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-2xl font-bold">Router Error 😢</h1>
      <p className="text-gray-600">
        {error?.message || "Something went wrong with routing"}
      </p>
    </div>
  );
}