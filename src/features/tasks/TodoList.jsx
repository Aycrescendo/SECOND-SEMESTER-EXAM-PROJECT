import TodoCard from "./TodoCard";

export default function TodoList({ todos }) {
  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}