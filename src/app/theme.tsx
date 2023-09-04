import { extendTheme, StyleFunctionProps, type ThemeConfig, defineStyleConfig,  } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";
import { cardTheme } from '@/components/Card'


const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('white','black')(props),
      }
    })
  },
  components: {
    Card: cardTheme,
  },
})

export default theme