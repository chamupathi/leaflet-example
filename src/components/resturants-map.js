import { useGeoLocationData } from "../hooks/useGeoLocationData";
import ErrorText from "./text/error-text";
import LoadingText from "./text/loading-text";
import MapWrapper from "./map-wrapper";

const center = [
    // Comply cube HQ lat, lon
    51.5039555, -0.0175315
]

const SEARCH_RADIUS = 1000; // 1km

const ResturantsMap = () => {

    const [locations, loading, error] = useGeoLocationData(center[0], center[1], SEARCH_RADIUS);

    return <div style={{ width: '100%', height: '80vh' }}>
        <MapWrapper locations={locations} center={center} />
        {error && <ErrorText />}
        {loading && <LoadingText />}
    </div>
}
export default ResturantsMap;