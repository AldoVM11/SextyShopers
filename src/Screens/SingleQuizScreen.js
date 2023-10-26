import { Box, HStack, Heading, Image, ScrollView, Spacer, Text } from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Rating from "../components/Rating";
import NumericInput from "react-native-numeric-input";
import Buttone from "../components/Buttone";
import Review from "../components/Review";
import QuizSection from "./QuizSection";
import { useNavigation } from "@react-navigation/native";
import YoutubeIframe from "react-native-youtube-iframe";





function SingleQuizScreen({route}) {
  const [value, setValue] = useState(0);
  const navigation = useNavigation()
  const product = route.params
  return (
    
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView  pt={50} px={5} showsVerticalScrollIndicator={false}>
        
        <Heading bold fontSize={20} mb={2} lineHeight={22} textAlign='center'>
          {product.name}
        </Heading>
        <Text lineHeight={24} fontSize={15} textAlign='justify' >
          {product.description}
          </Text> 

          <Box marginBottom={70}>
          <QuizSection />
          </Box>

           
                    
      </ScrollView>
    </Box>
  );
}

export default SingleQuizScreen;
