import React from 'react'
import { Box, HStack, Heading, Text } from '@chakra-ui/react'
import { FaExternalLinkAlt } from "react-icons/fa";


const KeyProjects = () => {
    return (
        <Box w={'100%'}>
            <Heading pl={'.5rem'} color={"#025050"} fontSize={'16px'}>KEY PROJECTS </Heading>
            <hr style={{ border: "2px solid #025050", background: "#025050", borderRadius: "50px" }} />
            <HStack justifyContent={'space-between'} pt={'.5rem'}  >
                <Heading pl={'.5rem'} color={"#444654"} fontSize={'16px'}>Full Stack Chat App | React.js | Node.js | Redux Toolkit | Socket</Heading>
                <a style={{ fontWeight: "bold", display: "flex", alignItems: "center", paddingRight: ".7rem", fontSize: "15px" }} href=" https://github.com/sachinsingh2020/My-Full-Stack-Chat-App" target='_blank' rel="noreferrer">
                    GitHub Repo <span style={{ paddingLeft: ".5rem" }}><FaExternalLinkAlt /></span>
                </a>
                <a style={{ fontWeight: "bold", display: "flex", alignItems: "center", paddingRight: ".7rem" }} href="https://fullstackchatapp-rose.vercel.app/" target='_blank' rel="noreferrer">
                    Live Visit <span style={{ paddingLeft: ".5rem" }}><FaExternalLinkAlt /></span>
                </a>
            </HStack>
            <Box color={"#444654"} p={'.5rem'} fontSize={'16px'} display={'flex'} flexDir={'column'} alignItems={"left"}>
                <Text ml={'1rem'} pr={"3rem"} fontSize={'14px'}>
                    <ul>
                        <li>
                            Frontend Hosted on Vercel || Backend Hosted on Railway
                        </li>
                        <li>
                            A Full Stack Web Application using React.js | Node.js | REST API
                        </li>
                        <li>
                            Enabling real-time communication with one on one Chat and Group Chat features.
                        </li>
                        <li>
                            Tech used: React.js, Socket.io, Redux Toolkit, Axios, Node.js, MongoDB, Express.js, Chakra UI, HTML, CSS, JavaScript.
                        </li>
                    </ul>
                </Text>
            </Box>
            <HStack justifyContent={'space-between'} pt={'.5rem'}  >
                <Heading pl={'.5rem'} color={"#444654"} fontSize={'16px'}>
                    GBU Movies | Full Stack | React.js | Node.js | REST API</Heading>
                <a style={{ fontWeight: "bold", display: "flex", alignItems: "center", paddingRight: ".7rem", fontSize: "15px", paddingLeft: "4.5rem" }} href=" https://github.com/sachinsingh2020/GBU-Movies-Full-Stack-App" target='_blank' rel="noreferrer">
                    GitHub Repo <span style={{ paddingLeft: ".5rem" }}><FaExternalLinkAlt /></span>
                </a>
                <a style={{ fontWeight: "bold", display: "flex", alignItems: "center", paddingRight: ".7rem" }} href="https://gbumoviesfrontend.vercel.app/" target='_blank' rel="noreferrer">
                    Live Visit <span style={{ paddingLeft: ".5rem" }}><FaExternalLinkAlt /></span>
                </a>
            </HStack>
            <Box color={"#444654"} p={'.5rem'} fontSize={'16px'} display={'flex'} flexDir={'column'} alignItems={"left"}>
                <Text ml={'1rem'} pr={"3rem"} fontSize={'14px'}>
                    <ul>
                        <li>
                            Frontend & Backend Both Hosted on Vercel
                        </li>
                        <li>
                            Full Stack Web Application using MERN stack, All Latest Movies Available for Download
                        </li>
                        <li>
                            Admin Section Available for Adding new Movie & Deleting Movies.
                        </li>
                        <li>
                            Searching, Filter and Pagination Available, Movie Request services using NodeMailer
                        </li>
                        <li>
                            Tech Used: React.js, Redux Toolkit, Axios, Node.js, MongoDB, Express.js, Chakra UI, HTML, CSS, JavaScript.
                        </li>
                    </ul>
                </Text>
            </Box>
            <HStack justifyContent={'space-between'} pt={'.5rem'}  >
                <Heading pl={'.5rem'} color={"#444654"} fontSize={'16px'}>
                    Job Apply Portal | React.js | Node.js | REST API</Heading>
                <a style={{ fontWeight: "bold", display: "flex", alignItems: "center", paddingRight: ".7rem", fontSize: "15px", paddingLeft: "8rem" }} href=" https://github.com/sachinsingh2020/gbu-job-portal-frontend" target='_blank' rel="noreferrer">
                    GitHub Repo <span style={{ paddingLeft: ".5rem" }}><FaExternalLinkAlt /></span>
                </a>
                <a rel="noreferrer" style={{ fontWeight: "bold", display: "flex", alignItems: "center", paddingRight: ".7rem" }} href="https://gbu-form-sachinsingh2020.vercel.app" target='_blank'>
                    Live Visit <span style={{ paddingLeft: ".5rem" }}><FaExternalLinkAlt /></span>
                </a>
            </HStack>
            <Box color={"#444654"} p={'.5rem'} fontSize={'16px'} display={'flex'} flexDir={'column'} alignItems={"left"}>
                <Text ml={'1rem'} pr={"3rem"} fontSize={'14px'}>
                    <ul>
                        <li>
                            Frontend & Backend Both Hosted on Vercel
                        </li>
                        <li>
                            Full Stack Web Application using MERN stack, Redux Toolkit for State Management, Axios for API calls, Chakra UI for UI
                        </li>
                        <li>
                            Currently used by the university for recruitment purposes. Several new Teachers and Professors have been recruited using this portal.
                        </li>
                        <li>
                            Technologies used: React.js, Redux Toolkit, Axios, Node.js, MongoDB, Express.js, Chakra UI, HTML, CSS, JavaScript.
                        </li>
                    </ul>
                </Text>
            </Box>
        </Box>
    )
}

export default KeyProjects
