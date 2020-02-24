import React, { Component } from 'react'
import {
  Stack,
  Heading,
  Box,
  Input,
  Button,
  Text,
  SimpleGrid,
  Image,
  Badge,
  Flex,
  Avatar
} from '@chakra-ui/core'

const mockData = [
  {
    created_at: '19/oct',
    img: 'https://i.imgflip.com/3pz4a5.jpg',
    author: {
      name: 'Diego',
      image: 'https://bit.ly/dan-abramov'
    },
    stats: {
      likes: 200,
      dislikes: 100
    },
    tags: ['lmao', 'lol', 'spanish', 'other', 'pikachu']
  },
  {
    img: 'https://i.imgflip.com/3pz4a5.jpg',
    author: {
      name: 'Diego',
      image: 'https://bit.ly/dan-abramov'
    },
    stats: {
      likes: 200,
      dislikes: 100
    },
    tags: ['funny', 'lmao', 'lol', 'spanish', 'other', 'pikachu']
  },
  {
    img: 'https://i.imgflip.com/3pz4a5.jpg',
    author: {
      name: 'Diego',
      image: 'https://bit.ly/dan-abramov'
    },
    stats: {
      likes: 200,
      dislikes: 100
    },
    tags: ['funny', 'lmao', 'lol', 'spanish', 'other', 'pikachu']
  }
]

class Home extends Component {
  render() {
    return (
      <Stack mt="10vh" backgroundColor="#ffdbe3" textAlign="center" w="100vw" p={8} spacing={8}>
        <Heading as="h1" size="2xl" color="#1e1e1e">
          mi
          <Box as="span" color="#ff3465">
            meme
          </Box>
        </Heading>
        <Input
          borderBottomColor="#1e1e1e"
          variant="flushed"
          focusBorderColor="#ff3465"
          placeholder="Memes, #tags, @users oh my!"
        />
        <Stack spacing={3}>
          <Text>Are you an artist?</Text>
          <Button
            size="lg"
            color="white"
            variantColor="hotpink"
            backgroundColor="hotpink.500"
            alignSelf="center"
            w="50%"
            leftIcon="add"
          >
            New meme
          </Button>
        </Stack>
        <SimpleGrid minChildWidth="250px" spacing={8}>
          {mockData.map((meme, idx) => (
            <Stack
              key={idx}
              boxShadow="lg"
              borderWidth="1px"
              rounded="lg"
              overflow="hidden"
              bg="white"
              spacing={5}
              p={3}
            >
              <Image src={meme.img} alt="meme" />
              <Flex>
                <Avatar name={meme.author.name} src={meme.author.image} />
                <Box ml="3">
                  <Text textAlign="left" fontWeight="bold">
                    @{meme.author.name}
                  </Text>
                  <Text fontSize="sm">Published: {meme.created_at}</Text>
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
          ))}
        </SimpleGrid>
      </Stack>
    )
  }
}

export default Home
