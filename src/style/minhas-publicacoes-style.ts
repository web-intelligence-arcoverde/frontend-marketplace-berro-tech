import {BREAKPOINTS, COLORS} from '@/common';
import styled from 'styled-components';
import {CardButton} from '@/components/atoms/Button/style';

export const ContainerMypublication = styled.div<{empty: boolean}>`
  display: flex;
  width: 100%;
  align-items: ${(props) => (props.empty ? 'center' : 'flex-start')};
  justify-content: space-between;
  padding: 50px 100px;
  #dropdown {
    border: 1.5px solid ${COLORS.light._02};
    padding: 8px 10px;
    border-radius: 5px;
    height: 48px;
  }
  .tabs {
    border-bottom: none;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 100%;
    padding: unset;
    margin-top: 0;
    flex-direction: column;
    margin-bottom: 20px;
    position: relative;
    .tabs {
      padding: 0;
      border-radius: 5px;
      height: 48px;
      width: 90%;
      border: 1.5px solid ${COLORS.light._02};
      .tab {
        width: 100%;
        text-align: center;
        font-size: 14px;
      }
      .active {
        border: none;
      }
    }
  }
`;
export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  #first-add {
    @media (max-width: ${BREAKPOINTS.sm}) {
      display: none;
    }
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    margin-bottom: 34px;
    width: 100%;
  }
`;

export const CardProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;

  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 100% !important;
    justify-content: center;
    gap: 30px;
    margin-bottom: 120px;
    margin-top: 10px;
  }
`;

export const SectionProducts = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 32px;
  align-items: end;
  width: 100%;
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding-left: 0;
  }
`;

export const ButtonFixedMobile = styled(CardButton)`
  display: none;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: block;
    color: ${COLORS.light._05};
    background-color: ${COLORS.sub_brand._02};
    width: 90%;
    margin: 0 auto;
  }
`;

export const CardFixedMobile = styled.div`
  display: none;
  @media (max-width: ${BREAKPOINTS.sm}) {
    background-color: ${COLORS.brand_light._04};
    display: flex;
    border-top: solid 2px ${COLORS.light._02};
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    padding: 28px 0;
  }
`;

export const ContainerTabs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: solid 1.5px ${COLORS.light._02};
  max-width: 900px;
  @media (max-width: ${BREAKPOINTS.md}) {
    border-bottom: none;
  }
`;
// **********************************   Style da página de Id   *************************************

export const Content = styled.div`
  display: flex;
  padding: 44px 100px;
  gap: 32px;
  background-color: ${COLORS.brand_light._04};
  @media (max-width: ${BREAKPOINTS.lg}) {
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: ${BREAKPOINTS.sm}) {
      gap: 0;
    }
  }
`;

export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  gap: 32px;
`;
