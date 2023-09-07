import { extendTheme, StyleFunctionProps, type ThemeConfig, defineStyleConfig, useColorModeValue} from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";
import { cardTheme } from '@/components/Card'


const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  components: {
    Card: cardTheme,
  },
})

export default theme