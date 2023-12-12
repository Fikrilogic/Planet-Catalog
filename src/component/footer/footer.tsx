import React from "react";
import { FooterContainer, FooterText } from "./footer.style";

interface FooterProps{

}

const Footer: React.FC<FooterProps> = ({}) => {
    return(
        <FooterContainer>
            <FooterText>
                Website for Planet Catalog
            </FooterText>
        </FooterContainer>
    )
}

export default Footer