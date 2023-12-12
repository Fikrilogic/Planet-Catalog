import styled from "styled-components";
import { COLORS } from "../../shared/index";

const AppbarHeader = styled.header`
  background-color: ${COLORS.black};
  padding: 2em;
  min-height: 4rem;
`;

const AppbarColumn = styled.div`
  display: flex;
  flex-direction: row;
`;

const BurgerButton = styled.button<{ $isopen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: 30px;
    height: 4px;
    background: #FFFFFF;
    transition: all 0.3s ease;

    &:first-child {
      transform: ${(props) => (props.$isopen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.$isopen ? "0" : "1")};
    }

    &:last-child {
      transform: ${(props) => (props.$isopen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export { AppbarHeader, BurgerButton, AppbarColumn };
