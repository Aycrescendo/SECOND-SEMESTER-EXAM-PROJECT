import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import ProtectedRoute from "@/components/ProtectedRoute";
import TodosPage from "@/pages/TodosPage";
import LoginPage from "@/pages/LoginPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route
          index
          element={
            <ProtectedRoute>
              <TodosPage />
            </ProtectedRoute>
          }
        />

        <Route path="login" element={<LoginPage />} />

      </Route>
    </Routes>
  );
}
