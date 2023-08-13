const products = [
  {
    _id: "1",
    name: "Correlation Between Day to Day",
    image: "https://drive.google.com/uc?export=view&id=1-07kkt8dpBlpxVbtZCmsUu-UIGSt4tHT",
    description:
      "Autocorrelation of Sales Between Today and 28 Previous Days. The correlation score from 0–1 shows how highly correlated past days are with the current day 0. Due to weekly seasonality, correlation spikes every 7 days far into the past. The blue range represents confidence, and any day that scores within the threshold is considered not correlate",
    /*         price: "First Sales of the Month",
     */ countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    _id: "2",
    name: "Partitioned Sales Over the Time",
    image: "https://drive.google.com/uc?export=view&id=1BTtQA_9GuLNk--pEKHhMiQuxKiC5IrJ0",
    description:
      "This graph represents the sales made from 2:00 to 5:59 pm over all the days that the restaurant was served. It can be seen how there were days in which there is no direct sale.",
    /*         price: "Comparision with other restaurants",
     */ countInStock: 10,
    rating: 2,
    numReviews: 3,
  },
  {
    _id: "3",
    name: "Daily Differenced Correlation",
    image: "https://drive.google.com/uc?export=view&id=1-0CEyyflbU-TAGTLbXDVstMAk9hJihhK",
    description:
      "Differencing daily has not eliminated all correlations between days, and a negative correlation is introduced. It can be seen that there is a weekly correlation that has not yet been eliminated. This correlation outside the confidence zone suggests that the seasonality of the data has been completely removed.",
    /*         price: "Up's & Down's of the Company",
     */ countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    _id: "4",
    name: "Daily Differenced Sales",
    image: "https://drive.google.com/uc?export=view&id=1-5O4Kf9jSzsVdsdh0oYGCgc1Rc3BmsO4",
    description:
      "Graph generated after applying the differentiation technique to restructure the data and be able to work with them. The sales generated are plotted for each instance in the data set where there is a less obvious upward trend.",
    /*         price: "Comparision with previous years",
     */ countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
       {
        _id: "5",
        name: "Weekly Differenced Correlation",
        image:
            "https://drive.google.com/uc?export=view&id=1-6bW94BBKO20QmHUoKVv2ATFcSOPhI6M",
        description:
            "Differencing weekly has removed most correlation between the days. Every seven days does give some negative correlation, but it quickly falls within the confidence threshold. All but seven days in the past have been uncorrelated to the point that they can be considered 'uncorrelated.' With this, the models will not make assumptions about seasonality, which makes prediction not dominated by average results.",
        price: 89,
        countInStock: 3,
        rating: 4,
        numReviews: 4,
    },
    {
        _id: "6",
        name: "Weekly Differenced Sales",
        image:
            "https://drive.google.com/uc?export=view&id=1-MqSki2LAPtrJPxg4kYKqaXQf8Ffpzsc",
        description:
            "This graph shows how the data looks after applying weekly diff, in which the weekly diff sales are plotted for each instance in the data set.",
        price: 89,
        countInStock: 0,
        rating: 4,
        numReviews: 4,
    }, 

];

export default products;
