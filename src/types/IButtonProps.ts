import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  padding?: string;
  className?:string
  maxWidth?:string
}