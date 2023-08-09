import {Box, Button, Heading, Image, Input, Pressable, Text, VStack, View } from "native-base";
import React from 'react'
import Colors from "../color";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';


function LoginScreen({navigation}) {
  return (
    <Box flex={1} bg={Colors.black}>
        <Image 
        flex={1} 
        alt="Logo" 
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.png")}
        opacity={60}
        />
        <Box 
        w="full" 
        h="full" 
        position="absolute" 
        top="0" 
        px="6" 
        justifyContent="center">
          <Heading color={Colors.main}>Login</Heading> 
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
            placeholder="********" 
            w="70%" 
            type="password"
            pl={2}
            color={Colors.main} 
            borderBottomColor={Colors.underline}
            backgroundColor={Colors.deepestGray} opacity={60}
            placeholderTextColor={Colors.black}
            rounded={10}
            />
          </VStack>
          <Button 
            _pressed={{
              bg: Colors.Greener,
            }}
            my={30} 
            w="40%" 
            rounded={50} 
            bg={Colors.black}
            onPress={() => navigation.navigate("Bottom")}
            
          >
            Login
          </Button>
          <Button _pressed={{
              bg: Colors.Greener,
            }}
            my={0} 
            w="40%" 
            rounded={50} 
            bg={Colors.main}  onPress={() => navigation.navigate("Register")}>
            <Text color={Colors.white} >Sign Up</Text>
          </Button>   
          </Box>
    </Box>
  );
}

export default LoginScreen;