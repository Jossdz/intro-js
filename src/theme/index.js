import { themes } from "mdx-deck"
import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  header + div {
    padding: 0 5vw;
  }
  h1, h2, h3{
    color: #32C3FF;
  }
  .react-live-preview{
    color: black;
  }
  a:visited{
    color: #32C3FF;
  }
  a{
    color: #32C3FF;
    text-decoration: none;
  }
`

export default {
  ...themes,
  font: '"JetBrains Mono", Poppins, Roboto, sans-serif',
  h1: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: "4rem"
  },
  h2: {
    color: "#32C3FF"
  },
  monospace: '"Dank Mono", Josefin Sans, Sans Serif',
  img: {
    maxWidth: "100%"
  },
  weights: 400,
  li: {
    paddingBottom: "16px",
    fontFamily: '"Ranga","Verdana"',
    fontSize: "0.8em"
  },
  ul: {
    // listStyle: 'none',
    paddingLeft: "20px",
    display: "inline-block"
  },
  p: {
    fontSize: "30px"
  },
  colors: {
    text: "#FFF",
    background: "#2D354C",
    link: "#32C3FF",
    pre: "#FFD35C",
    preBackground: "#1E2434",
    code: "#fff",
    strong: "#FFD35C"
  },
  styles: {
    Footer: {
      pointerEvents: "all",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "6vh"
    },
    Header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "6vh"
    }
  }
}
