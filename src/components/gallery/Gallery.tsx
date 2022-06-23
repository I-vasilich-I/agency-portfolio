import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { CategoryContext } from '../../contextProviders/contextProviders';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useKeyPress } from '../../hooks/useKeyPress';
import Card from '../card/Card';
import CustomSelect from '../../elements/customSelect/CustomSelect';
import InputRadioOptions from '../../elements/inputRadioOptions/inputRadioOptions';
import { RADIO_OPTIONS, SELECT_OPTIONS, CARDS } from '../../constants';
import { ICard } from '../../types';
import './Gallery.scss';

const Gallery = () => {
  const [cards, setCards] = useState(CARDS.slice(0,9));
  const [shownCards, setShownCards] = useState<ICard[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [category, setCategory] = useState(0);
  const { width } = useWindowDimensions();
  const { key, setKey } = useKeyPress();
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
    setShownCards(cards.filter((el) => category === 0 || el.categoryId === category));
  }, [category, cards])

  useEffect(() => {
    if (!key) {
      return;
    }

    setCards((prev) => prev.filter((el) => !el.toDelete))
    setKey('');
  }, [key, setKey])

  return (
    <CategoryContext.Provider value={{ category, setCategory }} >
      <section className="section">
        <div className="wrapper__section">
          <fieldset id='category' className={fieldsetClassName}>
            {isMobile 
              ? <CustomSelect options={SELECT_OPTIONS} label="" dispatcher={setCategory} /> 
              : <InputRadioOptions options={RADIO_OPTIONS} />
            }   
          </fieldset>
          <div className="cards-container">
            {shownCards
              .map(( {id, name, category, categoryId, img}) => 
              <Card key={id} id={id} name={name} category={category} categoryId={categoryId} img={img} setCards={setCards} />
            )}
          </div>
          <button className="button" onClick={handleClick} disabled={isDisabled}>load more</button>
        </div>
      </section>
    </CategoryContext.Provider>
  )
} 

export default Gallery;