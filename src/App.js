import React from 'react'
import IntroSection from './components/IntroSection'
import { Box, HStack, VStack } from '@chakra-ui/react'
import Objective from './components/Objective'
import KeySkills from './components/KeySkills'
import TechnicalSkills from './components/TechnicalSkills'
import Certifications from './components/Certifications'
import AdditionalInfo from './components/AdditionalInfo'
import Education from './components/Education'
import KeyProjects from './components/KeyProjects'
import Experience from './components/Experience'

const App = () => {
  return (
    <div style={{ background: "#eff1f3", height: "100vh", width: "100vw" }}>
      <div style={{ margin: "1rem auto", width: "95%", background: "white", fontFamily: "'Poppins',sans-serif" }}>
        <Box >
          <IntroSection />
        </Box>
        <HStack alignItems={"flex-start"} mt={'.5rem'} >
          <VStack w={'30rem'}  >
            <Objective />
            <KeySkills />
            <TechnicalSkills />
            <Certifications />
            <AdditionalInfo />
          </VStack>
          <VStack w={'70rem'} minH={'61.5rem'}>
            <Education />
            <Experience />
            <KeyProjects />
          </VStack>
        </HStack>
      </div>
    </div>
  )
}

export default App
