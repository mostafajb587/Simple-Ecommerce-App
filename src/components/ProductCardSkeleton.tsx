const ProcductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg w-64 flex-shrink-0 animate-pulse">
      <div className="h-48 w-full bg-gray-300 rounded-md"></div>
      <div className="p-4">
        <div className="bg-gray-300 h-4 mb-2 rounded w-3/4"></div>
        <div className="bg-gray-300 h-4 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default ProcductCardSkeleton;
