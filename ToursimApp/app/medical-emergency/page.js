"use client"
import Banner from "@/components/Banner";
import ReveloLayout from "@/layout/ReveloLayout";
import { medicalEmergency } from "@/utility/constants";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";


const RenderOptions = ({ data }) => {
    return <section className="cta-three-area rel z-1">
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

                </div>

            </div>
        </div>
    </section>
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
            <Banner pageTitle={"Medical Emergency"} />
            {/* About Area start */}
            <section className="about-area-two pt-30 rel z-1">
                <div className="container">
                    <div className="row justify-content-between">
                        <p>
                            Singapore is known for its high-quality healthcare system, and tourists can rest assured that they will have access to excellent medical services in case of an emergency.

                        </p>
                    </div>
                </div>
            </section>

            {/* Sticky Section */}
            <section
                className={`about-area-two rel z-1 sticky-div ${isSticky ? "sticky-div-position " : ""}`}

            >
                <div className="container">
                    <div className="row d-flex" style={{ padding: "0px 15px", gap: 5 }}
                        data-aos="fade-left"
                        data-aos-duration={1500}
                        data-aos-offset={50}>
                        {medicalEmergency?.map((item, index) => {
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
                        {medicalEmergency?.map((item, index) => {
                            return (
                                <div key={index} id={item.title}>
                                    <div className="py-20">
                                        <h4 >#{item.title}</h4>
                                        <span>{item.description}</span>
                                        <div className="py-10">
                                            {item.options?.map(option => <RenderOptions key={option.name} data={option} />)}
                                        </div>
                                    </div>
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
                        <span>Having travel insurance provides peace of mind, ensuring that tourists are protected against unforeseen events while enjoying their time in Singapore. It’s advisable to compare policies based on coverage, cost, and customer service to find the best option for your needs.
                        </span>
                    </div>
                </div>
            </section>
        </ReveloLayout>
    );
};

export default Page;
