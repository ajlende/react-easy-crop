import { CSSReset, ThemeProvider } from "@chakra-ui/core"
import { render, RenderOptions } from "@testing-library/react"
import React from "react"

import theme from "./theme"

const AllTheProviders = ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {children}
  </ThemeProvider>
)

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"

export { customRender as render }
