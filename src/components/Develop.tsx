'use client'

import { Box, SimpleGrid, Icon, Text, Stack, Flex, Container, Center} from '@chakra-ui/react'

export default function Develop() {


  return(
    <>
    
    <Text
      align={'center'}
      my={10}
      width={'100%'} 
      casing={"uppercase"} 
      color={'gray.400'} 
      fontWeight={700} 
      letterSpacing={'0.2rem'}
      fontSize={'0.75rem'}>
      Explore the Vercel Way
    </Text>
      <Center>
      <Box w={'1.5px'} h={'100px'} bgGradient={'linear(to-t, blue.400, transparent)'} alignContent={'center'}>
      </Box>
    </Center>

    <Center>
      <Center w='40px' h='40px' bgGradient='linear(to-r, blue.400, cyan)' rounded={'full'}>
        <Box as='span' fontWeight='bold' fontSize='lg'>
          1
        </Box>
      </Center>
    </Center>

    <Text fontSize={'2rem'} fontWeight={700} align={'center'} bgGradient={'linear(to-r, blue.400, cyan)'} bgClip={'text'} mt={'2rem'}>
      Develop
    </Text>
    <Text
      fontWeight={700}
      fontSize={'3.75rem'}
      align={'center'}
      color={'gray.200'}>
      Build when inspiration strikes
    </Text>
    <Text
      align={'center'}
      my={8}
      width={'100%'} 
      color={'gray.400'} 
      fontSize={'1.2rem'}>
      Free developers from time-consuming, unnecessary processes  <br/> that slow your work, so you and your team can focus on creating.
    </Text>

    </>
  )
}