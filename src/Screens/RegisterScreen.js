import {Box, Button, Heading, Image, Input, Pressable, Text, VStack, View } from "native-base";
import React from 'react';
import Colors from "../color";
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

function RegisterScreen( {navigation}) {
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
          <Heading color={Colors.main}>Sign Up</Heading> 
          <VStack space={5} pt="6">
            {/* Username */}
            <Input
            InputLeftElement={
            <FontAwesome name="user" size={20} color={Colors.main} /> 
            }

            variant="underlined" 
            placeholder="User"
            w="70%" 
            pl={2}
            type="text"
            color={Colors.black} 
            borderBottomColor={Colors.underline}
            backgroundColor={Colors.deepestGray} opacity={60}
            placeholderTextColor={Colors.black}
            rounded={10}
            />
            {/* Email */}
            <Input
            InputLeftElement={
            <MaterialIcons name="email" size={20} color={Colors.main} /> 
            }
            variant="underlined" 
            placeholder="user@gmail.com" 
            w="70%" 
            pl={2}
            type="text"
            color={Colors.main} 
            backgroundColor={Colors.deepestGray} opacity={60}
            placeholderTextColor={Colors.black}
            rounded={10}
            />
            {/* Password */}
            <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.main} />
            }
            variant="underlined" 
            placeholder="*********" 
            w="70%" 
            type="password"
            pl={2}
            color={Colors.main} 
            backgroundColor={Colors.deepestGray} opacity={60}
            placeholderTextColor={Colors.black}
            rounded={10}
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
            onPress={() => navigation.navigate("Bottom")}
          >
            Sign Up
          </Button>
          <Button _pressed={{
              bg: Colors.main,
            }}
            my={0} 
            w="40%" 
            rounded={50} 
            bg={Colors.main}  onPress={() => navigation.navigate("Login")}>
            <Text color={Colors.white} >Login</Text>
          </Button>    
          </Box>
    </Box>
  );
}

export default RegisterScreen;