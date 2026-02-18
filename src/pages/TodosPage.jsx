import { useState, useMemo } from "react";
import { useTodos } from "@/features/tasks/hooks";

import { useDebounce } from "@/hooks/useDebounce";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TodoForm from "@/features/tasks/TodoForm";
import { useCreateTodo } from "@/features/tasks/hooks";
import TodoList from "@/features/tasks/TodoList";
import Pagination from "@/components/Pagination";
import TodoFilters from "@/features/tasks/filters";

export default function TodosPage() {
  const [open, setOpen] = useState(false);
  const createMutation = useCreateTodo();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const debouncedSearch = useDebounce(search);

  const { data, isLoading, isError } = useTodos(page);

  const todos = useMemo(() => {
    return data?.data || [];
  }, [data]);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchesSearch = todo.name
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      const matchesStatus =
        status === "all"
          ? true
          : status === "completed"
            ? todo.completed
            : !todo.completed;
      return matchesSearch && matchesStatus;
    });
  }, [todos, debouncedSearch, status]);

  if (isLoading) {
    return (
      <p className="text-center text-sm">Loading todos...</p>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-sm text-red-600">Failed to load todos.</p>
    );
  }

  const hasNextPage = todos.length === 10;

  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-3 ">Todos</h2>
        <Button onClick={() => setOpen(true)}>
          Add Todo
        </Button>

      </div>
      
      <TodoFilters
        search={search}
        status={status}
        onSearchChange={(value) => {
          setSearch(value);
          setPage(1);
        }}
        onStatusChange={(value) => {
          setStatus(value);
          setPage(1);
        }}
      />
      {filteredTodos.length === 0 ? (
        <p className="text-sm text-gray-500">No todos match your filters.</p>
      ) : (
        <>
          <TodoList todos={filteredTodos} />
          <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        </>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Todo</DialogTitle>
            <DialogDescription>
              Fill in the details below to create a new task.
            </DialogDescription>
            </DialogHeader>

          <TodoForm
            defaultValues={{ name: "", description: "" }}
            isLoading={createMutation.isPending}
            onSubmit={(data) => {
              createMutation.mutate( {
                name: data.name,
                description: data.description,
                status: "TODO",
                onSuccess: () => setOpen(false),
              });
            }}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}


