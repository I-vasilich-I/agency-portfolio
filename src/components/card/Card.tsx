import './Card.scss';

interface IProps {
  id: string;
  name: string;
  category: string;
  img: string;
}

const Card = ({id, name, category, img }: IProps) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <button className="card__button">{category}</button>
      <h3>{name}</h3>
    </div>
  )
}

export default Card;