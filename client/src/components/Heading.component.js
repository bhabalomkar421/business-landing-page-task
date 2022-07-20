import Typewriter from "typewriter-effect";
import locationicon from "../assets/location-icon.jpg";
import "../styles/heading.css";

const Heading = () => (
    <div>
      <div className="location">
        <span>
          <img src={locationicon} alt="location icon" width={"40px"} height={"45px"}></img>
        </span>
        <span>
          Bellandur, Banglore
        </span>
      </div>
      <div className="title">
        <h2>Drive and Shine</h2>
        <p className="underline"></p>
        <div className="subtitle">
          <Typewriter
            onInit={(typewriter)=> {
            typewriter
            .typeString("Car wash")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Car wash")
            .start();
            }}
          />
        </div>
        <p className="subtitle"></p>
      </div>
    </div>
);


export default Heading;
