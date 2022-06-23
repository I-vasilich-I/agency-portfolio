import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { CategoryContext } from '../../contextProviders/contextProviders';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Card from '../card/Card';
import CustomSelect from '../../elements/customSelect/CustomSelect';
import InputRadioOptions from '../../elements/inputRadioOptions/inputRadioOptions';
import { RADIO_OPTIONS, SELECT_OPTIONS, CARDS } from '../../constants';
import './Gallery.scss';

type TCard = typeof CARDS[0];

const Gallery = () => {
  const [cards, setCards] = useState(CARDS.slice(0,9));
  const [shownCards, setShownCards] = useState<TCard[]>([]);
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
    setShownCards(cards.filter((el) => category === 0 || el.categoryId === category));
  }, [category, cards])

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
              <Card key={id} name={name} category={category} categoryId={categoryId} img={img} setCategory={setCategory} />
            )}
          </div>
          <button className="button" onClick={handleClick} disabled={isDisabled}>load more</button>
        </div>
      </section>
    </CategoryContext.Provider>
  )
} 

export default Gallery;