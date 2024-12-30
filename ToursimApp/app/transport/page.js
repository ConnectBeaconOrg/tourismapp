import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import TransportCard from "@/components/TransportCard";
import ReveloLayout from "@/layout/ReveloLayout";
import { mainPageTranportData } from "@/utility/constants";
import Link from "next/link";
const page = () => {
    return (
        <ReveloLayout>
            <Banner pageTitle={"Transport"} />
            <section className="cta-three-area py-30 rel z-1">
                <div className="container">
                    <div
                        className="cta-three-inner overflow-hidden br-10"

                    >
                        <div className="row no-gap">
                            <div className="col-lg-6 rel z-1">
                                <div
                                    className="cta-three-content"
                                    data-aos="zoom-in-right"
                                    data-aos-duration={1500}
                                    data-aos-offset={50}
                                >
                                    <div className="section-title  mb-45" style={{ textAlign: 'justify' }}>
                                        <h6 >Singapore offers a highly efficient and comprehensive public transport network that consists of the MRT (Mass Rapid Transit), buses, and taxis. Here’s an overview of each option and related mobile apps
                                        </h6>
                                    </div>

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
                                            "url(assets/images/newsletter/newsletter-two-right.jpg)",
                                        borderRadius: "15px"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Area start */}
            <section className="features-tour-area pt-30 rel z-1">
                <div className="container">

                    <div className="row justify-content-center">

                        {mainPageTranportData.map((item, index) => <div className="col-xl-3 col-lg-4 col-md-6"><TransportCard key={index} item={item} /></div>)}
                    </div>
                </div>
            </section>
            {/* About Area end */}
        </ReveloLayout>
    );
};
export default page;
