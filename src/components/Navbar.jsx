import React, {useContext} from "react";
import { UserContext } from "../context/user.context";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

function NavBar(props) {
    const navigation = useNavigation();
    const {user, setUser} = useContext(UserContext);

    const signOut = ()=>{
        // Clear user data and navigate to sign-in page
        Alert.alert('Sign Out 🚪↩', 'Are you sure you want to sign out?', [
            {text: 'Cancel', style: 'cancel'},  {text: 'Sign Out', onPress: () => {
                setUser(null);
                navigation.navigate('SigninPage');
            }}])
    }

    const { searchFunction, settingsFunction } = props;

    return (
        <View style={styles.navbar}>
            
            <TouchableOpacity style={styles.navbutton} onPress={searchFunction}>
                <Image style={styles.navbarIcon} source={require("../data/search.webp")}></Image>
                <Text style={styles.navbuttonText}>Search</Text>
            </TouchableOpacity>
            <View style={styles.verticleLine}></View>
            <TouchableOpacity style={styles.navbutton} onPress={settingsFunction}>
            <Image style={styles.navbarIcon} source={require("../data/config.webp")}></Image>
                <Text style={styles.navbuttonText}>Settings</Text>
            </TouchableOpacity>
            <View style={styles.verticleLine}></View>
            <TouchableOpacity style={styles.navbutton}  onPress={signOut}>
            <Image style={styles.navbarIcon} source={require("../data/signout.webp")}></Image>
                <Text style={styles.navbuttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
    },
    navbar: {
        width: Dimensions.get('window').width,
        height: 60,
        backgroundColor: '#eee',
        position: 'absolute',
        flexDirection: 'row',
        bottom: 0,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        // justifyContent: 'space-between',
    },
    navbutton: {
        width: Dimensions.get('window').width / 3,
        height: 60,
        //// backgroundColor: '#66aa66',
        color: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        // paddingTop: 10,
        textAlign: 'center',
    },
    verticleLine:{
        height: '60%',
        width: 2,
        backgroundColor: '#ccc',
      },
    navbuttonText: {
        color: '#000',
        fontSize: 12,
        textAlign: 'center',
        justifyContent: 'center',
    },
    navbarIcon: {
        // padding: 0,
        // margin: 0,
        width: 28,
        height: 28,
        textAlign: 'center',
        alignItems: 'center',
        // marginRight: 5,
        resizeMode: 'contain',
        alignContent: 'center',
        justifyContent: 'center',
        // color: '#fff',
    }
})

export default NavBar;