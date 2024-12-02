import { useEffect, useState } from "react";

const overpassApiUrl = `https://overpass-api.de/api/interpreter`;


export const useGeoLocationData = (lat, lon, radius) => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async (lat, lon, radius) => {

        setLoading(true)
        const query = `${overpassApiUrl}?data=[out:json];node(around:${radius},${lat},${lon})[amenity=restaurant];out;`
        try {
            const response = await fetch(query);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            setLocations(data.elements)
        } catch (error) {
            console.error("Error fetching data from OpenStreetMap:", error);
            return null;
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {


        getData(lat, lon, radius);

    }, [lat, lon, radius])

    return [locations, loading, error];
}