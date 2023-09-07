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
  useColorModeValue,
  Center,
  keyframes
} from '@chakra-ui/react'

import {TriangleUpIcon} from '@chakra-ui/icons'
import { SiVercel } from 'react-icons/si'
import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100% 0; }
`;

const animation = `${animationKeyframes} 4s alternate infinite`;

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
            <Text
              bgGradient={'linear(to-l, #7928CA, #FF0080)'}
              bgSize={'300%'}
              bgClip={'text'}
              animation={animation}>
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
        <Stack spacing={6} direction={'row'} align={'top'}>
          <Button
            h={'48px'}
            as={'a'}
            href='/dashboard'
            rounded={'lg'}
            px={6}
            colorScheme={'orange'}
            bg={useColorModeValue('black', 'white')}
            _hover={{'bg': useColorModeValue('gray.500', 'gray.400')}}
            leftIcon={<SiVercel></SiVercel>}>
            Start Deploying
          </Button>
          <Center rounded={'lg'} bgGradient={'linear(to-r, blue.400, cyan)'} h={'48px'} p={'0.5'}>
            <Button as={'a'} px={10} h={'full'} w={'full'} rounded={'lg'} bg={useColorModeValue('white','black')} _hover={{'bg':'transparent'}}>
              Get a Demo
            </Button>
          </Center>
        </Stack>
      </Stack>
    </Container>
  )
}