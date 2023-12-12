import styled from "styled-components";
import {COLORS} from  '../../shared/index'

const FooterContainer =  styled.footer`
    background-color: ${COLORS.black};
    padding: 2em;
    min-height: 3rem;
    max-height:  7rem;
    display: flex;
    justify-content: center;
`

const  FooterText = styled.h2`
    color: ${COLORS.white}
`

export {
    FooterContainer,
    FooterText
}