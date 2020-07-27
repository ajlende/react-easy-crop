import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core"
import App from "./App"
import { theme } from "./theme"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset config={() => theme.config} />
        <App />
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
