import { useMemo, useState } from "react";
import CategoryContext from "../../contextProviders/contextProviders";
import Category from "../category/Category";
import CardsContainer from "../cardsContainer/CardsContainer";
import "./Gallery.scss";

const Gallery = () => {
  const [category, setCategory] = useState(0);
  const contextValue = useMemo(() => ({ category, setCategory }), [category]);

  return (
    <CategoryContext.Provider value={contextValue}>
      <section className="section">
        <div className="section__wrapper">
          <Category />
          <CardsContainer />
        </div>
      </section>
    </CategoryContext.Provider>
  );
};

export default Gallery;
