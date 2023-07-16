import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaMapMarkerAlt, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const IntroSection = () => {
    return (
        <Box h={'13rem'} w={'100%'} color={'white'} background={"#025050"} display={'flex'} flexDir={'column'} justifyContent={'center'} >
            <HStack justifyContent={'space-between'} p={'0 3rem'}>
                <VStack w={'30%'} mt={'1rem'}>
                    <Box w={'100%'} display={'flex'} justifyContent={'space-evenly'} fontWeight={'bold'}>
                        <VStack justifyContent={'space-between'}>
                            <FaPhoneAlt />
                            <FaEnvelope />
                            <FaLinkedinIn />
                            <FaGithub />
                            <FaMapMarkerAlt />
                        </VStack>
                        <VStack alignItems={'left'} justify={'space-between'} >
                            <Text>+91 7042041636</Text>
                            <Text>sachin891singh@gmail.com</Text>
                            <Text>
                                <a href="https://www.linkedin.com/in/sachin-singh-040290218/" target='_blank' rel='noreferrer'>
                                    <HStack>
                                        <Text>
                                            Linkedin
                                        </Text>
                                        <FaExternalLinkAlt />
                                    </HStack>
                                </a>
                            </Text>
                            <Text>
                                <a href="https://github.com/sachinsingh2020" target='_blank' rel='noreferrer'>
                                    <HStack>
                                        <Text>
                                            GitHub
                                        </Text>
                                        <FaExternalLinkAlt />
                                    </HStack>
                                </a>
                            </Text>
                            <Text>Noida Sec-62</Text>
                        </VStack>
                    </Box>
                </VStack>
                <VStack alignItems={'right'}>
                    <Text fontSize={'28px'} fontWeight={'bold'}>Sachin Singh</Text>
                    <Text fontWeight={'400'}>Software Engineer</Text>
                </VStack>
            </HStack>
        </Box>
    )
}

export default IntroSection
