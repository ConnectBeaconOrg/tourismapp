import Link from "next/link"

const PopularLocationCard = ({ item, favIcon = false }) => {

    return <div className="col-xl-3 col-lg-4 col-md-6">
        <div
            className="destination-item style-four no-border"
            data-aos="flip-left"
            data-aos-delay={150}
            data-aos-duration={1500}
            data-aos-offset={50}
        >
            <div className="image">
                <img src={item.image} alt="Tour" />
            </div>
            <div className="content">
                <span className="location">
                    <i className="fal fa-map-marker-alt" /> {item.title}
                </span>
                <Link
                    href={{
                        pathname: '/tour-details',
                        query: { id: item.title },
                    }}

                >
                    {item.description}
                </Link>
            </div>

            <Link
                href={item.website}
                target="_blank"
                className="theme-btn style-three"
            >
                <span data-hover="Explore">Explore</span>
                <i className="fal fa-arrow-right" />
            </Link>
        </div>
    </div>
}

export default PopularLocationCard