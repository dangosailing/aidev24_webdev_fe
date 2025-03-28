import { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapUpdater = ({ route }) => {
    const map = useMap()

    useEffect(() => {
        if (route.length > 0){
            map.setView(route[0], 13)
        }
    }, [route, map])

    return null
}

export default MapUpdater