import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Heading from './components/Heading.component';
import CarouselFadeExample from './components/Carousel.component';
import Description from './components/Description.component';
import WhyChooseUs from './components/WhyChooseUs.component';
import CustomerExperienceQuality from './components/CustomerExperienceQuality.component';
import Reviews from './components/Reviews.component';
import { fetchReviews } from './actions/index';

function App() {
  var myState = useSelector((state) => {
    console.log(state);
    return state.fetchReviews;
  });
  const dispatch = useDispatch();
  const [review, setReviews] = useState([])
  useEffect(() => {
    axios.get('reviews/')
      .then(res => {
          // console.log(res.data.reviews);
          setReviews(res.data.reviews);
          // console.log(myState);
          console.log(fetchReviews(res.data.reviews));
          dispatch(fetchReviews(res.data.reviews));
      })
      .catch(e => console.log(e));

  }, []);
  
  

  return (
    <div className="App">
      <Heading />
      <CarouselFadeExample />
      <Description />
      <WhyChooseUs />
      <CustomerExperienceQuality />
      <Reviews />
    </div>
  );
}

export default App;
