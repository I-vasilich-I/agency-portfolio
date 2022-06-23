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

export type { IInputRadioOptionProps, IInputRadioOptionsProps};