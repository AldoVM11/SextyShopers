import React, { useState } from "react";
import { ScrollView,View, Text, Button, TouchableOpacity } from "react-native";
import questions from '../data/QuestionsQuiz';
 // Assuming this is an array

// console.log('lo que trae questions:', questions);
function QuizSection({ route }) {
  const { questions } = route.params;

  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [badge, setBadge] = useState("");

  const [quizQuestions, setQuizQuestions] = useState(questions);


  const handleOptionSelect = (questionId, selectedOption) => {
    setQuizQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? { ...question, selectedAnswer: selectedOption }
          : question
      )
    );
  };

  const handleSubmitQuiz = () => {
    const newScore = quizQuestions.reduce((acc, question) => {
      if (question.selectedAnswer === question.correctAnswer) {
        return acc + 1;
      }
      return acc;
    }, 0);

    setScore(newScore);

    if (newScore / quizQuestions.length > 0.7) {
      setMessage("¡Felicidades! Pasaste el quiz.");
      setBadge("felicidades");
    } else {
      setMessage("Lo siento, no pasaste el quiz.");
      setBadge("perdedor");
    }
  };
  
  return (
  <ScrollView style={{ padding: 20, backgroundColor: "white" }}>
    <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" }}>Quiz</Text>
    {quizQuestions.map((question) => (
      <View key={question.id} style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>{question.question}</Text>
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleOptionSelect(question.id, option)}
            style={{
              borderWidth: 1,
              borderColor: "lightgray",
              padding: 10,
              margin: 5,
              backgroundColor: question.selectedAnswer === option ? "lightblue" : "white",
            }}
          >
            <Text style={{ fontSize: 14 }}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    ))}
    <Button title="Enviar respuestas" onPress={handleSubmitQuiz} />
    <Text style={{ fontSize: 16, marginTop: 20 }}>Puntaje: {score} / {quizQuestions.length}</Text>
    <Text style={{ fontSize: 16, marginTop: 20 }}>{message}</Text>
    {badge === "felicidades" && <Text style={{ fontSize: 16, marginTop: 10, color: "green", fontWeight: "bold" }}>¡Has ganado un badge de felicidades!</Text>}
    {badge === "perdedor" && <Text style={{ fontSize: 16, marginTop: 10, color: "red", fontWeight: "bold" }}>¡Has ganado un badge de perdedor!</Text>}
  </ScrollView>
);
}

export default QuizSection;
