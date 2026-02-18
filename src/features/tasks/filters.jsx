export default function TodoFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-5">
      <input
        type="text"
        value={search}
        placeholder="Search todos..."
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full sm:w-1/2 border rounded-md px-3 py-2 text-sm"
        aria-label="Search todos"
      />

      <div className="flex gap-2">
        {["all", "completed", "pending"].map((value) => (
          <button
            key={value}
            onClick={() => onStatusChange(value)}
            className={`px-3 py-1 rounded-md text-sm border
              ${
                status === value
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white"
              }`}
            aria-pressed={status === value}
          >
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}