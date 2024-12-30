"use client"
import Banner from "@/components/Banner";
import Counter from "@/components/Counter";
import SectionTitle from "@/components/SectionTitle";
import Client from "@/components/slider/Client";
import Testimonial from "@/components/slider/Testimonial";
import ReveloLayout from "@/layout/ReveloLayout";
import { cultureAndSocialNorms } from "@/utility/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

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
            <Banner pageTitle={"Culture and Social Norms of Singapore"} />
            {/* About Area start */}
            <section className="about-area-two pt-30 rel z-1">
                <div className="container">
                    <div className="row justify-content-between">
                        <p>Singapore is a vibrant, multicultural city-state, known for its blend of traditions from various ethnic groups, including Chinese, Malay, Indian, and Eurasian communities. For tourists, understanding and respecting Singapore’s cultural norms and societal expectations is essential for a pleasant and respectful experience.
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
                        {cultureAndSocialNorms.map((item, index) => {
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
                        {cultureAndSocialNorms.map((item, index) => {
                            return (
                                <div key={index} id={item.title}>
                                    <div className="py-20">
                                        <h4 >#{item.title}</h4>
                                        <span>{item.description}</span>
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
                        <span>By respecting these cultural norms, tourists can enjoy a more immersive and respectful experience in Singapore, contributing to the country's welcoming and harmonious atmosphere.</span>
                    </div>
                </div>
            </section>
        </ReveloLayout>
    );
};

export default Page;
