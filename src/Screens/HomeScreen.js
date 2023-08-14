import { Box, Center, Heading, Image, Text, View } from "native-base";
import React from 'react'
import Colors from "../color";
import HomeProducts from "../components/HomeProducts";
import HomeSearch from "../components/HomeSearch";


function HomeScreen() {
  return (
    <Box flex={1} bgColor={Colors.deepGray} >
          <Center bg={Colors.main} pt={10} pb={0}>
          <Heading bold fontSize={30} isTruncated my={0} color={Colors.white}>
            Graph Sales
          </Heading>
          </Center>
        <HomeSearch />
        <HomeProducts />
    </Box>
  );
}

export default HomeScreen;