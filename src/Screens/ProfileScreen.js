import { Box, Center, Heading, Image, Text, View, ScrollView} from "native-base";
import React from 'react'
import Colors from "../color";
import QuizSection from "./QuizSection";
import Tabs from "../components/Profile/Tabs";



function ProfileScreen() {
  return (
    <>
        <Center bg={Colors.white} pt={10} pb={6}>
          {/* <Image source={require('../../assets/images/user.png')} alt="profile" w={24} h={24} resizeMode="cover" borderRadius={100}/> */}
          <Heading bold fontSize={25} isTruncated my={2} color={Colors.main}>
            Quiz Test
          </Heading>
          {/* <Text italic fontSize={10} color={Colors.white}>Joined Dec 13 2025
          </Text> */}

          
          </Center>
          
          {/* Tabs */}
          <Tabs></Tabs>
          
    </>
  )
}

export default ProfileScreen;