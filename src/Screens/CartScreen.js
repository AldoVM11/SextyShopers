import { Box, Center, Heading, Image, ScrollView, Text} from "native-base";
import React from "react"
import Colors from "../color";
import { useNavigation } from "@react-navigation/native";
import Glossary from "../data/Glossary";

function CartScreen() {
  const navigation = useNavigation()
  return (
    
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
              <Center bg={Colors.main} pt={10} pb={6}>
          <Heading bold fontSize={30} isTruncated my={2} color={Colors.white}>
            Glosario
          </Heading>
          <Text italic fontSize={15} color={Colors.white}>Conceptos acerca de seguridad
          </Text>
          </Center>
    {Glossary.map((glossary) => (

    <Box safeArea flex={1} bg={Colors.white} marginTop={5} rounded={10}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Heading bold fontSize={20} mb={2} lineHeight={22} textAlign='center' marginTop={5}>
          {glossary.name}
        </Heading>
        <Text lineHeight={24} fontSize={15} textAlign='justify' >
          {glossary.description}
          
          </Text>
      </ScrollView>
      
    </Box>    
    ))}
    </ScrollView>
    );
}

export default CartScreen;