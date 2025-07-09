const NewsCardSkeleton = () => {
  return (
    <div className="flex lg:flex-col gap-2 p-2 sm:p-4 rounded-md bg-neutral-900 animate-pulse w-full mb-2">
      {/* Image skeleton */}
      <div className="bg-neutral-800 rounded-md h-40 w-full" />

      {/* Source and date */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center mt-2">
          <div className="bg-neutral-800 h-4 w-20 rounded" />
          <div className="bg-neutral-800 h-4 w-16 rounded" />
        </div>

        {/* Headline skeleton */}
        <div className="flex flex-col gap-1 mt-1">
          <div className="bg-neutral-800 h-4 w-3/4 rounded" />
          <div className="bg-neutral-800 h-4 w-1/2 rounded" />
        </div>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
