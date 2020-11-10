import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    * {
    box-sizing: border-box;
    }

    body {
        margin: 0;
        margin-top: 60px;
        padding: 0;
        font-size: 14px;
    }

    input {
        border: none;
        outline: none;
    }
    
    button {
        all: unset;
        cursor: pointer;
    }
`;
export default GlobalStyled;