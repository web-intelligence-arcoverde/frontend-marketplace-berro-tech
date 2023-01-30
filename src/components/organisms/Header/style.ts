import styled from 'styled-components';

export const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 24px 30px 24px 50px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  li {
    img {
      width: 42px;
    }
  }
`;
export const CardAvatar = styled.div`
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
    width: auto;
    border-radius: 10px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
