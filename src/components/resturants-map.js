import { useGeoLocationData } from "../hooks/useGeoLocationData";
import ErrorText from "./text/error-text";
import LoadingText from "./text/loading-text";
import MapWrapper from "./map/map-wrapper";

import './resturants-map.css'



const ResturantsMap = ({center, radius}) => {

    const [locations, loading, error] = useGeoLocationData(center[0], center[1], radius);

    return <div className="resturants-map">
        <MapWrapper locations={locations} center={center} />
        {error && <ErrorText />}
        {loading && <LoadingText />}
    </div>
}
export default ResturantsMap;