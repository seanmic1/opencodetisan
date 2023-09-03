'use client'

import { Box, SimpleGrid, Icon, Text, Stack, Flex, Container, Center} from '@chakra-ui/react'
import { AiFillApple, AiFillGoogleCircle } from 'react-icons/ai'
import { BiLogoAdobe, BiLogoEbay, BiLogoTailwindCss} from 'react-icons/bi'
import { SiUnderarmour } from 'react-icons/si'

export default function Showcase() {

  const logoSize = '100'

  return(
    <>
      <Text align={'center'} m={2} width={'100%'}>
        Trusted by the best frontend teams
      </Text>
      <Center m={3}>
        <Stack direction={'row'} spacing={10} alignItems={'center'}>
          <Flex >
            <AiFillApple size={logoSize} />
          </Flex>
          <Flex>
            <AiFillGoogleCircle size={logoSize} />
          </Flex>
          <Flex>
            <BiLogoAdobe size={logoSize} />
          </Flex>
          <Flex>
            <BiLogoEbay size={logoSize} />
          </Flex>
          <Flex>
            <BiLogoTailwindCss size={logoSize} />
          </Flex>
          <Flex>
            <SiUnderarmour size={logoSize} />
          </Flex>
        </Stack>
      </Center>
    </>
  )
}