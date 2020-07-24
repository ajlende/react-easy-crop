import React from "react"
import { keyframes } from "@emotion/core"
import { Box, Code, Flex, Icon, Link, Text } from "@chakra-ui/core"

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

function App() {
  return (
    <Box textAlign="center">
      <Flex
        as="header"
        align="center"
        justify="center"
        direction="column"
        minH="100vh"
        color="white"
        backgroundColor="#282c34"
        fontSize="calc(10px + 2vmin)"
      >
        <Icon
          name="logo"
          height="40vmin"
          width="auto"
          animation={`${spin} infinite 20s linear`}
          pointerEvents="none"
          color="#61dafb"
        />
        <Text marginY="1em">
          Edit <Code>src/App.tsx</Code> and save to reload.
        </Text>
        <Link
          href="https://reactjs.org"
          isExternal
          color="#61dafb"
          textDecor="underline"
        >
          Learn React
        </Link>
      </Flex>
    </Box>
  )
}

export default App
