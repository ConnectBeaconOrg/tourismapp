"use client"
import Banner from "@/components/Banner";
import Counter from "@/components/Counter";
import SectionTitle from "@/components/SectionTitle";
import Client from "@/components/slider/Client";
import Testimonial from "@/components/slider/Testimonial";
import ReveloLayout from "@/layout/ReveloLayout";
import { cultureAndSocialNorms, diningOptions } from "@/utility/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

const RenderOptions = ({ data }) => {
    return <section className="cta-three-area py-30 rel z-1">
        <div className="container">
            <div
                className="cta-three-inner overflow-hidden br-10"

            >
                <div className="row no-gap">
                    <div className="col-lg-8 rel z-1">
                        <div

                            data-aos="zoom-in-right"
                            data-aos-duration={500}
                            data-aos-offset={20}
                        >
                            <div style={{ textAlign: 'justify' }}>
                                <h6 >{data.name}</h6>
                            </div>
                            <p>
                                {data.description}
                            </p>
                            {data.location &&
                                <p>
                                    <span className="location">
                                        <i className="fal fa-map-marker-alt" /> {data.location}
                                    </span>
                                </p>
                            }

                        </div>

                    </div>
                    <div
                        className="col-lg-4"
                        data-aos="fade-left"
                        data-aos-duration={1500}
                        data-aos-offset={50}
                    >
                        <div className="image">
                            <img src={data.image} alt="Tour" />
                        </div>
                    </div>
                </div>


                {data.NotableDishes && <div className="row no-gap"><h4>Notable Dishes</h4><br />
                    <p>{data.NotableDishes}</p> </div>}
                {data.notableSpots && <div className="row no-gap"><h4>Notable Spots</h4><br />
                    {data.notableSpots.map(spots => <RenderNotableSpots key={spots.name} data={spots} />)} </div>}

            </div>
        </div>
    </section>
}

const RenderNotableSpots = ({ data }) => {
    return (<div >
        <div className="py-20">
            <h4 >#{data.name}</h4>
            <span>{data.description}</span>
        </div>
    </div>)
}

const Page = () => {
    // Function to scroll to an element smoothly
    const scrolltoHash = function (element_id) {
        const element = document.getElementById(element_id);
        var headerOffset = 180; // Offset to account for header height
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window?.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            // Change this value to decide when to toggle sticky
            const threshold = 582;

            if (scrollTop > threshold) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <ReveloLayout>
            <Banner pageTitle={"Singapore Dining Options"} />
            {/* About Area start */}
            <section className="about-area-two pt-30 rel z-1">
                <div className="container">
                    <div className="row justify-content-between">
                        <p>Singapore is a food lover’s paradise, offering a diverse array of local dishes that reflect its multicultural heritage. The city is famous for its hawker centres, fine dining restaurants, and vibrant food culture, making it a must-visit destination for food enthusiasts. Here's an overview of Singapore's local cuisine, dining options, and some of the most famous food joints.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sticky Section */}
            <section
                className={`about-area-two rel z-1 sticky-div ${isSticky ? "sticky-div-position" : ""}`}
            >
                <div className="container">
                    <div className="row d-flex" style={{ padding: "0px 15px", gap: 5 }}>
                        {diningOptions.map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={`#${item.title}`}
                                    scroll={false}
                                    onClick={() => { scrolltoHash(item.title) }}
                                    className="theme-btn style-three"
                                    style={{ width: 'auto', fontSize: '13px', padding: "5px 8px", fontWeight: 300, marginBottom: 8, gap: 1, display: 'flex' }}
                                >
                                    <span data-hover={item.title}>{item.title}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="about-area-two rel z-1">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        {diningOptions.map((item, index) => {
                            return (
                                <div key={index} id={item.title}>
                                    <div className="py-20">
                                        <h4 >#{item.title}</h4>
                                        <span>{item.description}</span>
                                    </div>
                                    {item.options.map(option => {
                                        return <RenderOptions key={option.name} data={option} />
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Final Section */}
            <section className="about-area-two pb-30 rel z-1">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <span>These areas in Singapore offer an authentic taste of India, with rich flavours and aromatic spices that transport diners straight to the heart of Indian culinary traditions.
                        </span>
                    </div>
                    <div className="row d-flex justify-content-between pt-30">
                        <span>Singapore’s food culture is a wonderful mix of flavours, and exploring the local cuisine is an essential part of the travel experience. Whether you prefer casual hawker food or high-end dining, there’s something to satisfy every palate in this culinary haven.</span>
                    </div>
                </div>
            </section>
        </ReveloLayout>
    );
};

export default Page;
