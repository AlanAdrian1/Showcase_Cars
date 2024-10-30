import { useRef, useEffect } from 'react';
const MapContainer = ({ dealers, setDealers, setError }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const defaultLocation = { lat: 40.730610, lng: -73.935242 };

      const map = new google.maps.Map(mapRef.current, {
        center: defaultLocation,
        zoom: 12,
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            map.setCenter(userLocation);
            searchNearbyDealers(map, userLocation);
          },
          () => {
            searchNearbyDealers(map, defaultLocation);
          }
        );
      } else {
        searchNearbyDealers(map, defaultLocation);
      }
    };

    const searchNearbyDealers = (map, location) => {
      const service = new google.maps.places.PlacesService(map);
      const request = {
        location: location,
        radius: '5000',
        type: ['car_dealer'],
      };

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          setDealers(results);
          results.forEach((place) => {
            createMarker(map, place);
          });
        } else {
          setError('No se encontraron concesionarios cerca.');
        }
      });
    };

    const createMarker = (map, place) => {
      const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
      });

      google.maps.event.addListener(marker, 'click', () => {
        window.open(
          `https://www.google.com/maps/dir/?api=1&destination=${place.geometry.location.lat()},${place.geometry.location.lng()}&travelmode=driving`
        );
      });
    };

    // Cargar Google Maps API con tu API Key
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyChQfFg7hHSNq3zTxErDO_NDXB2j3pOTkg&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = loadMap;
      document.head.appendChild(script);
    } else {
      loadMap();
    }
  }, [setDealers, setError]);

  return <div ref={mapRef} style={styles.map} />;
};

const styles = {
  map: {
    width: '100%',
    height: '500px',
  },
};

export default MapContainer;
