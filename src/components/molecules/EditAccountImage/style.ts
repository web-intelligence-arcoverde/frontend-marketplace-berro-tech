import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100% !important;
    height: 100%; !importante
    object-fit: cover;
  }

`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    display: none;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Button = styled.button`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;
