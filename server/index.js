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
      userReview : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
    },
    {
      username : "Michael",
      userDestination: "Director",
      userReview : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
    },
    {
      username : "Rachael",
      userDestination: "Executive",
      userReview : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
    },
    {
      username : "Ajay",
      userDestination: "Software Developer",
      userReview : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
    },
    {
      username : "Jay",
      userDestination: "Software Architect",
      userReview : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
    }
  ]
  return res.json({reviews : reviews});
});

app.listen(port, () => {
  console.log(`server started at ${port}`);
});