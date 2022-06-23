/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

const CategoryContext = createContext({
  category: 0,
  setCategory: (value: number) => {},
});

export default CategoryContext;
