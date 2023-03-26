import { ICONS } from "@/assets";
import { DropdownMock } from "@/mock";
import Image from "next/image";
import React, { useState } from "react";
import {
  CardSelectProduct,
  ContainerSelectProduct,
  SelectProduct,
} from "./style";

export const SelectOrdenation = () => {
  const [select, setSelect] = useState<string>("Ordenar Por");
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenSelect = () => {
    setOpen(!open);
  };
  const handleSelect = (event: string) => {
    setSelect(event);
    setOpen(!open);
  };
  return (
    <ContainerSelectProduct>
      <SelectProduct
        open={open}
        onClick={handleOpenSelect}
        placeholder="Orderna por"
      >
        <span>{select}</span>
        <Image src={ICONS.Up} alt="direção da seta" />
      </SelectProduct>
      {open && (
        <CardSelectProduct open={open}>
          {DropdownMock.map((item, index) => (
            <span
              onClick={() => {
                handleSelect(item);
              }}
              key={index}
            >
              {item}
            </span>
          ))}
        </CardSelectProduct>
      )}
    </ContainerSelectProduct>
  );
};
