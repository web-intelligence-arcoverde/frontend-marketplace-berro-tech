import { Accordion, Dropdown,BussinessFilter } from "@/components"
import { Container, BadgeContainer, Badge, HeaderFilterMobile, FilterButtonContainer, FiltersHeaderContainer, FiltersIconTitle, FiltersIconTitleHeader, ArrowImage, CleanFilterButton, ApplyFilterButton } from "./style"
import { ICONS, } from "@/assets"
import Image from "next/image"
import { BusinessFiltersMock, DropdownMock } from '@/mock'
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { Modal } from "@/components/atoms/Modal"
import { useState } from "react"

export const BussinessAside = () => {
  const [filters, setFilters] = useState<string[]>();
  const [isOpen, setIsOpen] = useState(false);
  const IsDesktop = useMediaQuery('md')
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      {IsDesktop ?
        BusinessFiltersMock.map((item, index) => (
          <Accordion key={`${item.title}${index}`} icon={item.icon} title={item.title} >
            <BussinessFilter data={item} returnFilters={(e)=>setFilters(e)} />
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
            {[1, 3, 2, 4, 5, 4, 7, 4, 7].map((item, index) => <Badge key={index}>Paraiba</Badge>)}
          </BadgeContainer>
          <Modal isOpen={isOpen} handleToggle={handleToggle}>
            <HeaderFilterMobile>
              <h3>Filtros</h3>
              <FilterButtonContainer>
                <CleanFilterButton>
                  Limpar
                </CleanFilterButton>
                <ApplyFilterButton>
                  Aplicar
                </ApplyFilterButton>
              </FilterButtonContainer>
            </HeaderFilterMobile>
            {BusinessFiltersMock.map((item, index) => (
              <Accordion key={`${item.title}${index}`} icon={item.icon} title={item.title} >
                <BussinessFilter returnFilters={(e)=>setFilters(e)} data={item} />
              </Accordion>
            ))}
          </Modal>
        </>
      }
    </Container>
  )
}
