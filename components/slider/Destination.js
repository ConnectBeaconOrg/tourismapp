"use client";
import { sliderProps } from "@/utility/sliderprops";
import Link from "next/link";
import Slider from "react-slick";

const Destination = () => {
  return (
    <Slider {...sliderProps.destination} className="destination-active">
      <div
        className="destination-item style-two"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img
            src="assets/images/destinations/destination-five1.jpg"
            alt="Destination"
          />
        </div>
        <div className="content">
          <h6>
            <Link href="destination-details">Emergency Numbers</Link>
          </h6>
          <span className="tours">Ambulance and Fire Services :  995  </span><br />
          <span className="tours">Police : 999 </span>
        </div>
      </div>
      <div
        className="destination-item style-two"
        data-aos="fade-up"
        data-aos-delay={50}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img
            src="assets/images/destinations/destination-five2.jpg"
            alt="Destination"
          />
        </div>
        <div className="content">
          <h6>
            <Link href="destination-details">Hospitals and Clinics</Link>
          </h6>
          <span className="tours"></span>
        </div>
      </div>
      <div
        className="destination-item style-two"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img
            src="assets/images/destinations/destination-five3.jpg"
            alt="Destination"
          />
        </div>
        <div className="content">
          <h6>
            <Link href="destination-details">Insurance and Costs</Link>
          </h6>
        </div>
      </div>
      <div
        className="destination-item style-two"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img
            src="assets/images/destinations/destination-five4.jpg"
            alt="Destination"
          />
        </div>
        <div className="content">
          <h6>
            <Link href="destination-details">Pharmacies</Link>
          </h6>
        </div>
      </div>
      <div
        className="destination-item style-two"
        data-aos="fade-up"
        data-aos-delay={150}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img
            src="assets/images/destinations/destination-five5.jpg"
            alt="Destination"
          />
        </div>
        <div className="content">
          <h6>
            <Link href="destination-details">Local Travel Insurance Providers </Link>
          </h6>
        </div>
      </div>

    </Slider>
  );
};
export default Destination;
