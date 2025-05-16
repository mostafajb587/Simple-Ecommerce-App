import { useState, useMemo } from "react";

function usePagination<T>(items: T[] = [], itemsPerPage = 4) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = useMemo(() => {
    return Math.ceil(items.length / itemsPerPage);
  }, [items.length, itemsPerPage]);

  const currentItems = useMemo(() => {
    const start = currentIndex * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [currentIndex, items, itemsPerPage]);

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return {
    currentItems,
    currentIndex,
    totalPages,
    handleNext,
    handlePrevious,
  };
}

export default usePagination;
