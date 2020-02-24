import React from 'react'
import { withRouter } from 'react-router-dom'
import { Flex, Menu, MenuButton, MenuList, MenuItem, Text, IconButton } from '@chakra-ui/core'

function Navbar({ history }) {
  const go = path => history.push(path)
  return (
    <Flex
      pos="fixed"
      top={0}
      zIndex="99"
      backgroundColor="white"
      w="100vw"
      h="10vh"
      p={8}
      align="center"
      justify="space-between"
    >
      <Text fontSize="xl" fontWeight="bolder" onClick={() => go('/')}>
        mimeme
      </Text>
      <Menu>
        <MenuButton
          as={IconButton}
          variant="outline"
          variantColor="whity"
          aria-label="Menu"
          size="lg"
          icon="menu"
        ></MenuButton>
        <MenuList>
          <MenuItem onClick={() => go('/')}>Home</MenuItem>
          <MenuItem onClick={() => go('/login')}>Login</MenuItem>
          <MenuItem onClick={() => go('/signup')}>Signup</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default withRouter(Navbar)
