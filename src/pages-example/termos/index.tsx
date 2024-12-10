import { Footer, Header } from '@/components'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { Container, Main } from '@/style'
import { Content, ContentContainer, ContentSection, ContentTitleContainer, TitleLink, TitleSection } from '@/style/termos-style'
import React, { useState } from 'react'

const Termos = () => {
  const isDesktop = useMediaQuery('md')
  const [titleName, setTitleName] = useState<string>()
  const contentTitleMock = [
    {
      name: '1 Titulo do termo',
      link: 'content1',
      description: 'Malesuada neque purus lobortis porta malesuada. Est tellus at mattis erat condimentum. Dui malesuada aenean pharetra sed. Magna ultrices interdum etiam eget dictum augue quam nec. Vel lacus egestas at mauris posuere vulputate varius ullamcorper. Dignissim sit donec ut adipiscing vel'
    },
    {
      name: '2 Titulo do termo',
      link: 'content2',
      description: 'Malesuada neque purus lobortis porta malesuada. Est tellus at mattis erat condimentum. Dui malesuada aenean pharetra sed. Magna ultrices interdum etiam eget dictum augue quam nec. Vel lacus egestas at mauris posuere vulputate varius ullamcorper. Dignissim sit donec ut adipiscing vel'
    },
    {
      name: '3 Titulo do termo',
      link: 'content3',
      description: 'Malesuada neque purus lobortis porta malesuada. Est tellus at mattis erat condimentum. Dui malesuada aenean pharetra sed. Magna ultrices interdum etiam eget dictum augue quam nec. Vel lacus egestas at mauris posuere vulputate varius ullamcorper. Dignissim sit donec ut adipiscing vel'
    },
    {
      name: '4 Titulo do termo',
      link: 'content4',
      description: 'Malesuada neque purus lobortis porta malesuada. Est tellus at mattis erat condimentum. Dui malesuada aenean pharetra sed. Magna ultrices interdum etiam eget dictum augue quam nec. Vel lacus egestas at mauris posuere vulputate varius ullamcorper. Dignissim sit donec ut adipiscing vel'
    },
    {
      name: '5 Titulo do termo',
      link: 'content5',
      description: 'Malesuada neque purus lobortis porta malesuada. Est tellus at mattis erat condimentum. Dui malesuada aenean pharetra sed. Magna ultrices interdum etiam eget dictum augue quam nec. Vel lacus egestas at mauris posuere vulputate varius ullamcorper. Dignissim sit donec ut adipiscing vel'
    },
  ]

  return (
    <Container>
      <Header />
      <Main>
        <TitleSection>
          <h1>Termos gerais de uso</h1>
          <p>Última atualização:{!isDesktop && <br />} 30/03/2023</p>
        </TitleSection>
        <ContentSection>
          <ContentTitleContainer>
            {contentTitleMock.map((item) => (
              <TitleLink
                key={item.name}
                href={`#${item.link}`}
                isActive={item.name === titleName}
                onClick={() => setTitleName(item.name)}>
                {item.name}
              </TitleLink>
            ))}


          </ContentTitleContainer>
          <ContentContainer>
            {contentTitleMock.map((item) => (
              <Content id={item.link} key={item.name}>
                <h6>{item.name}</h6>
                <p>
                  {item.description}
                </p>
                <ul>
                  <li> At enim eget urna amet urna arcu </li>
                  <li> Nunc sit imperdiet elit urna vestibulum </li>
                  <li>  Amet molestie platea libero lorem quam faucibus </li>
                  <li> Viverra diam justo sit accumsan bibendum volutpat </li>
                  <li> Mus molestie commodo volutpat feugiat quisque mauri </li>
                </ul>
              </Content>
            ))}
          </ContentContainer>
        </ContentSection>
      </Main>
      <Footer />
    </Container>
  )
}

export default Termos