import styled, { css } from "styled-components";


export const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: .25s; 
    font-weight: 600;
    color: var(--grey-0);

    /* &:hover{
        filter: brightness(1.2);   
    } */
    ${({buttonSize}) => {
        switch(buttonSize){
            case "default":
                return css`
                   
                    width: 100%;
                    height: 38.5px;
                     
                `
            case "big":
                return css`
                    padding: 0 2.5rem;
                    height: 52px;
                ` 
            case "small":
                return css`
                    width: 80px;
                    height: 32px;
                    
                `
            case "vSmall":
                return css`
                    width: 33px;
                    height: 32px;
                    
                `           
        }
    }}
    ${({buttonStyle}) => {
        switch(buttonStyle){
            case "solidPrimary":
                return css`
                    background: var(--color-primary);
                    border-color: var(--color-primary);
                    &:hover{
                        background: var(--color-primary-focus);
                        border-color: var(--color-primary-focus);   
                    }
                `  
                
            case "outline1":
                return css`
                    background: var(--grey-1);
                    border-color: var(--grey-1);
                    &:hover{
                        background: var(--color-primary-focus);
                        border-color: var(--color-primary-focus);   
                    }
                `    
            case "outline2":
                return css`
                    background: var(--grey-3);
                    border-color: var(--grey-3);
                    &:hover{
                        background: var(--color-primary-focus);
                        border-color: var(--color-primary-focus);   
                    }
                `    
            
        }
    }}
    
`