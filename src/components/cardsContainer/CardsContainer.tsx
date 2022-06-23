import { Suspense, useContext, useEffect, useState } from "react";
import { CARDS } from "../../constants";
import CategoryContext from "../../contextProviders/contextProviders";
import Skeleton from "../../elements/skeleton/Skeleton";
import { useKeyPress } from "../../hooks/useKeyPress";
import { ICard } from "../../types";
import Card from "../card/Card";

const CardsContainer = () => {
  const [cards, setCards] = useState(CARDS.slice(0, 9));
  const [shownCards, setShownCards] = useState<ICard[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const { key, setKey } = useKeyPress();
  const { category } = useContext(CategoryContext);
  const skeletons = Array(3).map(() => <Skeleton />);
  const noCards = shownCards.length === 0;

  const handleClick = () => {
    if (isDisabled) {
      return;
    }

    setCards((prev) => prev.concat(CARDS.slice(9)));
    setIsDisabled(true);
  };

  useEffect(() => {
    setShownCards(cards.filter((el) => category === 0 || el.categoryId === category));
  }, [category, cards]);

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
        <Suspense fallback={skeletons}>
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
        </Suspense>
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
