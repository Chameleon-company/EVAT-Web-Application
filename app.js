import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FooterNavigation from './components/FooterNavigation';
import MapScreen from './components/MapScreen';
import TripPlannerScreen from './components/TripPlannerScreen';
import SaveScreen from './components/SaveScreen';
import MeScreen from './components/MeScreen';
import PaymentGateway from './components/PaymentGateway';

const Stack = createNativeStackNavigator();

const routes = [
  { name: 'Map', component: MapScreen },
  { name: 'TripPlanner', component: TripPlannerScreen },
  { name: 'Save', component: SaveScreen },
  { name: 'Me', component: MeScreen },
  { name: 'Payment', component: PaymentGateway }
];

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Text style={styles.fancyText}>Happy Coding EVAT Legends</Text>
        <View style={styles.navigatorContainer}>
          <Stack.Navigator initialRouteName="Map">
            {routes.map((route, index) => (
              <Stack.Screen key={index} name={route.name} component={route.component} />
            ))}
          </Stack.Navigator>
          <View style={styles.personalDetails}>
      <View style={[styles.personalDetailsChild, styles.personalLayout]} />
      <Image
        style={[styles.personalDetailsItem, styles.personalLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-69.png")}
      />
      <View style={styles.personalDetailsInner} />
      <Text style={[styles.text, styles.textLayout]}>+</Text>
      <View style={styles.workingAreaOfPdWrapper}>
        <View style={styles.workingAreaOfPd} />
      </View>
      <StatusBar />
      <ImageBackground
        style={[styles.chameleonIconbutton, styles.chameleonIconbuttonPosition]}
        resizeMode="cover"
        source={require("../assets/chameleoniconbutton.png")}
      />
      <Text style={[styles.welcomeJohn, styles.textTypo]}>Welcome John</Text>
      <Button
        title="Payment Details"
        radius="5"
        iconPosition="left"
        type="outline"
        color="#fff"
        titleStyle={styles.paymentDetailsButtonBtn}
        containerStyle={styles.paymentDetailsButtonBtn1}
        buttonStyle={styles.paymentDetailsButtonBtn2}
      />
      <Button
        title="Personal Vehicles"
        radius="5"
        iconPosition="left"
        type="outline"
        color="#fff"
        titleStyle={styles.paymentDetailsButton1Btn}
        containerStyle={styles.paymentDetailsButton1Btn1}
        buttonStyle={styles.paymentDetailsButton1Btn2}
      />
      <View
        style={[
          styles.currentPaymentDetails,
          styles.chameleonIconbuttonPosition,
        ]}
      />
      <View style={styles.lineView} />
      <Text style={[styles.personalDetails1, styles.detailsLayout]}>
        Personal Details
      </Text>
      <Text style={[styles.additionalDetails, styles.detailsLayout]}>
        Additional Details
      </Text>
      <Button
        radius="5"
        iconPosition="left"
        type="outline"
        containerStyle={styles.searchButtonIconBtn}
        buttonStyle={styles.searchButtonIconBtn1}
      />
      <Button
        title="Edit"
        radius="5"
        iconPosition="left"
        type="outline"
        titleStyle={styles.editPersonalDetailsButtonBtn}
        containerStyle={styles.editPersonalDetailsButtonBtn1}
        buttonStyle={styles.editPersonalDetailsButtonBtn2}
      />
      <View style={[styles.dateOfBirthButton, styles.buttonLayout]}>
        <Text style={[styles.dateOfBirth, styles.nameTypo]}>Date Of Birth</Text>
      </View>
      <View style={[styles.contactPhoneButton, styles.buttonLayout]}>
        <Text style={[styles.contactPhone, styles.nameTypo]}>
          Contact Phone
        </Text>
      </View>
      <View style={[styles.lastNameButton, styles.buttonLayout]}>
        <Text style={[styles.lastName, styles.nameTypo]}>Last Name</Text>
      </View>
      <View style={styles.firstName}>
        <View style={styles.personalDetailsInner} />
        <Text style={[styles.firstName1, styles.nameTypo]}>First Name</Text>
      </View>
      <Switch
        style={[styles.slideGrabHold, styles.textLayout]}
        value={slideGrabHoldSwitchValueState}
        onValueChange={setSlideGrabHoldSwitchValueState}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#000" }}
      />
    </View>
        </View>
        <FooterNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fancyText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20, // Add margin to separate text from the navigator
  },
  navigatorContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10, // Add padding to the navigator container
  },
  paymentDetailsButtonBtn: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Inter-Regular",
  },
  paymentDetailsButtonBtn1: {
    left: 36,
    top: 545,
    position: "absolute",
  },
  paymentDetailsButtonBtn2: {
    borderRadius: 10,
    width: 289,
    height: 40,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 67,
    paddingVertical: 0,
  },
  paymentDetailsButton1Btn: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Inter-Regular",
  },
  paymentDetailsButton1Btn1: {
    left: 35,
    top: 484,
    position: "absolute",
  },
  paymentDetailsButton1Btn2: {
    borderRadius: 10,
    width: 293,
    height: 40,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  searchButtonIconBtn: {
    left: 250,
    top: 14,
    position: "absolute",
  },
  searchButtonIconBtn1: {
    width: 33,
    height: 33,
  },
  editPersonalDetailsButtonBtn: {
    color: "#000",
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
  editPersonalDetailsButtonBtn1: {
    left: 250,
    top: 337,
    position: "absolute",
  },
  editPersonalDetailsButtonBtn2: {
    width: 82,
    height: 26,
  },
  personalLayout: {
    width: 320,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textLayout: {
    height: 22,
    position: "absolute",
  },
  chameleonIconbuttonPosition: {
    left: 11,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  detailsLayout: {
    height: 27,
    width: 262,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  buttonLayout: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_2xs,
    height: 26,
    width: 301,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  nameTypo: {
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  personalDetailsChild: {
    top: 158,
    height: 216,
    backgroundColor: Color.colorDarkblue,
    width: 320,
    borderRadius: Border.br_3xs,
    left: 20,
  },
  personalDetailsItem: {
    top: 460,
    left: 21,
    height: 154,
    width: 320,
    borderRadius: Border.br_3xs,
  },
  personalDetailsInner: {
    height: 26,
    width: 301,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text: {
    top: 111,
    left: 198,
    fontSize: 32,
    width: 25,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  workingAreaOfPd: {
    borderRadius: 3,
    backgroundColor: "#cbd2fc",
    width: 333,
    height: 793,
  },
  workingAreaOfPdWrapper: {
    top: 115,
    left: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    display: "none",
    position: "absolute",
  },
  chameleonIconbutton: {
    borderRadius: 100,
    width: 58,
    height: 54,
    top: 4,
  },
  welcomeJohn: {
    top: 21,
    left: 86,
    width: 151,
    height: 32,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  currentPaymentDetails: {
    top: 142,
    width: 165,
    height: 17,
  },
  lineView: {
    top: 133,
    left: -2,
    borderStyle: "solid",
    borderColor: Color.colorDarkblue,
    borderTopWidth: 4,
    width: 364,
    height: 4,
    position: "absolute",
  },
  personalDetails1: {
    top: 87,
    left: 26,
    fontSize: 28,
  },
  additionalDetails: {
    top: 431,
    fontSize: FontSize.size_xl,
    left: 20,
    height: 27,
    width: 262,
    color: Color.colorBlack,
  },
  dateOfBirth: {
    width: 93,
  },
  dateOfBirthButton: {
    top: 258,
    justifyContent: "center",
    paddingHorizontal: Padding.p_2xs,
    left: 29,
  },
  contactPhone: {
    width: 108,
  },
  contactPhoneButton: {
    top: 302,
    left: 31,
    justifyContent: "flex-end",
  },
  lastName: {
    width: 82,
  },
  lastNameButton: {
    top: 216,
    justifyContent: "center",
    paddingHorizontal: Padding.p_2xs,
    left: 29,
  },
  firstName1: {
    left: 12,
    width: 279,
    top: 4,
    position: "absolute",
  },
  firstName: {
    top: 171,
    left: 29,
    height: 26,
    width: 301,
    position: "absolute",
  },
  slideGrabHold: {
    top: 22,
    left: 304,
    width: 31,
  },
  personalDetails: {
    flex: 1,
    width: "100%",
    height: 1091,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default App;
