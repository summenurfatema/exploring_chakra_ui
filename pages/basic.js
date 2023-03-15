import { Container, Heading, Text, Box } from '@chakra-ui/react';
import React from 'react';

const Basic = () => {
    const submitStyled ={
        py:"20px",
        bg:"purple.600",
        color:"white",
        textAlign:"center",
        my:'10px',
        maxW:"4xl",
        ':hover': {
            bg:"blue.300"
        }
     }
    return (
        <div>
           <Container>
           <Heading my="10px" fontWeight="bold">Chakra ui</Heading>
            <Text color="green.300" fontSize="20px">This is a normal text</Text>
           </Container>

           <Container>
           <Box bg="pink.500" mx="100px" p="10px">
            <Text color="white" fontWeight="semibold">This is a Box</Text>
           </Box>

           <Box sx={submitStyled}>
            Submit
           </Box>
           </Container>
        </div>
    );
};

export default Basic;