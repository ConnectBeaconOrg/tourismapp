import { popularSpotsData } from "@/utility/constants"
import PopulaLocationCard from "./PopularLocationCard"
import { useMemo } from "react"

const PopularLocations = ({ limit }) => {
    const filteredData = useMemo(() => {
        return popularSpotsData.slice(0, limit)
    }, [limit])

    return filteredData.map((item, index) => <PopulaLocationCard key={index} item={item} />)

}

export default PopularLocations