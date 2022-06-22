import { useEffect, useState } from 'react';
import classNames from 'classnames';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Card from '../card/Card';
import CustomSelect from '../../elements/customSelect/CustomSelect';
import InputRadioOptions from '../../elements/inputRadioOptions/inputRadioOptions';
import { RADIO_OPTIONS, SELECT_OPTIONS, CARDS } from '../../constants';
import './Gallery.scss';

const Gallery = () => {
  const [cards, setCards] = useState(CARDS.slice(0,9));
  const [isDisabled, setIsDisabled] = useState(false);
  const [category, setCategory] = useState(0);
  const { width } = useWindowDimensions();
  const isMobile = width <= 1040;
  const fieldsetClassName = classNames('categories', {'categories--select': isMobile});

  const handleClick = () => {
    if (isDisabled) {
      return;
    }

    setCards((prev) => prev.concat(CARDS.slice(9)));
    setIsDisabled(true);
  }

  useEffect(() => {
    console.log(category)
  }, [category])

  return (
    <section className="section">
      <div className="wrapper__section">
        <fieldset id='category' className={fieldsetClassName}>
          {isMobile 
            ? <CustomSelect options={SELECT_OPTIONS} label="" /> 
            : <InputRadioOptions options={RADIO_OPTIONS} setValue={setCategory} />
          }     
        </fieldset>
        <div className="cards-container">
          {cards.map(( {id, name, category, img}) => <Card key={id} id={id} name={name} category={category} img={img} />)}
        </div>
        <button className="button" onClick={handleClick} disabled={isDisabled}>load more</button>
      </div>
    </section>
  )
} 

export default Gallery;