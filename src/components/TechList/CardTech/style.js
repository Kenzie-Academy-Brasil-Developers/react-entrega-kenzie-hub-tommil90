import styled from "styled-components";

export const StyledCard = styled.li`

    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: var(--grey-4);
    border-radius: 4px;



    & > div {

        width: 35%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p{
        font-size: 1.2rem;
        color: var(--grey-1);
    }

    &:hover{
        background-color: var(--grey-3);
    }
`