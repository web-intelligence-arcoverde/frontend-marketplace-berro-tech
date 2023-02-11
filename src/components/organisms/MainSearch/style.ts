import { COLORS } from '@/common';
import { InputUser } from "@/components"
import styled from 'styled-components';

export const Container = styled.section`
  background: ${COLORS.light._05};
  width: 100%;
  padding: 160px 100px;
  display: flex;
  gap: 56px;
  @media (max-width:1010px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`;
export const SearchSideBar = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  h2{
    font-weight: 600;
    font-size: 32px;
    color: ${COLORS.brand_dark._01};
  }
  .tabs{
    width: 100%;
    margin-top: 32px;
    .tab{
      cursor: pointer;
      font-weight: 400;
      font-size: 16px;
      color: ${COLORS.gray._03};
      padding: 16px 24px;
    }
    .active{
      color:${COLORS.dark._03};
      background: ${COLORS.sub_brand._03};
      border-left: 3px solid ${COLORS.sub_brand._02};
    }
  }


`;
export const SearchResponseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px 16px;
  @media (max-width:1416px) {
    flex-shrink: 0;
  }
  @media (max-width:1010px) {
    overflow-x: scroll;
    width: 100%;
    flex-wrap: nowrap;
  }
`;
export const InputSearchBar = styled.input`
  border: none;
  width: 100%;
  margin-left: 20px;
`;
export const InputContainer = styled.form`
  display: flex;
  padding: 10px;
  margin-top: 32px;
  border-bottom: solid 1px ${COLORS.light._02};
`;
