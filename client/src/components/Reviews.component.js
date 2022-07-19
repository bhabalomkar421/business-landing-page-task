import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-elastic-carousel';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Logo from '../assets/customer.jpg';
import "../styles/reviews.css";

const ReviewCard = (props) => (
    <div className = "review-card">
        <Card>
            <img src = {Logo} className = "review-card-image" />
            <Card.Body>
            <Card.Title>{props.username}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.userDestination}</Card.Subtitle>
            <Card.Text>
                {props.userReview}
            </Card.Text>
            </Card.Body>
        </Card>
    </div>
);

class Reviews extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          reviews : []
        };
        this.breakPoints = [
          { width: 1, itemsToShow: 1 },
          { width: 550, itemsToShow: 2, itemsToScroll: 2 },
          { width: 850, itemsToShow: 3 },
          { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
          { width: 1450, itemsToShow: 5 },
          { width: 1750, itemsToShow: 6 },
        ]
    }
    componentDidMount(){
      axios.get('reviews/')
      .then(res => {
        console.log(res.data.reviews);
        if(res){
          this.setState({ reviews : res.data.reviews });
        }
      })
      .catch(e => console.log(e));
    }
    render(){
        return (
            <div className="reviews">
                <h2>What our clients says</h2>
                <Carousel breakPoints={this.breakPoints}>
                    {
                      this.state.reviews && 
                      this.state.reviews.map(review => (
                        <ReviewCard username={review.username} userDestination={review.userDestination} userReview = {review.userReview} />
                      ))
                    } 
                </Carousel>
                <div className='explore-btn'>
                  <Button variant="primary" size="lg">
                      Explore our offerings
                  </Button>
                </div>
            </div>
        )
    }
}

export default Reviews;
