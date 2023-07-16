import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'


const TechnicalSkills = () => {
    return (
        <Box p={'.5rem'}>
            <Heading pl={'.5rem'} color={"#025050"} fontSize={'16px'}>TECHNICAL SKILLS</Heading>
            <hr style={{ border: "2px solid #025050", background: "#025050", borderRadius: "50px" }} />
            <Box color={"#444654"} p={'.5rem'} fontSize={'15px'}>
                <Text>
                    <span style={{ fontWeight: "500", color: "black" }} >Front-end Development: </span> React.js, JavaScript, HTML, CSS, Redux Toolkit, Axios, Chakra-UI, BootStrap
                </Text>
                <Text>
                    <span style={{ fontWeight: "500", color: "black" }} >Back-end Development: </span> Node.js, Express.js, JavaScript, REST API, MongoDB, Socket.io
                </Text>
                <Text>
                    <span style={{ fontWeight: "500", color: "black" }} >Version Control & Collaboration: </span> Git, GitHub, Vercel, Netlify, Render, Railway
                </Text>
                <Text>
                    <span style={{ fontWeight: "500", color: "black" }} >Additional Programming Languages: </span> C, C++, Python
                </Text>
            </Box>
        </Box>
    )
}

export default TechnicalSkills
