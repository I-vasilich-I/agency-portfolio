import { ChangeEvent } from "react";
import classNames from "classnames";
import { IInputRadioOptionProps } from "../../types";
import "./inputRadioOption.scss";

const InputRadioOption = ({ id, value, checked, label, name, setValue }: IInputRadioOptionProps): JSX.Element => {
  const checkedClass = classNames('radio__label', {
    'checked': checked
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue?.(+e.target.value);
  };

  return (
    <label htmlFor={id} className={checkedClass}>
      <input
        className="radio__input"
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      {label}
    </label>
  );
};

export default InputRadioOption;