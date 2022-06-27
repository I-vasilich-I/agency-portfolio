import classNames from "classnames";
import { useContext } from "react";
import { MOBILE_BRAKE_POINT, RADIO_OPTIONS, SELECT_OPTIONS } from "../../constants";
import CategoryContext from "../../contextProviders/contextProviders";
import CustomSelect from "../../elements/customSelect/CustomSelect";
import InputRadioOptions from "../../elements/inputRadioOptions/inputRadioOptions";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Category = () => {
  const { setCategory } = useContext(CategoryContext);
  const { width } = useWindowDimensions();
  const isMobile = width <= MOBILE_BRAKE_POINT;
  const fieldsetClassName = classNames("categories", { "categories--select": isMobile });
  return (
    <fieldset id="category" className={fieldsetClassName}>
      {isMobile ? (
        <CustomSelect options={SELECT_OPTIONS} label="" dispatcher={setCategory} />
      ) : (
        <InputRadioOptions options={RADIO_OPTIONS} />
      )}
    </fieldset>
  );
};

export default Category;
