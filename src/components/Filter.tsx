import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import CheckBox from '@react-native-community/checkbox';
import BellIcon from '../assets/bell.svg';
import SearchIcon from '../assets/search.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';

type ChargerType = 'AC' | 'DC';
type OtherOption = 'toilet' | 'hotel' | 'free';

const Filter = () => {
  const [price, setPrice] = useState(50);
  const [distance, setDistance] = useState(25);
  const [chargerTypes, setChargerTypes] = useState<Record<ChargerType, boolean>>({
    AC: false,
    DC: true
  });
  const [others, setOthers] = useState<Record<OtherOption, boolean>>({
    toilet: false,
    hotel: false,
    free: false
  });

  const handleChargerTypeChange = (type: ChargerType) => {
    setChargerTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleOthersChange = (type: OtherOption) => {
    setOthers(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Filter</Text>
        <View style={styles.notificationContainer}>
          <BellIcon 
            width={24}
            height={24}
            fill="#FFFFFF"
          />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Price Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={price}
            onValueChange={setPrice}
            minimumTrackTintColor="#4CAF50"
            maximumTrackTintColor="#D3D3D3"
            thumbTintColor="#4CAF50"
          />
          <Text style={styles.rangeText}>${price}</Text>
          <Text style={styles.currencyText}>Australian Dollars</Text>
        </View>

        {/* Distance Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Distance</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={50}
            value={distance}
            onValueChange={setDistance}
            minimumTrackTintColor="#4CAF50"
            maximumTrackTintColor="#D3D3D3"
            thumbTintColor="#4CAF50"
          />
          <Text style={styles.rangeText}>{distance} Km</Text>
        </View>

        {/* Charger Type Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Charger Type</Text>
          <View style={styles.checkboxContainer}>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={chargerTypes.AC}
                onValueChange={() => handleChargerTypeChange('AC')}
                tintColors={{ true: '#4CAF50', false: '#D3D3D3' }}
              />
              <Text style={styles.checkboxLabel}>AC</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={chargerTypes.DC}
                onValueChange={() => handleChargerTypeChange('DC')}
                tintColors={{ true: '#4CAF50', false: '#D3D3D3' }}
              />
              <Text style={styles.checkboxLabel}>DC</Text>
            </View>
          </View>
        </View>

        {/* Others Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Others</Text>
          <View style={styles.checkboxContainer}>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={others.toilet}
                onValueChange={() => handleOthersChange('toilet')}
                tintColors={{ true: '#4CAF50', false: '#D3D3D3' }}
              />
              <Text style={styles.checkboxLabel}>Toilet</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={others.hotel}
                onValueChange={() => handleOthersChange('hotel')}
                tintColors={{ true: '#4CAF50', false: '#D3D3D3' }}
              />
              <Text style={styles.checkboxLabel}>Hotel</Text>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={others.free}
                onValueChange={() => handleOthersChange('free')}
                tintColors={{ true: '#4CAF50', false: '#D3D3D3' }}
              />
              <Text style={styles.checkboxLabel}>Free</Text>
            </View>
          </View>
        </View>

        <Text style={styles.matchesText}>14 Matches Found</Text>
        <TouchableOpacity style={styles.showResultButton}>
          <Text style={styles.showResultText}>Show Result</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <SearchIcon 
            width={24}
            height={24}
            fill="#666666"
          />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FavoriteIcon 
            width={24}
            height={24}
            fill="#666666"
          />
          <Text style={styles.navText}>Favourites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <AccountIcon 
            width={24}
            height={24}
            fill="#666666"
          />
          <Text style={styles.navText}>My Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  rangeText: {
    fontSize: 16,
    marginTop: 8,
  },
  currencyText: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  matchesText: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 16,
  },
  showResultButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  showResultText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: '#666666',
  },
});

export default Filter; 