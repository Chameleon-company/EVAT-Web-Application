import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = ({ searchFunction, settingsFunction }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.tab} onPress={searchFunction}>
                <Image source={require('../assets/search.png')} style={styles.icon} />
                <Text style={styles.label}>Search</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab} onPress={settingsFunction}>
                <Image source={require('../assets/settings.png')} style={styles.icon} />
                <Text style={styles.label}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.settingsFunction}>
                <Text>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('SigninPage')}>
                <Image source={require('../assets/logout.png')} style={styles.icon} />
                <Text style={styles.label}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    tab: {
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginBottom: 4,
    },
    label: {
        fontSize: 12,
        color: '#333',
    },
});

export default NavBar;
