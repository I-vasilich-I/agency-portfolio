import { useContext } from 'react';
import { CategoryContext } from '../../contextProviders/contextProviders';
import './Card.scss';

interface IProps {
  name: string;
  category: string;
  categoryId: number;
  img: string;
  setCategory:  React.Dispatch<React.SetStateAction<number>>
}

const Card = ({name, category, categoryId, img }: IProps) => {
  const { setCategory } = useContext(CategoryContext);
  
  const handleClick = () => {
    setCategory(categoryId);
  }

  return (
    <div className="card">
      <img src={img} alt="" />
      <button className="card__button" onClick={handleClick}>{category}</button>
      <h3>{name}</h3>
    </div>
  )
}

export default Card;