import { useContext, useEffect, useMemo, useState } from "react";
import { CARDS } from "../../constants";
import CategoryContext from "../../contextProviders/contextProviders";
import { useKeyPress } from "../../hooks/useKeyPress";
import Card from "../card/Card";

const CardsContainer = () => {
  const { category } = useContext(CategoryContext);
  const { key, setKey } = useKeyPress();
  const [cards, setCards] = useState(CARDS.slice(0, 9));
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    if (isDisabled) {
      return;
    }

    setCards((prev) => prev.concat(CARDS.slice(9)));
    setIsDisabled(true);
  };

  const shownCards = useMemo(
    () => cards.filter((el) => category === 0 || el.categoryId === category),
    [category, cards]
  );

  const noCards = shownCards.length === 0;

  useEffect(() => {
    if (key !== "Delete") {
      return;
    }

    setCards((prev) => prev.filter((el) => !el.toDelete));
    setKey("");
  }, [key, setKey]);

  return (
    <>
      <div className="cards-container">
        {shownCards.map(({ id, name, category: cardCategory, categoryId, img }) => (
          <Card
            key={id}
            id={id}
            name={name}
            category={cardCategory}
            categoryId={categoryId}
            img={img}
            setCards={setCards}
          />
        ))}
      </div>
      {noCards && isDisabled ? null : (
        <button type="button" className="button" onClick={handleClick} disabled={isDisabled}>
          load more
        </button>
      )}
    </>
  );
};

export default CardsContainer;
