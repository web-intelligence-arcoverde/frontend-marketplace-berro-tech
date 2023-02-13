import { ICONS } from "@/assets"
import { ProductCard, Tabs } from "@/components"
import { BussinessHighlightProductMock, tabs } from "@/mock"
import Image from "next/image"
import { ChangeEvent, FormEvent, useState } from "react"
import { Container, SearchSideBar, SearchResponseContainer, InputSearchBar, InputContainer } from "./style"

export const MainSearch = () => {
  const [form, setForm] = useState({
    mainSearch: '',
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({ mainSearch: '' });
    console.log('Formulário enviado', form);
  };

  return (
    <Container>
      <SearchSideBar >
        <h2>Encontre <br />o que procura</h2>
        <InputContainer onSubmit={submitForm}>
          <Image src={ICONS.Search} alt="Icone de pesquisa" />
          <InputSearchBar
            name={"mainSearch"}
            type={"text"}
            placeholder="Buscar"
            onChange={handleChange}
          />
        </InputContainer>
        <Tabs tabs={tabs} />
      </SearchSideBar>
      <SearchResponseContainer >
        {BussinessHighlightProductMock.slice(2).map((item, index) => (
          <ProductCard
            key={`${item.name} ${index}`}
            photo={item.photo}
            breed={item.breed}
            quantity={item.quantity}
            name={item.name}
            city={item.city}
            state={item.state}
            country={item.country}
            sex={item.sex}
            age={item.age}
            rank={item.rank}
          />
        ))}
      </SearchResponseContainer >
    </Container>
  )
}
