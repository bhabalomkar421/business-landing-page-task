import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'; 
import "../styles/whychooseus.css";
import customer from "../assets/customer.jpg";
import money from "../assets/money.jpg";
import time from "../assets/time.jpg";

const WhyChooseUs = () => (
    <div className="whychooseus">
        <div className='whychooseTitle'>
            <h2 className="title1">Why Choose Us ?</h2>
            <p className="sub-title1">Choose us and have the best car service</p>
        </div>
        <div className="features">
            <img src={customer} className="icons" alt="icon"></img>
            <div> 
                <h3 className="feature-title">Customer Satisfaction</h3>
                <p className="feature-subtitle">Customer satisfaction is a measure of how well your products, services, and overall customer experience meet customer expectations.</p>
            </div>
        </div>
        <div className="features">
            <img src={money} className="icons" alt="icon"></img>
            <div>
                <h3 className="feature-title money">Great value for money</h3>
                <p className="feature-subtitle">Value for money has been defined as a utility derived from every purchase or every sum of money spent.</p> 
            </div>
        </div>
        <div className="features">
            <img src={time} className="icons" alt="icon"></img>
            <div>
                <h3 className="feature-title">Timely service and delivery</h3>
                <p className="feature-subtitle">Timely service to customers, means that a company provides them with many and easily accessible routes of communication</p> 
            </div>
        </div>
        <div className="explore">
            <Link to="/pricing">
                <Button variant="primary" size="lg">
                    Explore our offerings
                </Button>
            </Link>
        </div>
    </div>
);


export default WhyChooseUs;
