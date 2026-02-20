import { useState } from "react";

const LazyImage = ({
  src,
  alt = "",
  title = "",
  className = "",
  skeletonClass = "",
  wrapperClass = "",
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden w-full h-full ${wrapperClass}`}>
      {/* Skeleton */}
      {!loaded && (
        <div
          className={`absolute inset-0 bg-gray-200 skeleton-shimmer-image ${skeletonClass}`}
        />
      )}

      <img
        src={src}
        alt={alt}
        title={title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`
          w-full h-full object-cover
          transition-opacity duration-500 ease-in-out
          ${loaded ? "opacity-100" : "opacity-0"}
          ${className}
        `}
      />
    </div>
  );
};

export default LazyImage;
