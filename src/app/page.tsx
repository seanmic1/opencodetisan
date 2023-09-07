'use client'

import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Showcase from "@/components/Showcase"
import Develop from "@/components/Develop"
import {Box, useColorModeValue}  from "@chakra-ui/react"

export default function Home() {
  
  return (
    <>
      <Box bg={useColorModeValue('white','black')}>
        <Hero/>
        <Showcase/>
        <Develop/>
      </Box>
    </>
  )
}
