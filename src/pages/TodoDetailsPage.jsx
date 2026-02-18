import { useParams, useNavigate } from "react-router-dom";
import { useTodo } from "@/features/tasks/hooks";
import TodoDetails from "@/features/tasks/TodoDetails";

export default function TodoDetailspage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useTodo(id);

  if (isLoading) {
    return (
      <p className="text-center text-sm text-gray-500">
        Loading todo...
      </p>
    );
  }

  if (isError || !data) {
    return (
      <div className="text-center space-y-3">
        <p className="text-sm text-red-600">
          Todo not found.
        </p>
        <button
          onClick={() => navigate("/")}
          className="text-sm text-indigo-600"
        >
          Go back
        </button>
      </div>
    );
  }

  const todo = data;

  return (
    <section className="max-w-xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-indigo-600"
      >
        ← Back
      </button>

      <TodoDetails todo={todo} />
    </section>
  );
}