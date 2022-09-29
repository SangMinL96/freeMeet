import {useEffect, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export const useMyLocation = () => {
  const [location, setLocation] = useState<any>(null);

  const requestPermission = async () => {
    const geoPlatformCheck =
      Platform.OS === 'ios'
        ? await Geolocation.requestAuthorization('always')
        : await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
    const result = geoPlatformCheck;
    if (result === 'granted') {
      Geolocation.getCurrentPosition(
        pos => {
          setLocation(pos.coords);
        },
        error => {
          console.log(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 3600,
          maximumAge: 3600,
        },
      );
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);
  return {location};
};
