import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      src: local('Poppins Light'), local('Poppins-Light'),
      url('/fonts/poppins-v13-latin-300.woff2') format('woff2'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* poppins-regular - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      src: local('Poppins Regular'), local('Poppins-Regular'),
          url('/fonts/poppins-v13-latin-regular.woff2') format('woff2'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* poppins-600 - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
          url('/fonts/poppins-v13-latin-600.woff2') format('woff2'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
