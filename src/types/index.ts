import { ReactNode } from "react";

export interface InputProps {
  type: string;
  onChange: any;
  value: string;
  placeholder: string;
  name: string;
  required?: boolean;
}
export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  padding?: string;
}
