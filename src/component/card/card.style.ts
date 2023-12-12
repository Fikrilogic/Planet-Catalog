import styled from "styled-components";
import { COLORS } from "../../shared";

const CardContainer = styled.div<{ $maxWidth: string; $maxHeight: string }>`
  border: 4px solid ${COLORS.black};
  border-radius: 16px;
  height: auto;
  background-color: ${COLORS.white};
  max-width: ${(props) => props.$maxWidth};
`;

const CardPhoto = styled.div`
  width: 100%;
  height: 50%;

  img {
    height: 100%;
    width: 100%;
  }
`;

const CardContent = styled.div`
    width: 100%;
    height:  auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap:  5px;

    h4{
        font-size: 1.2rem;
        color: ${COLORS.black};
    }
`;

const CardDetailContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px;
`

const CardRow = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`

const CardTitleText =  styled.p`
    font-size: 12px;
`

const CardText =  styled.p`
    font-size:  12px;
    color: ${COLORS.black}
`

export { CardContainer, CardPhoto, CardContent, CardDetailContent, CardRow,  CardText, CardTitleText };
