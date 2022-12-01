import styled from "styled-components";


export const FormContainer = styled.div`

        width: 100%;
        max-width: 370px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2.5rem;
        padding: 2.5rem 1rem;
        background-color: var(--grey-3);
        border-radius: 4px;

        form{
            
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            align-items: flex-start;
      

            button{
                margin-top: 2rem;
            }
        }

        label{
            font-size: 1.4rem;
        }

        input{
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1rem;
            font-size: 1.6rem;
            font-weight: 400;
            background-color: var(--grey-2);

        }

        input:focus{
            color: var(--grey-0);
        }

        select{
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1rem;
            font-size: 1.6rem;
            font-weight: 400;
            border-radius: 4px;
            background-color: var(--grey-2);
            color: var(--grey-1);
        }

        option{
            padding: 2rem;
            font-size: 1.6rem;
        }

        small{
            font-size: 1.6rem;
        }

        p{
            font-size: 1.2rem;
            color: var(--grey-1)
        }
`