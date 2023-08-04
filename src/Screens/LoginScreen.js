import {Box, Button, Heading, Image, Input, Text, VStack, View } from "native-base";
import React from 'react'
import Colors from "../color";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from "react-native";


function LoginScreen() {
  return (
    <Box flex={1} bg={Colors.black}>
        <Image 
        flex={1} 
        alt="Logo" 
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.png")}
        />
        <Box 
        w="full" 
        h="full" 
        position="absolute" 
        top="0" 
        px="6" 
        justifyContent="center">
          <Heading>Login</Heading> 
          <VStack space={5} pt="6">
            <Input
            InputLeftElement={
            <MaterialIcons name="email" size={20} color={Colors.main} /> 
            }
            variant="underlined" 
            placeholder="user@gmail.com" 
            w="70%" 
            pl={2}
            color={Colors.main} 
            borderBottomColor={Colors.underline}
            />
            {/* Password */}
            <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.main} />
            }
            variant="underlined" 
            placeholder="********" 
            w="70%" 
            type="password"
            pl={2}
            color={Colors.main} 
            borderBottomColor={Colors.underline}
            />
          </VStack>
          <Button 
            _pressed={{
              bg: Colors.main,
            }}
            my={30} 
            w="40%" 
            rounded={50} 
            bg={Colors.main}
          >
            Login
          </Button>
          <Pressable mt={4}>
            <Text color={Colors.gray} rounded={50} w="40%" textAlign="center"> Sign Up</Text>
          </Pressable>
        </Box>
    </Box>
  );
}

export default LoginScreen;