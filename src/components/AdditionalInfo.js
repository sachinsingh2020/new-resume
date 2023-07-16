import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'


const AdditionalInfo = () => {
  return (
    <Box p={'.5rem'} w={'100%'}>
      <Heading pl={'.5rem'} color={"#025050"} fontSize={'16px'}>ADDITIONAL INFORMATION</Heading>
      <hr style={{ border: "2px solid #025050",background:"#025050",borderRadius:"50px" }} />
      <Box color={"#444654"} p={'.5rem'} fontSize={'16px'} display={'flex'} flexDir={'column'} alignItems={"left"}>
        <Text>
          <span style={{ fontWeight: "500", color: "black" }} >Languages: </span> Hindi, English
        </Text>
        <Text>
          <span style={{ fontWeight: "500", color: "black" }} >Interests: </span> Reading, Travelling & Cycling
        </Text>
      </Box>
    </Box>
  )
}

export default AdditionalInfo
