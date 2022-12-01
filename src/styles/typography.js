import styled, { css } from "styled-components";
import BaseTitle from "../components/BaseTitle";



export const StyledTitle = styled(BaseTitle)`
  font-weight: bold;
  ${({fontSize}) => {

    switch (fontSize) {
      case "h1":
        return css`
            font-size: 2rem;
        `;
      case "h2":
        return css`
            font-size: 1.6rem;
        `;
      case "h3":
        return css`
            font-size: 1.6rem;
        `;  
      case "h4":
        return css`
            font-size: 1.4rem;
        `;    
    }
  }}
`
