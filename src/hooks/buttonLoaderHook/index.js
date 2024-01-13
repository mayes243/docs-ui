import { useRef, useState, useEffect } from "react";

const useButtonLoader = (defaultText = "", loadingText = "Loading...") => {
  const [isLoading, setLoading] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    if (isLoading) {
      element.current.disabled = true;
      element.current.innerHTML =
        '<div class="flex justify-center items-center gap-2"> <div class="spinner-border items-center animate-spin inline-block w-4 h-4 border-4 rounded-full" role="status"> </div> ' +
        loadingText +
        "</div>";
    } else if (element.current) {
      element.current.disabled = false;
      element.current.innerHTML = defaultText;
    }
  }, [element, isLoading]);
  return [element, setLoading];
};

export default useButtonLoader;
