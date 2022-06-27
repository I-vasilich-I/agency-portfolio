import { useEffect, useState } from "react";

const useImageLoad = (img: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
  };

  useEffect(() => {
    const image = new Image();
    image.src = img;
    image.addEventListener("load", handleLoad);
    image.addEventListener("error", handleError);
    return () => {
      image.removeEventListener("load", handleLoad);
      image.removeEventListener("error", handleError);
    };
  }, [img]);

  return { isLoaded, isError, src: img };
};

export default useImageLoad;
