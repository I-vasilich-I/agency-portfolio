interface IInputRadioOptionProps {
  id: string;
  value: number;
  checked: boolean;
  label: string;
  name?: string;
  setValue?: (value: number) => void;
}

interface IInputRadioOptionsProps {
  options: IInputRadioOptionProps[];
  setValue?: React.Dispatch<React.SetStateAction<number>>;
}

interface ICard {
  id: string;
  name: string;
  category: string;
  categoryId: number;
  img: string;
  toDelete?: boolean;
}

export type { IInputRadioOptionProps, IInputRadioOptionsProps, ICard };
