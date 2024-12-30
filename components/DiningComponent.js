import { mainPageDiningData } from "@/utility/constants"
import Link from "next/link"
import { useMemo } from "react"

const DiningComponent = ({ limit }) => {
    const filteredData = useMemo(() => {
        return mainPageDiningData.slice(0, limit)
    }, limit)
    return filteredData.map(data => <div
        className="col-xl-4 col-md-6"
        data-aos="zoom-in-down"
        data-aos-duration={1500}
        data-aos-offset={50}
    >
        <div
            className="cta-item"
            style={{ backgroundImage: `url(${data.image})` }}
        >
            <h4 className="category">{data.title}</h4>
            <p className="category">{data.description}</p>
            <Link
                href={data.link}
                className="theme-btn style-two bgc-secondary"
            >
                <span data-hover="Book Now">Explore</span>
                <i className="fal fa-arrow-right" />
            </Link>
        </div>
    </div>)
}

export default DiningComponent