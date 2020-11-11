import { createGlobalStyle } from "styled-components";
import theme from "./Theme";

const GlobalStyled = createGlobalStyle`
    * {
    box-sizing: border-box;
    }

    body {
        margin: 0;
        margin-top: 60px;
        padding: 0;
        font-size: ${theme.ms}
    }

    input {
        border: none;
        outline: none;
    }
    
    button {
        all: unset;
        cursor: pointer;
    }

    ul,li {
        padding: 0;
        margin: 0;
        list-style: none;
    }
`;
export default GlobalStyled;
