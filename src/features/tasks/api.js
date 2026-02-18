import { api } from "@/lib/apiClient" 

export const createTodo = async (payload) => {
  const response = await api.post("/tasks", payload);
  return response.data;
};

export const updateTodo = async ({ id, payload }) => {
  const response = await api.put(`/tasks/${id}, payload`);
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
};

export const getTodos = async () => {
  const response = await api.get("/tasks");
  return response.data;
};

export const getTodo = async (id) => {
  const response = await api.get(`/tasks/${id}`);
  return response.data;
};


