const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({page : "Homepage"});
});

// API to fetch reviews of the customers
app.get('/reviews', (req, res) => {
  const reviews = [
    {
      username : "John",
      userDestination: "Manager",
      userReview : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      username : "Michael",
      userDestination: "Director",
      userReview : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      username : "Rachael",
      userDestination: "Executive",
      userReview : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      username : "Ajay",
      userDestination: "Software Developer",
      userReview : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      username : "Jay",
      userDestination: "Software Architect",
      userReview : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    }
  ]
  return res.json({reviews : reviews});
});

app.listen(port, () => {
  console.log(`server started at ${port}`);
});