import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import TodosPage from "@/pages/TodosPage";
import TodoDetailsPage from "@/pages/TodoDetailsPage";
import TestError from "@/pages/TestError";
import NotFound from "@/pages/NotFound";
import RouteError from "@/pages/RouteError";
import ErrorBoundary from "@/app/error-boundary";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    ),
    errorElement: <RouteError />,
    children: [
      { index: true, element: <TodosPage /> },
      { path: "todos/:id", element: <TodoDetailsPage /> },
      { path: "test-error", element: <TestError /> },
      { path: "/login", element: <LoginPage />},
      { path: "/register", element: <RegisterPage />},
      { path: "*", element: <NotFound /> },
    ],
  },
]);
