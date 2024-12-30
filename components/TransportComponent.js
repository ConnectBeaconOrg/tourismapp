"use client";
import { mainPageTranportData } from "@/utility/constants"
import TransportCard from "./TransportCard"
import Slider from "react-slick"
import { sliderProps } from "@/utility/sliderprops";

const TransportComponent = () => {


    return <Slider {...sliderProps.hotDeals} className="hot-deals-active">{mainPageTranportData.map((item, index) => <TransportCard key={index} item={item} />)}</Slider>

}

export default TransportComponent