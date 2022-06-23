import { createContext } from "react";

const CategoryContext = createContext({
  category: 0,
  setCategory: (value: number) => {},
});

export { CategoryContext }