import { ICONS } from "@/assets";
import React, { useState } from "react";
import {
  DropdownWrapper,
  DropdownList,
  DropdownItem,
  DropdownHeader,
  DropdownImage,
} from "./style";

interface DropdownProps {
  options: string[];
  onOptionSelect: (option: string) => void;
  id?: string;
}

export const Dropdown = ({ options, id, onOptionSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (option: string) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownHeader id={id} onClick={() => setIsOpen(!isOpen)}>
        <DropdownImage
          open={isOpen}
          src={ICONS.DocumentArrowDown}
          alt="icone documento sela pra baixo"
        />
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem
              key={option}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
