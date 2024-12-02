import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useGeoLocationData } from "../hooks/useGeoLocationData";



// // Example Usage
// const latitude = 37.7749; // Example Latitude (San Francisco)
// const longitude = -122.4194; // Example Longitude (San Francisco)
// const radius = 1000; // Radius in meters

// fetchOpenStreetMapData(latitude, longitude, radius)
//     .then(data => console.log(data))
//     .catch(error => console.error(error));


const center = [
    51.5039555, -0.0175315
]

const ResturantsMap = () => {

    const [locations] = useGeoLocationData(center[0], center[1], 1000);

    return <div style={{ width: '100%', height: '80vh' }}>
        <MapContainer center={center}
            zoom={15}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map(l => <Marker id={l.id} position={[l.lat, l.lon]}>
                <Popup>
                    {l.tags.name}
                </Popup>
            </Marker>)}
        </MapContainer>

    </div>
}
export default ResturantsMap;