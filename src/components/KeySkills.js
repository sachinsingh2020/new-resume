import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

const KeySkills = () => {
    return (
        <Box display={'flex'} flexDir={'column'} w={'100%'} p={'0 1rem'} >
            <Heading pl={'.5rem'} color={"#025050"} fontSize={'16px'}>KEY SKILLS</Heading>
            <hr style={{ border: "2px solid #025050", background: "#025050", borderRadius: "50px" }} />
            <Text color={"#444654"} p={'.5rem'} >
                <ul>
                    <li>Frontend Web Development</li>
                    <li>Backend Development</li>
                    <li>MERN Stack Development</li>
                    <li>Interface Designing</li>
                    <li>Coding & Troubleshooting</li>
                </ul>
            </Text>
        </Box>
    )
}

export default KeySkills
