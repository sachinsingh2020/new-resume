import { Box, HStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Education = () => {
  return (
    <Box p={'.5rem'} w={'100%'}>
      <Heading pl={'.5rem'} color={"#025050"} fontSize={'16px'}>EDUCATION </Heading>
      <hr style={{ border: "2px solid #025050", background: "#025050", borderRadius: "50px" }} />
      <HStack justifyContent={'space-between'} pt={'.2rem'}  >
        <Heading pl={'.5rem'} color={"#025050"} fontSize={'16px'}>B.Tech in Computer Science </Heading>
        <Text fontWeight={'bold'} color={'#444654'} pr={'1rem'} fontSize={'14px'}>
          Aug 2021 - Present
        </Text>
      </HStack>
      <Heading pt={'.2rem'} pl={'.5rem'} fontSize={'14px'}>Gautam Buddha University </Heading>
      <Box color={"#444654"} pl={'.5rem'} pt={'.2rem'} fontSize={'16px'} display={'flex'} flexDir={'column'} alignItems={"left"}>
        <Text ml={'1rem'}>
          <ul>
            <li style={{ fontSize: "14px" }}>
              Persuing B.Tech in Computer Science
            </li>
            <li style={{ fontSize: "14px" }}>
              Scored 9.8 CGPA in Third Year
            </li>
          </ul>
        </Text>
      </Box>
      <HStack justifyContent={'space-between'} pt={'.1rem'}  >
        <Heading pl={'.5rem'} color={"#025050"} fontSize={'16px'}>Intermediate & High School </Heading>
        <Text fontWeight={'bold'} color={'#444654'} pr={'1rem'} fontSize={'14px'}>
          March 2017 - March 2020
        </Text>
      </HStack>
      <Heading pt={'.5rem'} pl={'.5rem'} fontSize={'14px'}>Panchsheel Balak Inter College </Heading>
      <Box color={"#444654"} p={'.5rem'} fontSize={'16px'} display={'flex'} flexDir={'column'} alignItems={"left"}>
        <Text ml={'1rem'}>
          <ul>
            <li style={{ fontSize: "14px" }}>
              <span style={{ fontWeight: "500", paddingRight: "1rem" }}>Intermediate: </span> Scored 94%
            </li>
            <li style={{ fontSize: "14px" }}>
              <span style={{ fontWeight: "500", paddingRight: "1.7rem" }}>High School: </span>  Scored 82%
            </li>
          </ul>
        </Text>
      </Box>
    </Box>
  )
}

export default Education
