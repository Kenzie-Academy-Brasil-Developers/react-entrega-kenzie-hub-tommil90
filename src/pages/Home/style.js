import styled from "styled-components";


export const StyledMainHome = styled.main`
     display: flex;
     flex-direction: column;
     gap: 2rem;
     justify-content: center;
     align-items: center;
     padding: 2rem 0;

     & > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      button{
         font-size: 1.8rem;
      }
     }

     h2{
        font-size: 2rem;

     }

     p{
        font-size: 1.6rem;
     }
`

export const StyledRegisterTechModal = styled.div`

      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 0;

      & > div:first-child{
         width: 100%;
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 0 1rem;
      }
`