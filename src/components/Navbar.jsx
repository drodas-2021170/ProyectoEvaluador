import { Flex, Box, Heading, Spacer, Button, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const bg = useColorModeValue("gray.100", "gray.900")
  const color = useColorModeValue("gray.800", "white")

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1.5rem 2rem"
      bg={bg}
      color={color}
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Box>
        <Heading size="md" fontWeight="bold" letterSpacing="wide" cursor="pointer" color="teal.500">
          <Link to="/">TaskManager</Link>
        </Heading>
      </Box>
      <Spacer />

      <Flex align="center" gap={4}>
       <Link to='/calendar'><Button colorScheme='green'>Calendario</Button></Link>
        <Link to='/'><Button colorScheme='green'>Task List</Button></Link>

        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          size="md"
          ml={2}
          _hover={{ bg: "teal.100" }}
        />
      </Flex>
    </Flex>
  )
}
