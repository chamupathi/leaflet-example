import './App.css';
import ResturantsMap from './components/resturants-map';

const center = [
  // Comply cube HQ lat, lon
  51.5039555, -0.0175315
]

const SEARCH_RADIUS = 1000; // 1km

function App() {
  return (
    <ResturantsMap center={center} lon={center} radius={SEARCH_RADIUS }/>
  );
}

export default App;
