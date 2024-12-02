import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import config from '../../config.json'

const defaultStyles = { width: '100%', height: '100%' }
const DEFAULT_ZOOM = config.default_zoom;

const MapWrapper = ({
    locations,
    center,
    zoom = DEFAULT_ZOOM,
    scrollWheelZoom = false,
    styles = defaultStyles
}) => <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={scrollWheelZoom}
            style={styles}
        >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map(l => <Marker id={l.id} position={[l.lat, l.lon]}>
            <Popup>
                {l.tags?.name || ""}
            </Popup>
        </Marker>)}
    </MapContainer>

export default MapWrapper;