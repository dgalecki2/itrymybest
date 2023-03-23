export interface ButtonInterface {
  className: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  type?: "button" | "submit";
}

export interface UseButtonInterface {
  className: string;
}
