import React from 'react'
import { Box, HStack, Heading, Text } from '@chakra-ui/react'
import { FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
    return (
        <Box w={'100%'}>
            <Heading pl={'.5rem'} color={"#025050"} fontSize={'16px'}>WORK EXPERIENCE </Heading>
            <hr style={{ border: "2px solid #025050", background: "#025050", borderRadius: "50px" }} />
            <HStack justifyContent={'space-between'} pt={'.5rem'}  >
                <Heading pl={'.5rem'} color={"#025050"} fontSize={'16px'}>React.js & Node.js Developer Intern</Heading>
                <Text fontWeight={'bold'} color={'#444654'} pr={'1rem'}>
                    March 2023 - June 2023
                </Text>
            </HStack>
            <Heading pt={'.2rem'} pl={'.5rem'} fontSize={'15px'}>At Gautam Buddha University Administration Department </Heading>
            <Heading pt={'.2rem'} pl={'.5rem'} color={'#444654'} fontSize={'15px'}>Full Stack Web Application Development and Software Testing </Heading>
            <Text display={'flex'} alignItems={"center"} pt={'.3rem'} pl={'.5rem'} fontSize={'14px'} >
                Certificate of Intership:
                <a style={{ paddingLeft: ".4rem", color: "#025050", display: "flex", alignItems: "center" }} href="https://drive.google.com/file/d/1_0yPiqSLnRew2NFC6YjVaol7YCGbFHzN/view?usp=sharing" target='_blank' rel="noreferrer">
                    <span style={{ display: "flex", paddingLeft: ".2rem", color: "#025050", fontWeight: "bold" }} > Link  </span>
                    <span style={{ paddingLeft: ".4rem" }}>
                        <FaExternalLinkAlt />
                    </span>
                </a>
            </Text>
            <Box color={"#444654"} p={'.5rem'} fontSize={'16px'} display={'flex'} flexDir={'column'} alignItems={"left"}>
                <Text ml={'1rem'} pr={"3rem"} fontSize={'14px'}>
                    <ul>
                        <li>
                            Developed a Job Portal (Full Stack Project) for recruitment of teachers and professors in the university.
                        </li>
                        <li>
                            Currently used by the university for recruitment purposes. Several new Teachers and Professors have been recruited using this portal.
                        </li>
                        <li>
                            Technologies used: React.js, Redux Toolkit, Axios, Node.js, MongoDB, Express.js, Chakra UI, HTML, CSS, JavaScript
                        </li>
                        <li>
                            Implemented automated email notifications within the Job Portal and final pdf generation of the application form.
                        </li>
                        <li>
                            It was a 3 month long internship. I was awarded a certificate of appreciation for my work.
                        </li>
                    </ul>
                </Text>
            </Box>
            <HStack justifyContent={'space-between'} pt={'.3rem'}  >
                <Heading pl={'.5rem'} color={"#025050"} fontSize={'16px'}>Full Stack Developer Intern</Heading>
                <Text fontWeight={'bold'} color={'#444654'} pr={'1rem'} >
                    March 2022 - Present
                </Text>
            </HStack>
            <Heading pt={'.3rem'} pl={'.5rem'} fontSize={'14px'}>At Techno Cultural Club  </Heading>
            <Heading pt={'.3rem'} pl={'.5rem'} color={'#444654'} fontSize={'15px'}>Responsible for Developement Event Websites and Organization Posters and Forms</Heading>
            {/* <Text display={'flex'} alignItems={"center"} pt={'.5rem'} pl={'.5rem'} >
                Certificate of Intership:
                <a style={{ paddingLeft: ".4rem", color: "#025050", display: "flex", alignItems: "center" }} href="https://drive.google.com/file/d/1_0yPiqSLnRew2NFC6YjVaol7YCGbFHzN/view?usp=sharing" target='_blank'>
                    <span style={{ display: "flex", paddingLeft: ".2rem", color: "#025050", fontWeight: "bold" }} > Link  </span>
                    <span style={{ paddingLeft: ".4rem" }}>
                        <FaExternalLinkAlt />
                    </span>
                </a>
            </Text> */}
            <Box color={"#444654"} p={'.5rem'} fontSize={'16px'} display={'flex'} flexDir={'column'} alignItems={"left"}>
                <Text ml={'1rem'} pr={"3rem"} fontSize={'14px'}>
                    <ul>
                        <li>
                            Developing and maintaining web applications using React.js and other related technologies.
                        </li>
                        <li>
                            Made 20+ Websites for Events and Educative Purposes for the Club.
                        </li>
                        <li>
                            Collaborating with cross-functional teams including designers, and other developers to create high-quality products in club.
                        </li>
                        <li>
                            Implementing responsive design and ensuring cross-browser compatibility.
                        </li>
                    </ul>
                </Text>
            </Box>

        </Box>
    )
}

export default Experience
