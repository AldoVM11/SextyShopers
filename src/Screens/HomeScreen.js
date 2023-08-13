import { Box, Image, Text, View } from "native-base";
import React from 'react'
import Colors from "../color";
import HomeProducts from "../components/HomeProducts";
import HomeSearch from "../components/HomeSearch";


function HomeScreen() {
  return (
    <Box flex={1} bgColor={Colors.deepGray} >
      
        <HomeSearch />
        <HomeProducts />
    </Box>
  );
}

export default HomeScreen;