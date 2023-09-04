'use client'

import { Box, SimpleGrid, Icon, Text, Stack, Flex, Container, Center} from '@chakra-ui/react'
import { AiFillApple, AiFillGoogleCircle } from 'react-icons/ai'
import { BiLogoAdobe, BiLogoEbay, BiLogoTailwindCss} from 'react-icons/bi'
import { SiUnderarmour } from 'react-icons/si'

export default function Showcase() {

  const logoSize = '80'

  return(
    <>
      <Text 
        align={'center'} 
        m={2} 
        width={'100%'} 
        casing={"uppercase"} 
        color={'gray.400'} 
        fontWeight={700} 
        letterSpacing={'0.2rem'}
        fontSize={'0.75rem'}>
        Trusted by the best frontend teams
      </Text>
      <Center m={3} mb={10}>
        <Stack direction={{base:'column', sm:'column', md:'row'}} spacing={10} alignItems={'center'}>
          <Flex gap={10}>
            <AiFillApple size={logoSize} />
            <AiFillGoogleCircle size={logoSize} />
            <BiLogoAdobe size={logoSize} />
          </Flex>
          <Flex gap={10}>
            <BiLogoEbay size={logoSize} />
            <BiLogoTailwindCss size={logoSize} />
            <SiUnderarmour size={logoSize} />
          </Flex>
        </Stack>
      </Center>
    </>
  )
}