import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ offset, limit, total, onPageChange }) => {
  if (!limit || total <= limit) return null;

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;

  return (
    <div className="flex justify-center items-center gap-x-4 mt-10">
      <button
        disabled={!canPrev}
        onClick={() => onPageChange(offset - limit)}
        className={`px-1 rounded border transition
          ${
            canPrev
              ? "border-gray-300 hover:bg-gray-300 hover:text-black"
              : "border-gray-600 text-gray-600 cursor-not-allowed"
          }`}
      >
        <ChevronLeft className="inline-block w-5" />
      </button>

      <span className="text-sm opacity-70">
        Página {currentPage} de {totalPages}
      </span>

      <button
        disabled={!canNext}
        onClick={() => onPageChange(offset + limit)}
        className={`px-1 rounded border transition
          ${
            canNext
              ? "border-gray-300 hover:bg-gray-300 hover:text-black"
              : "border-gray-600 text-gray-600 cursor-not-allowed"
          }`}
      >
        <ChevronRight className="inline-block w-5" />
      </button>
    </div>
  );
};

export default Pagination;
