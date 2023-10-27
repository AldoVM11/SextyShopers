import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Button } from "react-native"; // Import Text, View, and Button from react-native
import questionsData from "../data/QuestionsQuiz"; // Import your questions data

function QuizSection({ sectionName }) {
  const [questions, setQuestions] = useState([]);
  const navigation = useNavigation();
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [badge, setBadge] = useState("");

  useEffect(() => {
    console.log("sectionName:", sectionName); // Log sectionName
    // Filter questions based on the section name
    const filteredQuestions = questionsData.filter(
      (question) => question.section === sectionName
    );
    console.log("filteredQuestions:", filteredQuestions); // Log filteredQuestions
    setQuestions(filteredQuestions);
  }, [sectionName]);

  const handleOptionSelect = (questionId, selectedOption) => {
    console.log("Question ID:", questionId);
    console.log("Selected Option:", selectedOption);
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? { ...question, selectedAnswer: selectedOption }
          : question
      )
    );
  };

  const handleSubmitQuiz = () => {
    const newScore = questions.reduce((acc, question) => {
      if (question.selectedAnswer === question.correctAnswer) {
        return acc + 1;
      }
      return acc;
    }, 0);

    console.log("New Score:", newScore);

    setScore(newScore);

    if (newScore / questions.length > 0.7) {
      setMessage("¡Felicidades! Pasaste el quiz.");
      setBadge("felicidades");
    } else {
      setMessage("Lo siento, no pasaste el quiz.");
      setBadge("perdedor");
    }

    // You can navigate to the next screen here
    // Example: navigation.navigate('NextScreenName', { score: newScore });
  };

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Preguntas de la sección {sectionName}
      </Text>
      {questions.map((question) => (
        <View key={question.id}>
          <Text style={{ fontSize: 16 }}>{question.question}</Text>
          {question.options.map((option, index) => (
            <Button
              key={index}
              title={option}
              onPress={() => handleOptionSelect(question.id, option)}
              color={
                question.selectedAnswer === option ? "lightblue" : "white"
              }
            />
          ))}
        </View>
      ))}
      <Button
        title="Enviar respuestas"
        onPress={handleSubmitQuiz}
      />
      <Text>
        Puntaje: {score} / {questions.length}
      </Text>
      <Text>{message}</Text>
      {badge === "felicidades" && (
        <Text>¡Has ganado un badge de felicidades!</Text>
      )}
      {badge === "perdedor" && (
        <Text>¡Has ganado un badge de perdedor!</Text>
      )}
    </View>
  );
}

export default QuizSection;
