declare module 'react-native-get-location' {
    interface Location {
      latitude: number;
      longitude: number;
      accuracy?: number;
      altitude?: number;
      heading?: number;
      speed?: number;
      time?: number;
    }
  
    interface GetLocationOptions {
      enableHighAccuracy?: boolean;
      timeout?: number;
    }
  
    const GetLocation: {
      getCurrentPosition: (options?: GetLocationOptions) => Promise<Location>;
    };
  
    export default GetLocation;
  }
  