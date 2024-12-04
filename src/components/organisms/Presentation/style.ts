import styled from 'styled-components';
import { breakpoints, colors } from '@/common';

export const Intro = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  height: 600px;
  background: linear-gradient(
      95deg,
      #f8f3df 17.31%,
      rgba(248, 243, 223, 0) 95.98%
    ),
    linear-gradient(80.03deg, #f8f3df 12.55%, rgba(248, 243, 223, 0) 37.36%),
    url('https://berro-tech-bucket.s3.sa-east-1.amazonaws.com/upload/c99caa19-5262-4223-bb76-b7bd6fbecb0f.webp');
  background-size: cover;
  background-position: center;

  @media (max-width: ${breakpoints.md}) {
    background: linear-gradient(
        141.23deg,
        #f8f3df 0%,
        rgba(248, 243, 223, 0) 77.79%
      ),
      linear-gradient(166.65deg, #f8f3df 37.3%, rgba(248, 243, 223, 0) 90.44%),
      url('https://berro-tech-bucket.s3.sa-east-1.amazonaws.com/upload/c99caa19-5262-4223-bb76-b7bd6fbecb0f.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 622px;
  }
`;

export const DescriptionPresentation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 100px;
  width: 30%;
  z-index: 5;

  h1,
  p {
    width: 440px;
  }
  h6 {
    width: fit-content;
    padding: 12px 20px;
    color: ${colors.sub_brand._02};
    font-size: 16px;
    font-weight: 600;
    background-color: ${colors.opacity.blue_05};
    border-radius: 5px;
  }
  h1 {
    color: ${colors.brand_dark._01};
    font-weight: 800;
    font-size: 40px;
    line-height: 60px;
  }
  p {
    color: ${colors.brand_dark._02};
    font-weight: 800px;
    font-size: 18px;
    line-height: 36px;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    padding: 0 20px 100px 20px;
    margin-bottom: 100px;
    h1,
    p {
      width: 100%;
    }
    h1 {
      font-size: 28px;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: 0.02em;
    }
    p {
      font-weight: 450;
      font-size: 16px;
    }
  }
`;
