'use client'

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react'

import {TriangleUpIcon} from '@chakra-ui/icons'

export default function Hero() {
  return (
    <Container maxW={'5xl'} pt={'4rem'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={800}
          fontSize={{ base: '4rem', sm: '5rem', md: '6rem' }}
          lineHeight={'110%'}>
          <Stack direction={{base: 'column', sm: 'column', md:'row'}}>
            <Text>
              Develop.
            </Text>
            <Text>
              Preview.
            </Text>
            <Text>
              Ship.
            </Text>
          </Stack>
        </Heading>
        <Text color={'#888'} maxW={'3xl'} fontSize={'1.25rem'} fontWeight={'400'}>
        Vercel's frontend cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized Web.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'md'}
            px={3}
            colorScheme={'orange'}
            bg={'white'}
            _hover={{ bg: 'gray.200' }}
            leftIcon={<TriangleUpIcon/>}>
            Start Deploying
          </Button>
          <Flex rounded={'md'} bgGradient={'linear(to-r, blue.400, cyan)'} p={'1px'}>
            <Button rounded={'md'} px={6} bg={'black'} border={'transparent'}>
              Get a Demo
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </Container>
  )
}