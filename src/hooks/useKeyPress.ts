import { useEffect, useState } from "react";

const useKeyPress = () => {
  const [key, setKey] = useState<string>("");

  const handleKeyPress = (e: KeyboardEvent) => {
    setKey(e.code);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return { key, setKey };
};

// eslint-disable-next-line import/prefer-default-export
export { useKeyPress };
