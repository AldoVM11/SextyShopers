import {
  Box,
  Flex,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import React from "react";
import Products from "../data/Products";
import Products1 from "../data/Products1";
import Colors from "../color";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";

function HomeProducts() {
  
  const navigation = useNavigation();
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
        marginTop={25}
      >
        {Products.map((product) => (
          <Pressable
          onPress={() => navigation.navigate("Single", product)}
            key={product._id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden"
          >
              <Heading size="sm" bold textAlign="center" marginBottom={5} marginTop={4}>
                {product.name}
              </Heading>
            <Image
              source={{ uri: product.image }}
              alt={product.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>

{/*               <Text fontSize={10} mt={1} isTruncated w={"full"}>
                {product.description}
              </Text> */}
            </Box>
          </Pressable>
        ))}
      </Flex>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
        marginTop={25}
      >
        {Products1.map((product) => (
          <Pressable
          onPress={() => navigation.navigate("Single", product)}
            key={product._id}
            w="100%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            pb={2}
            marginBottom={12}
            overflow="hidden"
          >
              <Heading size="sm" bold textAlign="center" marginBottom={5} marginTop={4}>
                {product.name}
              </Heading>
            <Image
              source={{ uri: product.image }}
              alt={product.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>

{/*               <Text fontSize={10} mt={1} isTruncated w={"full"}>
                {product.description}
              </Text> */}
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
