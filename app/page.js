import Counter from "@/components/Counter";
import DiningComponent from "@/components/DiningComponent";
import PopularLocations from "@/components/PopularLocations";
import SearchFilter from "@/components/SearchFilter";
import SectionTitle from "@/components/SectionTitle";
import Destination from "@/components/slider/Destination";
import HotDeals from "@/components/slider/HotDeals";
import Subscribe from "@/components/Subscribe";
import TransportComponent from "@/components/TransportComponent";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
const page = () => {
  return (
    <ReveloLayout>
      {/* Hero Area Start */}
      <section
        className="hero-area-three bgs-cover overflow-hidden pt-130 pb-100 br-15 rel z-2"
        style={{ backgroundImage: "url(assets/images/hero/hero-three-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div
                className="hero-content-three counter-text-wrap text-white text-center mb-125 rmb-65"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                {/* <span className="subtitle mb-15">
                  Ravelo Tours &amp; Travel
                </span> */}
                <h1>Explore and Start yours Journey With Singapore</h1>

              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div
            className="shape one"
            data-aos="fade-right"
            data-aos-delay={200}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/shapes/hero1.png" alt="Shape" />
          </div>
          <div
            className="shape two"
            data-aos="fade-down"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/shapes/hero2.png" alt="Shape" />
          </div>
          <div
            className="shape three"
            data-aos="fade-down"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/shapes/hero3.png" alt="Shape" />
          </div>
          <div
            className="shape four"
            data-aos="fade-left"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/shapes/hero4.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Features Area start */}

      {/* Features Area end */}
      {/* Features Tours Area start */}
      <section className="features-tour-area pt-50 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-20"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Popular Tourist Spots"} subtitle2="Popular tourist spots in Singapore along with their details and official websites" />
              </div>

            </div>
          </div>
          <div className="row justify-content-center">
            <PopularLocations limit={8} />
          </div>
          <div className="hotel-more-btn text-end mb-10" style={{ marginTop: "-20px" }}>
            <Link href="/tourist-spots" className="theme-btn style-two">
              <span data-hover="View All Locations">View All Locations</span>
              <i className="fal fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
      {/* Features Tours Area end */}
      {/* CTA Three Area start */}
      <section className="cta-three-area rel z-1">
        <div className="container">
          <div
            className="cta-three-inner bgc-black overflow-hidden br-10"
            style={{
              backgroundImage:
                "url(assets/images/newsletter/newsletter-bg-lines.png)",
            }}
          >
            <div className="row no-gap">
              <div className="col-lg-6 rel z-1">
                <div
                  className="cta-three-content text-white"
                  data-aos="zoom-in-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title counter-text-wrap mb-45">
                    <SectionTitle
                      title={"Culture and Social Norms of Singapore"}
                    />
                  </div>
                  <Link
                    href="culture"
                    className="theme-btn style-two bgc-secondary"
                  >
                    <span data-hover="Explore Tours">Explore</span>
                    <i className="fal fa-arrow-right" />
                  </Link>
                </div>
                <div className="cta-three-shape">
                  <img src="assets/images/shapes/cta.png" alt="Shape" />
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div
                  className="cta-three-image bgs-cover"
                  style={{
                    backgroundImage:
                      "url(assets/images/newsletter/newsletter-right.jpg)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Three Area end */}

      {/* CTA Area start */}
      <section className="cta-area pt-50 rel z-1">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="section-title text-center counter-text-wrap mb-50"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <SectionTitle title={"Singapore Dining Options"} subtitle2="Singapore is a food lover’s paradise, offering a diverse array of local dishes that reflect its multicultural heritage. " />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <DiningComponent limit={3} />
          </div>
        </div>
      </section>
      {/* CTA Area end */}
      {/* Hot Deals Area start */}
      <section className="hot-deals-area pt-20 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Transport"} />
              </div>
            </div>
          </div>
          <TransportComponent />
          <div className="hotel-more-btn text-end mb-10" style={{ marginTop: "-20px" }}>
            <Link href="transport" className="theme-btn style-two">
              <span data-hover="View All">View All</span>
              <i className="fal fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
      {/* Hot Deals Area end */}
      {/* Benefit Area start */}
      <section className="benefit-area mt-40 rel z-1">
        <div className="container">
          <div className="benefit-area-inner py-100">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-4 col-lg-5">
                <div
                  className="benefit-content-part text-white rmb-55"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title counter-text-wrap mb-40">
                    <SectionTitle
                      title={"Singapore Laws and Regulations"}
                      subtitle2=""
                    />
                  </div>
                  <p>
                    When visiting Singapore, it is crucial for tourists to be aware of certain laws and restrictions to ensure a smooth and enjoyable stay.
                  </p>
                  <Link
                    href="about"
                    className="theme-btn style-two bgc-secondary mt-25"
                  >
                    <span data-hover="Learn More Us">Learn More</span>
                    <i className="fal fa-arrow-right" />
                  </Link>

                </div>
              </div>
              <div className="col-lg-7">
                <div className="benefit-image-part">
                  <div
                    className="image-one"
                    data-aos="fade-down"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/benefit/benefit1.png"
                      alt="Benefit"
                    />
                  </div>
                  <div
                    className="image-two"
                    data-aos="fade-up"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/benefit/benefit2.png"
                      alt="Benefit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefit Area end */}
      <section className="destinations-area pt-35 pb-30 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Medical Emergency in Singapore"}
                  subtitle2="Singapore is known for its high-quality healthcare system, and tourists can rest assured that they will have access to excellent medical services in case of an emergency. " />
              </div>
            </div>
          </div>
          <Destination />
          <div className="hotel-more-btn text-end mb-10" style={{ marginTop: "-20px" }}>
            <Link href="about" className="theme-btn style-two">
              <span data-hover="Contacts">View All</span>
              <i className="fal fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
      {/* Blog Area start */}
      <section className="blog-area pt-20 pb-20 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-40"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={30}
              >
                <SectionTitle title={"Read Latest News & Blog"} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-lg-6">
              <div
                className="blog-item style-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={30}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-two1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 Feb 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      Ultimate Guide to Planning Your Dream Vacation
                    </Link>
                  </h5>
                  <Link href="blog-details" className="read-more">
                    Read More <i className="fal fa-angle-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6">
              <div
                className="blog-item style-two"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-two2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 Feb 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      Ultimate Guide to Planning Your Dream Vacation
                    </Link>
                  </h5>
                  <Link href="blog-details" className="read-more">
                    Read More <i className="fal fa-angle-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6">
              <div
                className="blog-item style-two"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={30}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-two3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 Feb 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="blog-details">
                      Ultimate Guide to Planning Your Dream Vacation
                    </Link>
                  </h5>
                  <Link href="blog-details" className="read-more">
                    Read More <i className="fal fa-angle-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hotel-more-btn text-end mb-10" style={{ marginTop: "-20px" }}>
            <Link href="blogs" className="theme-btn style-two">
              <span data-hover="Blogs">View All</span>
              <i className="fal fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
      {/* Blog Area end */}
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};
export default page;
