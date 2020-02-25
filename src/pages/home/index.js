import React, { useContext } from 'react'
import {
  Stack,
  Heading,
  Box,
  Input,
  Button,
  Text,
  SimpleGrid
} from '@chakra-ui/core'
import Meme from '../../components/Meme'
import { MyContext } from '../../context'

function Home({ history }) {
  const context = useContext(MyContext)
  const { feed } = context.state
  return (
    <Stack
      mt="10vh"
      minH="90vh"
      backgroundColor="#ffdbe3"
      textAlign="center"
      w="100vw"
      p={8}
      spacing={8}
    >
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
        placeholder="No sirvo!"
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
          onClick={() => history.push('/create')}
        >
          New meme
        </Button>
      </Stack>
      <SimpleGrid minChildWidth="250px" spacing={8}>
        {!feed && <Text>There are no memes yet :(</Text>}
        {feed && feed.map(meme => <Meme key={meme._id} meme={meme} />)}
      </SimpleGrid>
    </Stack>
  )
}

export default Home
