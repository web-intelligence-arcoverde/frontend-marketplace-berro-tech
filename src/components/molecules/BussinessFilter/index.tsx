import { ICONS } from '@/assets'
import React, { ChangeEvent, useEffect, useState } from 'react'
import Image from "next/image"
import { Container, InputSearchBar, InputContainer, CheckboxContainer } from "./style"
import { Checkbox } from '@/components/atoms'

interface BussinessfilterProps {
  data:any;
  returnFilters:(e:string[])=>void
}

export const BussinessFilter = ({ data, returnFilters }: BussinessfilterProps) => {
  const [checkedArray, setCheckedArray] = useState<string[]>([]);
  const [filteredData, setFilterData] = useState<[]>(data.filters);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newData = data?.filters?.filter((item: string) => (
      item?.toLowerCase()?.includes(event?.target?.value?.toLowerCase())
    ))
    setFilterData(newData)
  };
  const handleCheck = (e: { name: string, value: boolean }) => {
    if (e.value) {
      setCheckedArray(prevArray => [...prevArray, e.name])
    } else {
      setCheckedArray(prevArray => prevArray.filter(item => item !== e.name))
    }
    return e
  }
  
  useEffect(()=>{
    returnFilters(checkedArray)
  },[checkedArray,returnFilters])



  return (
    <Container>
      <InputContainer >
        <Image src={ICONS.Search} alt="Icone de pesquisa" />
        <InputSearchBar
          name={"mainSearch"}
          type={"text"}
          placeholder="Buscar"
          onChange={handleChange}
        />
      </InputContainer>
      <CheckboxContainer>
        {filteredData?.map((item: string) => (
          <Checkbox key={item} onCheck={(e) => handleCheck(e)} name={item} />
        ))}
      </CheckboxContainer>
    </Container>
  )
}
