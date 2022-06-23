import classNames from 'classnames';
import { useContext, useEffect, useState, MouseEvent } from 'react';
import { CategoryContext } from '../../contextProviders/contextProviders';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { ICard } from '../../types';
import './Card.scss';

interface IProps {
  id: string;
  name: string;
  category: string;
  categoryId: number;
  img: string;
  setCards: React.Dispatch<React.SetStateAction<ICard[]>>
}

const Card = ({id, name, category, categoryId, img, setCards }: IProps) => {
  const { setCategory } = useContext(CategoryContext);
  const [isChecked, setIsChecked] = useState(false);
  const { width } = useWindowDimensions();
  const isMobile = width <= 1040;
  const cardClass = classNames('card', {
    'card--checked': isChecked
  })
  
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCategory(categoryId);
  }

  const handleChange = (e: any) => {
    // weird requirement: to rely on device width, would've be more sense if we'd check type of device
    if (isMobile) {
      return;
    }

    setIsChecked((prev) => !prev);
  }

  useEffect(() => {
    setCards(prev => prev.map((el) => {
      if (el.id === id) {
        el.toDelete = isChecked;
      }
      return el;
    }))
  }, [isChecked, id, setCards]);

  return (
    <div className={cardClass} onClick={handleChange}>
      <label htmlFor="checkbox" className='card__checkbox'>
        <input type="checkbox" name="checkbox" id="checkbox" defaultChecked={isChecked} />
      </label>
      <img src={img} alt="" className='card__img' />
      <button className="card__button" onClick={handleClick}>{category}</button>
      <h3>{name}</h3>
    </div>
  )
}

export default Card;