import React from 'react'
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
  Input,
  useToast
} from '@chakra-ui/core'

export default function MyModal({
  create,
  isOpen,
  onClose,
  boxes,
  handleMemeInput,
  values
}) {
  const toast = useToast()
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add captions</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {Array.from(Array(boxes), (box, idx) => {
            return (
              <Input
                onChange={handleMemeInput}
                key={idx}
                placeholder={`Text ${idx + 1}`}
                mb={3}
                name={`text${idx}`}
                value={values['text' + idx]}
              />
            )
          })}
        </ModalBody>
        <ModalFooter>
          <Button
            variantColor="softpink"
            backgroundColor="softpink.500"
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
          <Button
            onClick={() => {
              create()
              toast({
                title: 'Meme created.',
                description: 'Eres la mamada hijo',
                status: 'success',
                isClosable: true,
                duration: 2000
              })
            }}
            variantColor="hotpink"
            backgroundColor="hotpink.500"
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
