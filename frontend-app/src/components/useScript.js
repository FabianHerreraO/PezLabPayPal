import { useEffect } from "react";

const useScript = (
  url,
  integrity = null,
  async = true,
  crossOrigin = "anonymous"
) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;

    script.async = async;

    if (integrity) {
      script.integrity = integrity;
    }

    script.crossOrigin = crossOrigin;

    setTimeout(() => document.body.appendChild(script), 100);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, integrity, async, crossOrigin]);
};

export default useScript;
