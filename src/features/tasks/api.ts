import { api } from "@/lib/apiClient";
import { Todo } from "@/types/todo";

export const createTodo = async (
  payload:Partial<Todo>
): Promise<Todo> => {
  const response = await api.post("/tasks", payload);
  return response.data;
};

export const updateTodo = async ({ 
  id, 
  payload,
}: {
  id: number;
  payload: Partial<Todo>;
}): Promise<Todo> => {
  const response = await api.put<Todo>(`/tasks/${id}`, payload);
  return response.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await api.delete(`/tasks/${id}`);
};

export const getTodos = async (): Promise<Todo[]> => {
  const response = await api.get<Todo[]>("/tasks");
  return response.data;
};

export const getTodo = async (id: number): Promise<Todo> => {
  const response = await api.get<Todo>(`/tasks/${id}`);
  return response.data;
};


