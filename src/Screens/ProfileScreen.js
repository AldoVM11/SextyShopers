import { Center, Heading, Image, Text, View } from "native-base";
import React from 'react'
import Colors from "../color";
import Tabs from "../components/Profile/Tabs";

function ProfileScreen() {
  return (
    <>
        <Center bg={Colors.main} pt={10} pb={6}>
          <Image source={require('../../assets/images/user.png')} alt="profile" w={24} h={24} resizeMode="cover" borderRadius={100}/>
          <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
            Admin Doe
          </Heading>
          <Text italic fontSize={10} color={Colors.white}>Joined Dec 13 2022
          </Text>
          </Center>
          {/* Tabs */}
          <Tabs></Tabs>
          
    </>
  )
}

export default ProfileScreen;