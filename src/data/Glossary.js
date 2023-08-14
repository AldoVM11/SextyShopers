const glossary = [
    {
      _id: "1",
      name: "Linear Regression",
      description:
        "Linear regression is an algorithm that provides a linear relationship between an independent variable and a dependent variable to predict the outcome of future events. It is a statistical method used in data science and machine learning for predictive analysis.",
    },
    {
        _id: "2",
        name: "Mean Squared Error",
        description:
          "The mean squared error (MSE) tells you how close a regression line is to a set of points. It does this by taking the distances from the points to the regression line (these distances are the “errors”) and squaring them. The squaring is necessary to remove any negative signs. It also gives more weight to larger differences. It’s called the mean squared error as you’re finding the average of a set of errors. The lower the MSE, the better the forecast.",
      },
      {
        _id: "3",
        name: "Correlation",
        description:
          "Correlation is a type of association between two numerical variables, specifically it evaluates the trend (increasing or decreasing) in the data. Two variables are associated when one variable gives us information about the other. Conversely, when there is no association, the increase or decrease of one variable tells us nothing about the behavior of the other variable. Two variables are correlated when they show an increasing or decreasing trend",
      },
      {
        _id: "4",
        name: "Differentation",
        description:
          "Differentiation means the rate of change of one quantity with respect to another. The speed is calculated as the rate of change of distance with respect to time. This speed at each instant is not the same as the average calculated. Speed is the same as the slope, which is nothing but the instantaneous rate of change of the distance over a period of time.",
      },
      {
        _id: "5",
        name: "Standarization",
        description:
          "Standardization is the process of putting different variables on the same scale. This process allows you to compare scores between different types of variables. Typically, to standardize variables, you calculate the mean and standard deviation for a variable. Then, for each observed value of the variable, you subtract the mean and divide by the standard deviation",
      },
      {
        _id: "6",
        name: "Recurrent Neural Network",
        description:
          "Recurrent Neural Network(RNN) is a type of Neural Network where the output from the previous step is fed as input to the current step. In traditional neural networks, all the inputs and outputs are independent of each other, but in cases when it is required to predict the next word of a sentence, the previous words are required and hence there is a need to remember the previous words. Thus RNN came into existence, which solved this issue with the help of a Hidden Layer.",
      },
      {
        _id: "7",
        name: "Mean Absolute Error",
        description:
          "Mean Absolute Error (MAE) is a measure of the average size of the mistakes in a collection of predictions, without taking their direction into account. It is measured as the average absolute difference between the predicted values and the actual values and is used to assess the effectiveness of a regression model.",
      },
];

export default glossary;