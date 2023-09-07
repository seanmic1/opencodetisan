'use client'

import { Box, SimpleGrid, Icon, Text, Stack, Flex, Container, Center, useColorMode, useColorModeValue, Image} from '@chakra-ui/react'
import { BiWrench } from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'
import {GoCommandPalette} from 'react-icons/go'

export default function Develop() {

  const { colorMode, toggleColorMode } = useColorMode()

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
      align={'center'}>
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

    <Flex width={'full'} justifyContent={'center'}>
      <Flex width={'50%'} justifyContent={'center'}>
        {colorMode === 'light' ?  
        <Image src='/lightmode.png' alt='demo browser'objectFit={'cover'} objectPosition={'-100px -80px'} width={'620px'} height={'670px'}/> : 
        <Image src='/darkmode.png' alt='demo browser' objectFit={'cover'} objectPosition={'-100px -80px'} width={'620px'} height={'670px'}/>}
      </Flex>
      <Flex width={'50%'} justifyContent={'center'}>
        <Stack dir='column' p={10}>
          <Box my={6}>
            <Flex>
              <Center bg={useColorModeValue('gray.300','gray.800')} rounded={'lg'} p={3}>
                <BiWrench size={25}/>
              </Center>
            </Flex>
            <Flex fontSize={'22px'} fontWeight={'600'} pt={5}>
              The complete toolkit for the Web
            </Flex>
            <Flex fontWeight={'400'}>
            Everything you need to build your site exactly how you imagine, from automatic API handling to built-in image and performance optimizations.
            </Flex>
          </Box>
          <Box my={6}>
            <Flex>
              <Center bg={useColorModeValue('gray.300','gray.800')} rounded={'lg'} p={3}>
                <BsDatabase size={25}/>
              </Center>
            </Flex>
            <Flex fontSize={'22px'} fontWeight={'600'} pt={5}>
            Easy integration with your backend
            </Flex>
            <Flex fontWeight={'400'}>
            Connect your pages to any data source, headless CMS, or API and make it work in everyone’s dev environment.
            </Flex>
          </Box>
          <Box my={6}>
            <Flex>
              <Center bg={useColorModeValue('gray.300','gray.800')} rounded={'lg'} p={3}>
                <GoCommandPalette size={25}/>
              </Center>
            </Flex>
            <Flex fontSize={'22px'} fontWeight={'600'} pt={5}>
            End-to-end testing on Localhost
            </Flex>
            <Flex fontWeight={'400'}>
            From caching to Serverless Functions, all our cloud primitives work perfectly on localhost.
            </Flex>
          </Box>
        </Stack>
      </Flex>
    </Flex>

    </>
  )
}