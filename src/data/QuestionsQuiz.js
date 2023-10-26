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


  export default QuestionsQuiz;