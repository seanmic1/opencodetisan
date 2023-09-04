import {Box, BoxProps, Card, CardBody, CardHeader, Center, Container, Flex, SimpleGrid, Text} from '@chakra-ui/react'

import {BsGraphUpArrow} from 'react-icons/bs'

export default function Content() {
  return (
    <Center px={'10%'} pt={'10px'} width={'100%'} display={'block'}>
        <SimpleGrid columns={{sm:2, md: 4}} spacing={'4'} width={'100%'}>
          <Card p={4} >
            <Text fontSize={'sm'} fontWeight={'md'}>
            Revenue
            </Text>
            <Text fontSize={'2xl'} fontWeight={'semibold'}>
              €43.400
            </Text>
            <Flex alignItems={'baseline'}>
              <BsGraphUpArrow/>
              <Text ml={1}>
              23%
              </Text>
            </Flex>
          </Card>
          <Card p={4} >
            <Text fontSize={'sm'} fontWeight={'md'}>
            New Customers
            </Text>
            <Text fontSize={'2xl'} fontWeight={'semibold'}>
              130
            </Text>
            <Flex alignItems={'baseline'}>
              <BsGraphUpArrow/>
              <Text ml={1}>
              2%
              </Text>
            </Flex>
          </Card>
          <Card p={4} >
            <Text fontSize={'sm'} fontWeight={'md'}>
            Churned customers
            </Text>
            <Text fontSize={'2xl'} fontWeight={'semibold'}>
              5
            </Text>
            <Flex alignItems={'baseline'}>
              <BsGraphUpArrow/>
              <Text ml={1}>
              23%
              </Text>
            </Flex>
          </Card>
          <Card p={4} >
            <Text fontSize={'sm'} fontWeight={'md'}>
            Active users
            </Text>
            <Text fontSize={'2xl'} fontWeight={'semibold'}>
              1337
            </Text>
            <Flex alignItems={'baseline'}>
              <BsGraphUpArrow/>
              <Text ml={1}>
              103%
              </Text>
            </Flex>
          </Card>
        </SimpleGrid>
        <Card p={4} my={4}>
          <Text fontSize={'sm'} fontWeight={'md'}>
            Monthly recurring revenue
          </Text>
          <Center height={'250px'} bg={'gray.800'} m={2}>
            <Text>
              *Insert chart here*
            </Text>
          </Center>
        </Card>
    </Center>
  )
}