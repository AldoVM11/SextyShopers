import { Box, Flex, Heading, Pressable } from 'native-base';
import React, { useState } from 'react';
import Products1 from '../../data/Products1';
import Colors from '../../color';
import { useNavigation } from '@react-navigation/native';
import questions from '../../data/QuestionsQuiz';

const Profile = () => {
  const navigation = useNavigation();

  // Define un estado para almacenar las preguntas filtradas
  // const [filteredQuestions, setFilteredQuestions] = useState([]);

  // Define una función para cargar preguntas por sección y guardarlas en el estado
  // const loadQuestionsBySection = (section) => {
  //   if (!Array.isArray(questions)) {
  //     console.error('La variable "questions" no es una matriz válida.');
  //     return;
  //   }

  //   // Filtra las preguntas por la sección seleccionada
  //   const selectedQuestions = questions.filter((question) => question.section === section);

  //   if (selectedQuestions.length > 0) {
  //     // Guarda las preguntas filtradas en el estado
  //     setFilteredQuestions(selectedQuestions);

  //     // Navega a la pantalla de QuizSection con las preguntas filtradas
  //     navigation.navigate('QuizSection', { questions: selectedQuestions });
  //   } else {
  //     alert('No se encontraron preguntas para esta sección: ' + section);
  //   }
  // };


const loadQuestionsBySection = (section) => {
  if (!Array.isArray(questions)) {
    console.error('La variable "questions" no es una matriz válida.');
    return;
  }

  const selectedQuestions = questions.filter((question) => question.section === section);

  if (selectedQuestions.length > 0) {
    navigation.navigate('QuizSection', { questions: selectedQuestions });
  } else {
    alert('No se encontraron preguntas para esta sección: ' + section);
  }
};

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
            key={product1._id}
            w="100%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            marginLeft={0}
            marginBottom={10}
            overflow="hidden"
            onPress={() => loadQuestionsBySection(product1.section)}
          >
            <Heading size="sm" bold textAlign="center" marginBottom={5} marginTop={4}>
              {product1.name}
            </Heading>
          </Pressable>
        ))}
      </Flex>
    </Box>
  );
};

export default Profile;
