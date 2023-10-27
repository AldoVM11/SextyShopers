import { Box, Flex, Heading, Pressable } from 'native-base';
import React from 'react';
import Products1 from '../../data/Products1';
import Colors from '../../color';
import { useNavigation } from '@react-navigation/native';
import questions from '../../data/QuestionsQuiz'; // Asegúrate de que la importación sea correcta

const Profile = () => {
  const navigation = useNavigation();

  // Define una función para cargar preguntas por sección
  const loadQuestionsBySection = (section) => {
     console.log("Section seleccionada:", section);
    if (!Array.isArray(questions)) {
      console.error('La variable "questions" no es una matriz válida.');
      return;
    }

    // Filtra las preguntas por la sección seleccionada
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
