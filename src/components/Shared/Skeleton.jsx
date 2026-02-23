import React from "react";

export const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray-300 rounded-md ${className}`}></div>
);

export const ProductCardSkeleton = () => (
  <div className="flex flex-col rounded-2xl p-3 sm:p-4 border border-gray-100 min-h-70 sm:min-h-95 lg:min-h-130 relative">
    <Skeleton className="h-35 sm:h-50 lg:h-75 w-full rounded-xl" />
    <Skeleton className="h-6 w-3/4 mt-4" />
    <Skeleton
      className="h-10 w-[90%] rounded-lg absolute bottom-4"
      style={{ left: "50%", transform: "translateX(-50%)" }}
    />
  </div>
);

export const ProductGridSkeleton = ({ count = 4 }) => (
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
    {[...Array(count)].map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
);

export const CategoryCardSkeleton = () => (
  <div className="rounded-tl-3xl overflow-hidden min-w-[300px]">
    <Skeleton className="h-[260px] w-full" />
    <div className="bg-gray-50 px-6 py-6 flex items-center justify-between">
      <Skeleton className="h-8 w-1/2" />
      <Skeleton className="h-8 w-8 rounded-md" />
    </div>
  </div>
);

export const CategorySliderSkeleton = ({ count = 2 }) => (
  <div className="flex gap-4 overflow-hidden">
    {[...Array(count)].map((_, i) => (
      <CategoryCardSkeleton key={i} />
    ))}
  </div>
);

export const ProductDetailSkeleton = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-4 md:p-10">
    <div className="space-y-4">
      <Skeleton className="aspect-square w-full rounded-xl" />
      <div className="grid grid-cols-3 gap-3">
        <Skeleton className="aspect-square rounded-lg" />
        <Skeleton className="aspect-square rounded-lg" />
        <Skeleton className="aspect-square rounded-lg" />
      </div>
    </div>
    <div className="space-y-6">
      <div className="space-y-3">
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-10 w-1/4" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <div className="flex gap-3">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
          {[...Array(7)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>
      </div>
      <div className="space-y-3 pt-4">
        <div className="grid grid-cols-5 gap-2">
          <Skeleton className="h-14 col-span-4 rounded-xl" />
          <Skeleton className="h-14 col-span-1 rounded-xl" />
        </div>
        <Skeleton className="h-14 w-full rounded-xl" />
      </div>
    </div>
  </div>
);
