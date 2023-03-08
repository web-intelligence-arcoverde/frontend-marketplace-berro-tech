import { Accordion } from "@/components/atoms"
import { BussinessFilter } from "@/components/molecules"
import { Container, BadgeContainer, Badge, ButtonModal, HeaderFilterMobile, FilterButtonContainer, FiltersHeaderContainer, FiltersIconTitle, FiltersIconTitleHeader, ArrowImage, CleanFilterButton, ApplyFilterButton } from "./style"
import { ICONS, } from "@/assets"
import Image from "next/image"
import { BusinessFiltersMock } from '@/mock'
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { Modal } from "@/components/atoms/Modal"
import { useState } from "react"

export const BussinessAside = () => {
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
            <BussinessFilter />
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
            <ButtonModal>
              <Image src={ICONS.DocumentArrowDown} alt='icone documento sela pra baixo' />
            </ButtonModal>
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
                <BussinessFilter />
              </Accordion>
            ))}
          </Modal>
        </>
      }
    </Container>
  )
}
