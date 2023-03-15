import { Box, Container, Flex, Heading, HStack, Spacer, Stack } from "@chakra-ui/react";

const FlexLayout = () => {
    const boxStyled = {
         fontWeight:"semibold",
         fontSize:"20px"
    }
    return (
        <Container  maxW="4xl">
        <Flex justify="space-evenly" bg="gray.300">
           <Box p="20px" bg="red.300">Box 1</Box>
           <Box p="20px" bg="green.300">Box 2</Box>
           <Box p="20px" bg="teal.300">Box 3</Box>
           <Box p="20px" bg="cyan.300">Box 4</Box>
        </Flex>
        <Flex as="nav">
            <Heading>LOGO</Heading>
            <Spacer/>

            <HStack spacing="20px">
                <Box sx={boxStyled}>Home</Box>
                <Box sx={boxStyled}>Contact</Box>
                <Box sx={boxStyled}>Blog</Box>
                <Box sx={boxStyled}>About</Box>    
            </HStack>
        </Flex>
        </Container>
    );
};

export default FlexLayout;