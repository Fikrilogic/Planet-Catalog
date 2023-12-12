import styled from "styled-components";
import { COLORS } from "../../shared";

const PlanetContainer = styled.div`
    height: 100vw;
    background-color: ${COLORS.primary};
    padding: 0px 16px;
    
    div{
        width: 100%;
        padding:  .5rem;

        ul{
            display: flex;
            flex-direction:  row;
            justify-content: start;
            flex-wrap: wrap;
            gap:  16px;

            li{
                margin: 0px  8px;
                list-style: none;
            }
        }
    }
`

export {
    PlanetContainer
}