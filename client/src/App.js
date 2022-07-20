import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Heading from './components/Heading.component';
import CarouselFadeExample from './components/Carousel.component';
import Description from './components/Description.component';
import WhyChooseUs from './components/WhyChooseUs.component';
import CustomerExperienceQuality from './components/CustomerExperienceQuality.component';
import Reviews from './components/Reviews.component';
import { fetchReviews } from './actions/index';

function App() {
  const dispatch = useDispatch();
  const [review, setReviews] = useState([])
  useEffect(() => {
    // making the request from the server
    axios.get('reviews/')
      .then(res => {
          setReviews(res.data.reviews);
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
