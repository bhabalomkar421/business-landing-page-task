import {Row, Col } from 'react-bootstrap';
import "../styles/customer.css";
import customer from "../assets/customerBlue.jpg";

const years = "5+";
const yearText = "Years of experience";

const clients = "500+";
const clientText = "Happy Customers";

const workers = "100%";
const workerText = "Quality Assurance";

const YearsCard = (props) => (
  <div className = "years-card"> 
      <img className = "year-card-icon" src={customer} alt="icon"></img>
      <div className = "year-card-number">
          <p className="year-number">{props.number}</p>
      </div>     
      <div className = "year-card-text">
          {props.text}
      </div>
  </div>
);

const CustomerExperienceQuality = () => (
  <div className = "years-clients-quality-background">
          <Row className = "years-arrangement">
              <Col md = {4} lg = {4} sm = {12} xs = {12}>
                  <YearsCard number = {clients} text = {clientText} />
              </Col>
              <Col md = {4} lg = {4} sm = {12} xs = {12}>
                  <YearsCard number = {years} text = {yearText} />
              </Col>
              <Col md = {4} lg = {4} sm = {12} xs = {12}>
                  <YearsCard number = {workers} text = {workerText} />
              </Col>
          </Row>
  </div>
);

export default CustomerExperienceQuality;