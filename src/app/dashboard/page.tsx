'use client'

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  Spacer,
  Portal,
  Stack,
  chakra,
  VisuallyHidden,
  Center,
  calc,
  Input,
  InputLeftAddon,
  InputGroup,
} from '@chakra-ui/react'
import {
  FiHome,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiInbox,
  FiUsers,
  FiPlus,
  FiHelpCircle,
  FiGrid,
  FiSearch
} from 'react-icons/fi'
import {
  FaTwitter,
  FaGithub,
  FaDiscord
} from 'react-icons/fa'
import { IconType } from 'react-icons'

import Content from '@/app/dashboard/content'
import { ReactNode } from 'react'

interface LinkItemProps {
  name: string
  icon: IconType
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: React.ReactNode
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FiHome },
  { name: 'Inbox', icon: FiInbox },
  { name: 'Contacts', icon: FiUsers },
]

const LinkItemsBottom: Array<LinkItemProps> = [
  { name: 'Invite people', icon: FiPlus },
  { name: 'Help & support', icon: FiHelpCircle },
]

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'black')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.800')}
      w={{ base: 'full', md: '280px' }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="60px" alignItems="center" mx="2" justifyContent="space-between">
        {/* add organizations and profile image button */}
        <Button bgColor={useColorModeValue('white','black')} _hover={{ bg: 'gray.900' }} px={3} size={'sm'}>
          <Flex rounded={'full'} bgGradient="linear(to-r, blue.400, cyan)" p={'1px'}>
            <Center p={1} rounded={'full'} bg={'black'} border={'transparent'}>
              <FiGrid/>
            </Center>
          </Flex>
          <Text px={2}> Sean </Text>
        </Button>
        <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </HStack>
            </MenuButton>
            <Portal>
              <MenuList
                borderWidth={'0px'}
                p={2}>
                <Text p={2} fontWeight={'semibold'}>Renata Alink</Text>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem>Changelog</MenuItem>
                <MenuItem>Help</MenuItem>
                <MenuItem>Feedback</MenuItem>
                <MenuItem>Light mode</MenuItem>
                <MenuDivider />
                <MenuItem>Log out</MenuItem>
              </MenuList>
            </Portal>
          </Menu>
      </Flex>
      <Flex p={4}>
        <InputGroup>
          <InputLeftAddon h={'2em'} >
            <FiSearch></FiSearch>
          </InputLeftAddon>
          <Input placeholder='Search' h={'2em'}>
          </Input>
        </InputGroup>
      </Flex>
      <Flex direction={'column'} height={'calc(100% - 150px)'}>
      {
      LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <Spacer></Spacer>
      {
      LinkItemsBottom.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      </Flex>
    </Box>
  )
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="2"
        mx="5"
        mt="2"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={4}
      h={4}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: '280px' }}
      px={{ base: 4, md: 4 }}
      height="60px"
      alignItems="center"
      bg={useColorModeValue('white', 'black')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.800')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>

      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}/>

      <Text fontWeight={'semibold'} size={'sm'}>
        Sean
      </Text>
      
      <Spacer></Spacer>
      
      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
        <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'GitHub'} href={'#'}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Discord'} href={'#'}>
              <FaDiscord />
            </SocialButton>
          </Stack>
        </Flex>
        <Button variant={'solid'} mx={2}>
          Buy Pro
        </Button>
      </HStack>
    </Flex>
  )
}

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'black')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="sm">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* desktopnav */}
        <Content></Content>
      </Box>
    </Box>
  )
}

export default SidebarWithHeader