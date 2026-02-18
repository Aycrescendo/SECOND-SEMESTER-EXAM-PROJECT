import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import { useDeleteTodo } from "./hooks";

export default function TodoCard({ todo }) {
  const deleteMutation = useDeleteTodo();
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center">
      <div>
        <h3 className="font-medium">{todo.name}</h3>
        <p className="text-sm text-gray-500">
          {todo.completed ? "Completed" : "Pending"}
        </p>
      </div>
      <div className="flex items-center gap-20">
        <Link
        to={`/todos/${todo.id}`}
        className="text-sm text-indigo-600"
      >
        View
      </Link>
      <AlertDialog>
      <AlertDialogTrigger asChild>
      <button className="text-sm text-red-600">
      Delete
    </button>
  </AlertDialogTrigger>

  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>
        Delete this todo?
      </AlertDialogTitle>
    </AlertDialogHeader>

    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction
        onClick={() => deleteMutation.mutate(todo.id)}
      >
        Delete
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
      </div>
      

    </div>
  );
}
