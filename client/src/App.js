import './App.css';
import Heading from './components/Heading.component';
import CarouselFadeExample from './components/Carousel.component';
import Description from './components/Description.component';
import WhyChooseUs from './components/WhyChooseUs.component';
import CustomerExperienceQuality from './components/CustomerExperienceQuality.component';
import Reviews from './components/Reviews.component';

function App() {
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
