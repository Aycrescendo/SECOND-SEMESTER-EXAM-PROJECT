export default function Pagination({ page, setPage, hasNextPage }) {
  return (
    <div className="flex justify-center items-center gap-3 mt-6">
      <button
        className="px-3 py-1 border rounded-md text-sm disabled:opacity-50"
        disabled={page === 1}
        onClick={() => setPage((p) => p - 1)}
      >
        Prev
      </button>

      <span className="text-sm">Page {page}</span>

      <button
        className="px-3 py-1 border rounded-md text-sm disabled:opacity-50"
        disabled={!hasNextPage}
        onClick={() => setPage((p) => p + 1)}
      >
        Next
      </button>
    </div>
  );
}