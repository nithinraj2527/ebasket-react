import Carousel from "react-bootstrap/Carousel";
import "./Head.css";
import { BestDealsContainer } from "../components/BestDealsContainer";
import { Button } from "react-bootstrap";

export function Home() {
  return (
    <div className="home-container">
      <div className="carousal-conatiner">
        <Carousel>
          <Carousel.Item interval={600}>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/86037b95d956d960.jpg?q=50"
              width={"100%"}
              height={"100%"}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={900}>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/b3153d7adebb1fe1.jpg?q=50"
              width={"100%"}
              height={"100%"}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>{" "}
      </div>
      <br />
      <div>
        <div className="best-deals-container">
          <div
            className="bestdeals-container"
            style={{
              textAlign: "center",
              backgroundImage:
                "url('https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0px bottom",
              width: "25%",
            }}
          >
            <h2
              style={{
                marginTop: "20px",
                fontStrength: "400px",
              }}
            >
              Best Of Electronics
            </h2>
            <Button variant="primary" className="text">
              View All
            </Button>
          </div>
          <BestDealsContainer />
        </div>
      </div>
    </div>
  );
}
