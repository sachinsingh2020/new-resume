import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Objective = () => {
    return (
        <Box p={'.5rem'}>
            <Heading pl={'.5rem'} color={"#025050"} fontSize={'16px'}>CAREER OBJECTIVE</Heading>
            <hr style={{ border: "2px solid #025050", background: "#025050", borderRadius: "50px" }} />
            <Text color={"#444654"} p={'.5rem'}>
                Passionate about building first-class web applications. Honest and hardworking developer skilled at designing sites and writing clean code. Background includes Full Stack Web Developer (MERN Stack) and Performance Optimization. Also passionate about learning new things every day. I will always be keen to work under your guidance and will do any task assigned to me whether with my skills or learning required skills.
            </Text>
        </Box>
    )
}

export default Objective
