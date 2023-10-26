
import {Flex, Box, Pressable, Heading, Image,navigation ,Center, FormControl, Input, ScrollView, Text, VStack } from 'native-base'
import React from 'react'
import Products1 from "../../data/Products1"
import Colors from '../../color';
import Buttone from '../Buttone'
import QuizSection from '../../Screens/QuizSection';
import { useNavigation } from "@react-navigation/native";



const Profile = () => {

  const navigation = useNavigation();
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
        marginTop={25}
      >
        {Products1.map((product1) => (
          <Pressable
          onPress={() => navigation.navigate("quiz", product1)}
            key={product1._id}
            w="100%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            marginLeft={0}
            marginBottom={10}
            overflow="hidden"
          >
              <Heading size="sm" bold textAlign="center" marginBottom={5} marginTop={4}>
                {product1.name}
              </Heading>
            <Box px={4} pt={1}>
            </Box>
          </Pressable>
        ))}
      </Flex>
    </Box>
  );
}

export default Profile