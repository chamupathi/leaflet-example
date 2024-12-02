import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useGeoLocationData } from "../hooks/useGeoLocationData";
import MapWrapper from "./map-wrapper";

const center = [
    51.5039555, -0.0175315
]

const ResturantsMap = () => {

    const [locations] = useGeoLocationData(center[0], center[1], 1000);

    return <div style={{ width: '100%', height: '80vh' }}>
        <MapWrapper locations={locations} center={center} />
    </div>
}
export default ResturantsMap;