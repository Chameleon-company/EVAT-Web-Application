import {
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
} from 'react-native';
import ExpandableHeader from './ExpandableHeader';

import Amenities from './icons/Amenities';
import Station from './icons/Station';
import Search from './icons/Search';
import MapFilter from './icons/MapFilter';
import AvailiableIcon from './icons/Availiable';

import {useState} from 'react';
import {useSharedValue, withSpring} from 'react-native-reanimated';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Availiable from './Availiable';

const {width: w, height: h} = Dimensions.get('window');
const menuItemWidth = w / 6;

const Map = () => {
  const translateY = useSharedValue(0);
  const insets = useSafeAreaInsets();
  // menu height
  const menuHeight = insets.top + menuItemWidth + 50;

  const [state, setState] = useState({
    active: '2',
  });

  const menus = [
    {
      id: '1',
      name: 'Search',
      icon: color => <Search color={color} />,
    },
    {
      id: '2',
      name: 'Map Filters',
      icon: color => <MapFilter color={color} />,
    },
    {
      id: '3',
      name: 'Availiable',
      icon: color => <AvailiableIcon color={color} />,
    },
    {
      id: '4',
      name: 'Stations',
      icon: color => <Station color={color} />,
    },
    {
      id: '5',
      name: 'Amenities',
      icon: color => <Amenities color={color} />,
    },
  ];

  const handlePress = id => {
    // search
    if (id === '1') {
      translateY.value = withSpring(-menuHeight);
    } else {
      translateY.value = withSpring(0);
    }

    setState(prevState => ({
      ...prevState,
      active: id,
    }));
  };

  const mapShow = id => {
    return id === '1' || id === '2';
  };

  const handleClose = () => {
    setState(prevState => ({
      ...prevState,
      active: '2',
    }));
    translateY.value = withSpring(0);
  };

  return (
    <View style={styles.container}>
      <ExpandableHeader
        menuData={menus}
        onPress={handlePress}
        active={state.active}
        translateY={translateY}
        menuItemWidth={menuItemWidth}
        menuHeight={menuHeight}
      />

      {/* Map */}
      {mapShow(state.active) && (
        <View style={styles.map}>
          <Image
            source={require('../assets/map.png')}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
      )}

      {/* search */}
      {state.active === '1' && (
        <View style={styles.search}>
          <SafeAreaView
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '50%',
                position: 'relative',
              }}>
              <TextInput
                style={{
                  borderWidth: 2,
                  borderColor: '#D9D9D9',
                  borderRadius: 25,
                  padding: 8,
                  height: 50,
                  backgroundColor: '#fff',
                }}
              />
              <View style={{position: 'absolute', right: 10}}>
                <Pressable onPress={handleClose}>
                  <Icon name="close" size={20} />
                </Pressable>
              </View>
            </View>
          </SafeAreaView>
        </View>
      )}

      {/* Availiable */}
      {state.active === '3' && (
        <View
          style={[
            styles.availiable,
            {
              padding: 8,
              paddingTop: menuHeight + 8,
            },
          ]}>
          <Availiable />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  search: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  availiable: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Map;
