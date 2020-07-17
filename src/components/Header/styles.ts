import styled, { css } from 'styled-components';

interface ButtonProps {
  isPageActive: boolean;
}

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  img {
    width: 200px;
    margin-bottom: 30px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 400px;
  }
`;

export const Button = styled.button<ButtonProps>`
  font-weight: 500;
  color: #fff;
  background: transparent;
  padding-bottom: 10px;
  border: none;
  border-bottom: #1a3339 2px solid;

  ${props =>
    props.isPageActive &&
    css`
      border-bottom: #e6b956 2px solid;
      color: #e6b956;
    `}
`;
