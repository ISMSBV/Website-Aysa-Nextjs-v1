import { useEffect } from 'react';

interface MyWindow extends Window {
    google: any;
}
declare var window: MyWindow;
declare var google: any;

const MapsBlock = () => {
    useEffect(() => {
        // Return if map element not found
        if (!document.getElementById('map')) {
            return;
        }

        // Check if Google Maps API script is already loaded
        if (typeof window.google === 'undefined') {
            console.error('Google Maps JavaScript API is not loaded');
            return;
        }

        initMap();
    }, []);

    const initMap = () => {
        const locations = [
            {
                lat: 51.86380380570153,
                lng: 4.659189955858005,
                name: 'Hoofdkantoor',
            },
            {
                lat: 51.833462656935055,
                lng: 4.616864831312038,
                name: 'Tweede Kantoor',
            },
        ];

        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: locations[0],
        });

        locations.forEach((location) => {
            const marker = new google.maps.Marker({
                position: location,
                map: map,
            });

            // Create an InfoWindow
            const infowindow = new google.maps.InfoWindow({
                content: location.name,
            });

            // Add a click listener to the marker to open the InfoWindow
            infowindow.open(map, marker);
        });
    };

    return (
        <div
            id="map"
            style={{ border: 0 }}
            aria-hidden="false"
            className="border-none outline-none rounded-lg my-14 lg:my-24 h-96 w-full"
        />
    );
};

export default MapsBlock;
