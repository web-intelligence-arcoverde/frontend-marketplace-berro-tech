import { ICONS } from "@/assets";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { Container, InputSearchBar, InputContainer, CheckboxContainer } from "./style";
import { Checkbox } from "@/components/atoms";
import { useDispatch } from "react-redux";
import { allFilterSelected, deleteFilterSelected } from "@/store/reducer/product/actions";

interface BussinessfilterProps {
  data: any;
  returnFilters: (e: string[]) => void;
}

export const BussinessFilter = ({ data, returnFilters }: BussinessfilterProps) => {

  const [checkedArray, setCheckedArray] = useState<string[]>([]);
  const [filteredData, setFilterData] = useState<[]>(data.filters);

  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const newData = data?.filters?.filter((item: string) => item?.toLowerCase()?.includes(event?.target?.value?.toLowerCase()));
    setFilterData(newData);
  };

  const handleChangeFilter = (e: {
    name: string;
    value: boolean
  }) => {
    console.log(e)
    if (e.value) {
      setCheckedArray((prevArray) => [
        ...prevArray,
        e.name
      ]);
      dispatch(allFilterSelected(e.name))
    } else {
      setCheckedArray((prevArray) => prevArray.filter((item) => item !== e.name));
      dispatch(deleteFilterSelected(e.name.toString()));
    }
    return e;
  };



  return (
    <Container>
      <InputContainer>
        <Image src={
          ICONS.Search
        }
          alt="Icone de pesquisa" />
        <InputSearchBar
          type={"text"}
          placeholder="Buscar"
          onChange={handleChange} />
      </InputContainer>
      <CheckboxContainer> {
        filteredData?.map((item: string) => (
          <Checkbox key={item}
            onCheck={
              (e) => handleChangeFilter(e)
            }
            name={item} />
        ))
      } </CheckboxContainer>
    </Container>
  );
};
