import Link from "next/link"

const TransportCard = ({ item, favIcon = false }) => {

    return <div
        className="destination-item style-four no-border"
        data-aos="flip-left"
        data-aos-duration={1500}
        data-aos-offset={50}
    >
        <div className="image">
            <img src={item.image} alt="Hot Deal" />
        </div>
        <div className="content">
            <span className="location">
                {item.title}
            </span>
            <p>
                <Link
                    href={{
                        pathname: '/transport-details',
                        query: { id: item.title },
                    }}
                >
                    {item.description}
                </Link>
            </p>
        </div>

        {item.OperatingHours && <p>
            <b>Operating Hours</b> : {item.OperatingHours}
        </p>
        }
    </div>
}

export default TransportCard