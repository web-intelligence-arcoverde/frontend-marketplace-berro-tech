/* eslint-disable @typescript-eslint/no-unused-vars */
import { Accordion, Dropdown, BussinessFilter, ModalFilters } from "@/components"
import { Container, BadgeContainer, Badge, HeaderFilterMobile, FilterButtonContainer, FiltersHeaderContainer, FiltersIconTitle, FiltersIconTitleHeader, ArrowImage, CleanFilterButton, ApplyFilterButton } from "./style"
import { ICONS, } from "@/assets"
import Image from "next/image"
import { BusinessFiltersMock, DropdownMock } from '@/mock'
import { useMediaQuery } from "@/hooks/useMediaQuery"

import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { clearFiltersSelecteds } from "@/store/reducer/product/actions"
import { useAppSelector } from "@/hooks/useSelectorHook"

export const BussinessAside = () => {
  const [filters, setFilters] = useState<string[]>();
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery('md')
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch()
  const lastFilters = useAppSelector((state) => state.product.allFilterSelected)
  return (
    <Container>
      {isDesktop ?
        BusinessFiltersMock.map((item, index) => (
          <Accordion key={`${item.title}${index}`} icon={item.icon} title={item.title} >
            <BussinessFilter data={item} />
          </Accordion>
        ))

        :
        <>
          <FiltersHeaderContainer>
            <FiltersIconTitleHeader onClick={() => setIsOpen(true)}>
              <FiltersIconTitle>
                <Image src={ICONS.Settings} alt='icone de configuração' />
                <p>Filtros</p>
              </FiltersIconTitle>
              <ArrowImage isOpen={isOpen}>
                <Image
                  src={ICONS.ArrowRight}
                  alt="seta do accordion"
                />
              </ArrowImage>
            </FiltersIconTitleHeader>
            <Dropdown
              options={DropdownMock}
              onOptionSelect={(option: string): void => { }} />

          </FiltersHeaderContainer>
          <BadgeContainer>
            {lastFilters?.map((item: string, index: number) => <Badge key={index}>{item}</Badge>)}
          </BadgeContainer>
          <ModalFilters isOpen={isOpen} handleToggle={handleToggle}>
            <HeaderFilterMobile>
              <h3>Filtros</h3>
              <FilterButtonContainer>
                <CleanFilterButton onClick={() => { dispatch(clearFiltersSelecteds()) }}>
                  Limpar
                </CleanFilterButton>
                <ApplyFilterButton>
                  Aplicar
                </ApplyFilterButton>
              </FilterButtonContainer>
            </HeaderFilterMobile>
            {BusinessFiltersMock.map((item, index) => (
              <Accordion key={`${item.title}${index}`} icon={item.icon} title={item.title} >
                <BussinessFilter data={item} />
              </Accordion>
            ))}
          </ModalFilters>
        </>
      }
    </Container>
  )
}
