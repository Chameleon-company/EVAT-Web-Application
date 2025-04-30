import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native'
import { Marker } from 'react-native-maps';

// import component 👇


function ChargerMarker(props) {
  const { charger } = props;

  const title = charger.title?.toString() || charger.name?.toString() || charger.brand?.toString() || "Charger";
  const location = { latitude: charger.geometry.location.lat, longitude: charger.geometry.location.lng }
  const description = charger?.description? charger.description : charger.vicinity
  const rating = charger.rating ? charger.rating : "No rating"

  const createRatingStars = () => {
    if (rating == "No rating" || rating === 0) return "☆☆☆☆☆";
    if (rating >= 5) return "★★★★★";
    let floorRating = Math.floor(rating);
    let halfRatingTrue = (rating - floorRating) > 0.5 ? true : false;
    let stars = "★".repeat(Math.floor(rating)) + (halfRatingTrue ? "★" : "☆") + "☆".repeat(4 - Math.floor(rating));
    return stars;
  }

  const createChargerAlert = () => {
    const info = `Charger Name: ${charger.name}\nCharger Vicinity: ${charger.vicinity}\nCharger Type: ${charger.type}\nCharger Status: ${charger.status}\nRating: ${createRatingStars()} ${charger.rating}\n` 

    Alert.alert(title, info, [
      { text: 'Got To Charger', onPress: () => console.log('OK Pressed') },
      { text: 'Exit', onPress: () => console.log('Exit Pressed') }
    ]);
  }


  return (
    <Marker
      key={`${charger.id}`}
      identifier={`${charger.id}`}
      // onPress={() => setChargerInfo(chargerOptions)}
      coordinate={location}
      title={title}
      description={description+" " + createRatingStars()}
      onCalloutPress={() => createChargerAlert()}>
      <Image source={require('../data/ev_charger_symbol.webp')} style={styles.marker} />
    </Marker>
  );
}

export default ChargerMarker;


const styles = StyleSheet.create({
  marker: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
}});
