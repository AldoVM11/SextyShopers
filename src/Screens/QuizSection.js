  import React, { useState } from "react";
  import { View, Text, Button, TouchableOpacity } from "react-native";

  function QuizSection() {
    const [questions, setQuestions] = useState([
      {
        id: 1,
        question: "¿Cuál es la capital de Francia?",
        options: ["Londres", "Berlín", "París", "Madrid"],
        correctAnswer: "París",
        selectedAnswer: null,
      },
      {
        id: 2,
        question: "¿Cuál es el color del cielo en un día despejado?",
        options: ["Verde", "Rojo", "Azul", "Amarillo"],
        correctAnswer: "Azul",
        selectedAnswer: null,
      },
    ]);

    const [score, setScore] = useState(0);
    const [message, setMessage] = useState("");
    const [badge, setBadge] = useState(""); // Estado para el badge

    const handleOptionSelect = (questionId, selectedOption) => {
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

      setScore(newScore);

      if (newScore / questions.length > 0.7) {
        setMessage("¡Felicidades! Pasaste el quiz.");
        setBadge("felicidades");
      } else {
        setMessage("Lo siento, no pasaste el quiz.");
        setBadge("perdedor");
      }
    };

    return (
      <View>
        <Text  style={{marginTop: 15, fontSize: 18, fontWeight: "bold" }}></Text>
        {questions.map((question) => (
          <View  key={question.id}>
            <Text>{question.question}</Text>
            {question.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleOptionSelect(question.id, option)}
                style={{
                  borderWidth: 1,
                  borderColor: "lightgray",
                  padding: 10,
                  margin: 5,
                  backgroundColor:
                    question.selectedAnswer === option ? "lightblue" : "white",
                }}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <Button title="Enviar respuestas" onPress={handleSubmitQuiz} />
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Puntaje: {score} / {questions.length}
        </Text>
        <Text>{message}</Text>
        {badge === "felicidades" && <Text>¡Has ganado un badge de felicidades!</Text>}
        {badge === "perdedor" && <Text>¡Has ganado un badge de perdedor!</Text>}
      </View>
    );
  }

  export default QuizSection;
