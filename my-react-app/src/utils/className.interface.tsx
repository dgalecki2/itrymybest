export interface RenderClassNameInterface {
  constant: string;
  variable: VariableInterface;
}

export interface VariableInterface {
  [key: string]: boolean;
}
