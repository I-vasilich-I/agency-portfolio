import debounce from "lodash.debounce";
import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../contextProviders/contextProviders";
import { IInputRadioOptionsProps } from "../../types";
import InputRadioOption from "../inputRadioOption/inputRadioOption";

const InputRadioOptions = ({ options }: IInputRadioOptionsProps): JSX.Element => {
  const { category, setCategory } = useContext(CategoryContext);
  const [rOptions, setROptions] = useState(options);

  const debouncedSeCategory = debounce(setCategory, 100);

  useEffect(() => {
    setROptions(prev => prev.map((el) => {
      el.checked = el.value === category;
      return el;
    }))
  }, [category, options])

  return (
  <>
    {rOptions.map((elem) => (
      <InputRadioOption {...elem} key={elem.id} setValue={debouncedSeCategory} />
    ))}
  </>
)};

export default InputRadioOptions;