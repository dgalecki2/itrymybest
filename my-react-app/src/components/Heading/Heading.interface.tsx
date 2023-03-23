export interface HeadingInterface {
  children: React.ReactNode;
  className?: string;
  level: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface UseHeadingInterface {
  className: string;
  level: number;
}
