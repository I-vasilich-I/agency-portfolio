interface IInputRadioOptionProps {
  id: string;
  value: number;
  checked: boolean;
  label: string;
  name?: string;
  setValue?: React.Dispatch<React.SetStateAction<number>>;
}

interface IInputRadioOptionsProps {
  options: IInputRadioOptionProps[];
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export type { IInputRadioOptionProps, IInputRadioOptionsProps};