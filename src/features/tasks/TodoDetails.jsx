export default function TodoDetails({ todo }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">{todo?.name}</h2>

      <span
        className={`inline-block px-2 py-1 text-xs rounded ${
          todo?.completed
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {todo?.completed ? "Completed" : "Pending"}
      </span>

      {todo?.description && (
        <p className="text-sm text-gray-700">
          {todo?.description}
        </p>
      )}
    </div>
  );
}