import React, { useContext } from 'react'
import { Stack, Box, Text, Image, Badge, Flex, Avatar } from '@chakra-ui/core'
import { MyContext } from '../context'

export default function Meme({ meme }) {
  const context = useContext(MyContext)
  const { loggedUser } = context.state
  return (
    <Stack
      boxShadow="lg"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      bg="white"
      spacing={5}
      p={3}
    >
      <Image src={meme.photoURL} alt={meme.name} />
      <Flex>
        <Avatar name={meme.author.name} src={meme.author.photoURL} />
        <Box ml="3">
          <Text textAlign="left" fontWeight="bold">
            @
            {loggedUser && meme.author.name === loggedUser.name
              ? 'Me'
              : meme.author.name}
          </Text>
          <Text fontSize="sm">Published:{meme.createdAt}</Text>
        </Box>
      </Flex>
      <Flex wrap="wrap" alignContent="center" justify="space-evenly">
        {meme.tags.map((tag, id) => (
          <Badge
            key={id}
            mb="2"
            rounded="full"
            px="2"
            variantColor="hotpink"
            backgroundColor="hotpink.100"
            color="white"
          >
            {tag}
          </Badge>
        ))}
      </Flex>
    </Stack>
  )
}
