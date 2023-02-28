import styled from "styled-components";

export const ContactForm = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    // box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

    h2 {
        margin-top: 20px;
        text-align: left;
    }

    label {
        padding: 15px 0px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: left;
        width: 400px;
        width: 100%
        margin: 50px auto;
        padding: 40px;
        border: 1px solid grey;
        border-radius: 10px;

        @media (max-width: 768px) {
            margin-right: 0px;
            width: 80%;
        }
            
        input, textarea {
            margin: 10px 0;
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border: 1px solid grey;
            border-radius: 5px;
        }

        input[type="submit"] {
            margin: 10px 0;
            width: 15%;
            padding: 10px;
            font-size: 16px;
            border: 1px solid grey;
            border-radius: 50px;
            height: 35px; 
            background-color: transparent;
            transition: background-color 0.2s ease-in-out;

            &:hover {
                background-color: lightblue; 
                cursor: pointer;
              }
          }
    }    
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`
export const ContactWrapper = styled.div`
    // display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
`