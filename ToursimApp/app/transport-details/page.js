'use client'
import SectionTitle from "@/components/SectionTitle";
import Destination from "@/components/slider/Destination";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import { mainPageTranportData } from "@/utility/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
const page = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const transportDetails = useMemo(() => {
        console.log(">>>>>>>>>>>id", id)
        return mainPageTranportData.find(item => item.title === id) || {}
    }, [id, mainPageTranportData])
    return (
        <ReveloLayout>
            {/* Page Banner Start */}
            <section className="page-banner-two rel z-1">
                <div className="container-fluid">
                    <hr className="mt-0" />
                    <div className="container">
                        <div className="banner-inner pt-15 pb-25">
                            <h2
                                className="page-title mb-10"
                                data-aos="fade-left"
                                data-aos-duration={1500}
                                data-aos-offset={50}
                            >

                            </h2>
                            <nav aria-label="breadcrumb">
                                <ol
                                    className="breadcrumb justify-content-center mb-20"
                                    data-aos="fade-right"
                                    data-aos-delay={200}
                                    data-aos-duration={1500}
                                    data-aos-offset={50}
                                >
                                    <li className="breadcrumb-item">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Transport Details
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* Page Banner End */}

            {/* About Us Area start */}
            <section className="about-us-area pb-100 rel z-1">
                <div className="container">
                    <div className="row gap-100 align-items-center">
                        <div className="col-lg-6">
                            <div
                                className="destination-details-content rmb-55"
                                data-aos="fade-left"
                                data-aos-duration={1500}
                                data-aos-offset={50}
                            >
                                <div className="section-title mb-25">
                                    <span className="h2 mb-15">{transportDetails.title}</span>
                                </div>
                                <p>
                                    {transportDetails.about}
                                </p>
                                {transportDetails.OperatingHours && <p>
                                    <b>Operating Hours : </b> {transportDetails.OperatingHours}
                                </p>}
                                {transportDetails.FarePayment && <p>
                                    <b>Fare Payment </b> {transportDetails.FarePayment}
                                </p>}


                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-offset={50}
                        >
                            <div
                                className="cta-three-image bgs-cover"
                                style={{
                                    backgroundImage:
                                        `url(${transportDetails.image})`,
                                    borderRadius: "15px"
                                }}
                            />
                        </div>

                    </div>
                </div>
            </section>
            {/* About Us Area end */}
            <section className="about-area-two rel z-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div
                                className="section-title text-center counter-text-wrap mb-50"
                                data-aos="fade-up"
                                data-aos-duration={1500}
                                data-aos-offset={50}
                            >
                                <SectionTitle title={`Key Apps for  ${transportDetails.title}`} />
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                        {transportDetails.keyApps.map((item, index) => {
                            return (
                                <div key={index} id={item.title}>
                                    <div className="py-20">
                                        <h4 >#{item.name}</h4>
                                        <span>{item.description}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Destinations Area start */}
            <section className="destinations-area bgc-lighter pt-85 pb-100 rel z-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div
                                className="section-title text-center counter-text-wrap mb-50"
                                data-aos="fade-up"
                                data-aos-duration={1500}
                                data-aos-offset={50}
                            >
                                <SectionTitle title={"Medical Emergency in Singapore"} />
                            </div>
                        </div>
                    </div>
                    <Destination />
                </div>
            </section>
            {/* Destinations Area end */}

            {/* Newsletter Area start */}
            <Subscribe />
            {/* Newsletter Area end */}
        </ReveloLayout>
    );
};
export default page;
