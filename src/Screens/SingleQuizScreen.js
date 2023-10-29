  import { Box, Heading, Text, ScrollView } from "native-base";
  import React, { useState, useEffect } from "react";
  import Colors from "../color";
  import QuizSection from "./QuizSection";
  import { useNavigation } from "@react-navigation/native";
  import questions from '../data/QuestionsQuiz'



  function SingleQuizScreen({ route }) {
    const [value, setValue] = useState(0);
    const navigation = useNavigation();
    const product = route.params;
  // UseEffect para imprimir los datos de route.params cuando el componente se monta


    
    return (
      <Box safeArea flex={1} bg={Colors.white}>
        <ScrollView pt={50} px={5} showsVerticalScrollIndicator={false}>
          <Heading bold fontSize={20} mb={2} lineHeight={22} textAlign="center">
            {product.name}
          </Heading>
          <Text lineHeight={24} fontSize={15} textAlign="justify">
            {product.description}
          </Text>
          <Box marginBottom={70}>
            <QuizSection  />
          </Box>
        </ScrollView>
      </Box>
    );
  }

  export default SingleQuizScreen;
  