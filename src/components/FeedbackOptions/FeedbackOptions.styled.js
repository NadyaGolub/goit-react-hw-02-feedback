import styled from "styled-components";

export const List = styled.ul`
display: flex;
gap: 10px;
justify-content: center;

`;

export const Btn = styled.button`
background-color: #00BFFF;
  color: #000000;
  font-family: inherit;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.2;
  text-align: center;
  cursor: pointer;
  padding: 6px 6px;
  min-width: 70px;
  min-height: 20px;
  border-radius: 4px;
  border: 1px solid transparent;
  margin-left: auto;
  margin-right: auto;
  display: block;
  transition-property: color, background-color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover
   {
    color: black;
    background-color: #0000FF;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }

`;