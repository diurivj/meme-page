import React, { useContext, useEffect } from 'react'
import { SimpleGrid, Image, Button, Stack } from '@chakra-ui/core'
import { MyContext } from '../../context'
import MyModal from '../../components/MyModal'

export default function Create({ history }) {
  const context = useContext(MyContext)
  // aqui dice component did mount, si no lo ven, les hace falta chelas
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })

  return (
    <MyContext.Consumer>
      {context => {
        const { meme_templates, isOpen } = context.state
        return (
          <SimpleGrid mt="10vh" minChildWidth="250px" spacing={8}>
            {meme_templates.map(meme => (
              <Stack
                key={meme.id}
                backgroundColor="softpink.500"
                p={8}
                spacing={8}
              >
                <Image key={meme.id} src={meme.url} alt={meme.name} />
                <Button
                  onClick={() => context.handleMeme(meme)}
                  backgroundColor="hotpink.500"
                  variantColor="hotpink"
                >
                  Select Meme
                </Button>
              </Stack>
            ))}
            <MyModal
              create={context.createMeme}
              values={context.state.memeTexts}
              handleMemeInput={context.handleMemeInput}
              onClose={context.onClose}
              boxes={context.state.meme.box_count}
              isOpen={isOpen}
            />
          </SimpleGrid>
        )
      }}
    </MyContext.Consumer>
  )
}
