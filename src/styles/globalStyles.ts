import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    margin: 0;
    padding: 0;
    *, [class*="ant-layout"], [class*="ant-typography"] {
      font-family: 'PT Sans', sans-serif;;
    }

    h1, h2, h3, h4, h5 {
      &[class*="ant-typography"] {
        font-weight: 400;
      }
      
      button {
        float: right;
        margin-top: 2px;
      }
    }
    h1.ant-typography {
      margin-top: 1rem;
      margin-bottom: 2rem;
      font-size: 3rem;
    }

    h2.ant-typography {
      font-size: 2rem;
    }

    h3.ant-typography {
      font-size: 1.7rem;
    }

  }
`;

export default GlobalStyle;
