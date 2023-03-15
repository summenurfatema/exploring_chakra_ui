import { Box, Grid, GridItem, Spacer } from "@chakra-ui/react";


const GridLayout = () => {
    return (
        <Box as='section' px="20px">
        <Grid
        h='200px'
      
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
        px="15px"
      >
        <GridItem rowSpan={2} colSpan={1} bg='tomato' />
        <GridItem colSpan={4} bg='tomato' />
        <GridItem colSpan={2} bg='orange.300' />
        <GridItem colSpan={2} bg='orange.300' />
       
      </Grid>
      
  <Grid
    my="30px"
    templateRows="repeat(2, 1fr)"
    templateColumns={{
      base: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(4, 1fr)",
    }}
    gap={4}
  >
    <GridItem bg="blue.300" h="100px" >Box</GridItem>
    <GridItem bg="blue.300" h="100px" >Box</GridItem>
    <GridItem bg="blue.300" h="100px" >Box</GridItem>
    <GridItem bg="blue.300" h="100px" >Box</GridItem>
    <GridItem bg="blue.300" h="100px" >Box</GridItem>
    <GridItem bg="blue.300" h="100px" >Box</GridItem>
  </Grid>
      </Box>
    );
};

export default GridLayout;