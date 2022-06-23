/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from "classnames";
import { useContext, useEffect, useState, MouseEvent } from "react";
import { MOBILE_BRAKE_POINT } from "../../constants";
import CategoryContext from "../../contextProviders/contextProviders";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { ICard } from "../../types";
import "./Card.scss";

interface IProps {
  id: string;
  name: string;
  category: string;
  categoryId: number;
  img: string;
  setCards: React.Dispatch<React.SetStateAction<ICard[]>>;
}

const Card = ({ id, name, category, categoryId, img, setCards }: IProps) => {
  const { setCategory } = useContext(CategoryContext);
  const [isChecked, setIsChecked] = useState(false);
  const { width } = useWindowDimensions();
  const isMobile = width <= MOBILE_BRAKE_POINT;
  const cardClass = classNames("card", {
    "card--checked": isChecked,
  });

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCategory(categoryId);
  };

  const handleChange = () => {
    // weird requirement: to rely on device width, would've be more sense if we'd check type of device
    if (isMobile) {
      return;
    }

    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    setCards((prev) =>
      prev.map((el) => {
        const temp = el;
        if (el.id === id) {
          temp.toDelete = isChecked;
        }
        return temp;
      })
    );
  }, [isChecked, id, setCards]);

  return (
    <div className={cardClass} onClick={handleChange}>
      <label htmlFor="checkbox" className="card__checkbox">
        <input type="checkbox" name="checkbox" id="checkbox" defaultChecked={isChecked} />
      </label>
      <img src={img} alt="" className="card__img" loading="lazy" />
      <button type="button" className="card__button" onClick={handleClick}>
        {category}
      </button>
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
