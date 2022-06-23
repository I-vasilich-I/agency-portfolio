/* based on https://css-tricks.com/striking-a-balance-between-native-and-custom-select-elements/
  I've made this custom select few months before, on game-store project, 
  there's PR link: https://github.com/I-vasilich-I/game-store/pull/8 
*/
import { ChangeEvent, useRef, useState, useEffect, memo, useContext } from "react";
import classnames from "classnames";
import arrow from '../../assets/images/triangle.svg';
import { CategoryContext } from "../../contextProviders/contextProviders";
import "./CustomSelect.scss";

interface IProps {
  options: string[];
  selectedOption?: number;
  label: string;
  dispatcher?: ((value: number) => void) | null;
}

const CustomSelect: React.FC<IProps> = ({ options, selectedOption = -1, label }) => {
  const { category, setCategory } = useContext(CategoryContext);
  const defaultOption = options[category] || selectedOption === -1 ? options[0] : options[selectedOption];
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultOption);
  const nativeSelectRef = useRef<HTMLSelectElement>(null);
  const customSelectRef = useRef<HTMLDivElement>(null);
  const customSelectClassName = classnames("select__custom", {
    "is-active": isActive,
  });

  const handleOpen = () => {
    setIsActive((prevValue) => !prevValue);
  };

  const handleClick = (option: string) => {
    setSelectedValue(option);
    const newCategory = options.indexOf(option);
    setCategory(newCategory);

    const nativeSelect = nativeSelectRef.current;

    if (nativeSelect) {
      nativeSelect.value = option;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    const newCategory = options.indexOf(e.target.value);
    setCategory(newCategory);
  };

  const handleOutsideClick = (e: Event) => {
    const element = e.target as HTMLElement;
    const didClickOutside = customSelectRef.current && !customSelectRef.current.contains(element);
    if (didClickOutside && isActive) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  });

  useEffect(() => {
    setSelectedValue(options[category])
  }, [category, options])

  return (
    <div className="select">
      {label ? (
        <span className="select__label" id="job-label">
          {label}
        </span>
      ) : null}
      <div className="select__wrapper">
        <select
          ref={nativeSelectRef}
          className="select__native"
          value={selectedValue}
          aria-labelledby="job-label"
          onChange={handleChange}
        >
          {options.map((elem) => (
            <option key={elem} value={elem}>
              {elem}
            </option>
          ))}
        </select>
        <div
          ref={customSelectRef}
          className={customSelectClassName}
          aria-label="custom-select"
          aria-hidden={isActive}
          onClick={handleOpen}
        >
          <div className="select__custom-trigger">
            {selectedValue}
            <img src={arrow} alt="arrow" className="arrow" width={10} height={6}/>
          </div>
          <div className="select__custom-options">
            {options.map((elem) => (
              <div key={elem} className="select__custom-option" data-value={elem} onClick={() => handleClick(elem)}>
                {elem}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CustomSelect);
