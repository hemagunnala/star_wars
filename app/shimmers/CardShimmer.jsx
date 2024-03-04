const CardShimmer = () => {
  return (
    <div className="animate-pulse bg-gray-200 rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div className="sm:m-4 flex flex-col gap-2">
        <div className="h-6 bg-gray-300 rounded"></div>
        <div className="flex flex-col gap-2">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-4 text-lg text-black"
            >
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardShimmer;
