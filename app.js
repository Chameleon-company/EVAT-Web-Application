import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FooterNavigation from './components/FooterNavigation';
import MePage from './components/MePage'

const Stack = createNativeStackNavigator();

const routes = [
  { name: 'MePage', component: MePage}
];

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <View style={styles.navigatorContainer}>
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/chameleoniconbutton.png")}
        <Text style={styles.welcomeJohn}>Welcome John</Text>
        <View style={styles.searchBar} />
        <Image
        style={[styles.paymentDetailsItem, styles.paymentLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-191.png")}
        />
        <Text style={[styles.text, styles.textLayout]}>2</Text>
        <Text style={[styles.text1, styles.textLayout]}>+</Text>
        <Image
          style={[styles.paymentDetailsInner, styles.paymentLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-199.png")}
        />
        <Text style={[styles.paymentDetails1, styles.chargefoxTypo]}>
          Payment Details
        </Text>
        <View style={styles.workingAreaOfPdWrapper}>
          <View style={styles.workingAreaOfPd} />
        </View>
        <View style={[styles.currentPaymentDetails, styles.iconPosition]} />
        <View style={[styles.rectangleView, styles.paymentChildLayout]} />
        <View style={[styles.paymentDetailsChild1, styles.paymentChildLayout]} />
        <View style={[styles.paymentDetailsChild2, styles.paymentChildLayout]} />
        <RNPButton
          style={styles.deletePaymentDetailsDropd}
          mode="elevated"
          labelStyle={styles.deletePaymentDetailsDropDBtn}
          contentStyle={styles.deletePaymentDetailsDropDBtn1}
        >
          Delete Payment Details
        </RNPButton>
        <RNPButton
          style={styles.deleteAccountConnectionsBut}
          uppercase={false}
          mode="elevated"
          labelStyle={styles.deleteAccountConnectionsButBtn}
          contentStyle={styles.deleteAccountConnectionsButBtn1}
        >
          Delete Account Connections?
        </RNPButton>
        <Button
          title="Change Payment Type/Details"
          radius="5"
          iconPosition="left"
          type="outline"
          titleStyle={styles.changePaymentDetailsDropdBtn}
          dropDownDirection="TOP"
          containerStyle={styles.changePaymentDetailsDropdBtn1}
          buttonStyle={styles.changePaymentDetailsDropdBtn2}
        />
        <Button
          title="Current Payment Details"
          radius="5"
          iconPosition="left"
          type="outline"
          titleStyle={styles.currentPaymentDetailsDropBtn}
          dropDownDirection="TOP"
          containerStyle={styles.currentPaymentDetailsDropBtn1}
          buttonStyle={styles.currentPaymentDetailsDropBtn2}
        />
        <View style={[styles.chargefoxDetails, styles.detailsLayout]}>
          <View style={[styles.chargefoxDetailsChild, styles.detailsLayout]} />
          <Text style={[styles.chargefox, styles.chargefoxTypo]}>ChargeFox</Text>
        </View>
        <Image
          style={[styles.evieDetailsIcon, styles.detailsLayout]}
          resizeMode="cover"
          source={require("../assets/evie-details.png")}
        />
        <Text style={[styles.connectedAccounts, styles.chargefoxTypo]}>
          Connected Accounts
        </Text>
        <Image
          style={styles.chargefox1Icon}
          resizeMode="cover"
          source={require("../assets/chargefox-1.png")}
        />
        <Image
          style={styles.evie1Icon}
          resizeMode="cover"
          source={require("../assets/evie-1.png")}
        />
      </View>
        </SafeAreaView>
        <Stack.Navigator initialRouteName="Map">
            {routes.map((route, index) => (
              <Stack.Screen key={index} name={route.name} component={route.component} />
            ))}
          </Stack.Navigator>
        <FooterNavigation />
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
  deletePaymentDetailsDropDBtn: {
    color: "#000",
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
  deletePaymentDetailsDropDBtn1: {
    height: 26,
    width: 301,
  },
  deleteAccountConnectionsButBtn: {
    color: "#ff0000",
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
  deleteAccountConnectionsButBtn1: {
    height: 26,
    width: 301,
  },
  changePaymentDetailsDropdBtn: {
    color: "#000",
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
  changePaymentDetailsDropdBtn1: {
    left: 30,
    top: 227,
    position: "absolute",
  },
  changePaymentDetailsDropdBtn2: {
    width: 301,
    height: 26,
  },
  currentPaymentDetailsDropBtn: {
    color: "#000",
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
  currentPaymentDetailsDropBtn1: {
    left: 30,
    top: 180,
    position: "absolute",
  },
  currentPaymentDetailsDropBtn2: {
    width: 301,
    height: 26,
  },
  iconPosition: {
    left: 11,
    position: "absolute",
  },
  paymentLayout: {
    width: 21,
    position: "absolute",
  },
  textLayout: {
    height: 22,
    width: 25,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  chargefoxTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  paymentChildLayout: {
    width: 320,
    left: 20,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkblue,
    position: "absolute",
  },
  detailsLayout: {
    height: 139,
    width: 139,
    position: "absolute",
  },
  paymentDetailsChild: {
    width: 360,
    height: 62,
    backgroundColor: Color.colorDarkblue,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon: {
    top: 4,
    borderRadius: Border.br_81xl,
    width: 58,
    height: 54,
  },
  welcomeJohn: {
    top: 21,
    left: 86,
    fontSize: FontSize.size_xl,
    width: 151,
    height: 32,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  searchBar: {
    top: 23,
    left: 258,
    borderRadius: 20,
    width: 64,
    height: 19,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  paymentDetailsItem: {
    left: 304,
    height: 20,
    top: 22,
  },
  text: {
    left: 310,
    fontSize: FontSize.size_sm,
    top: 22,
  },
  text1: {
    top: 111,
    left: 198,
    fontSize: FontSize.size_13xl,
  },
  paymentDetailsInner: {
    top: 1031,
    left: 59,
    height: 18,
  },
  paymentDetails1: {
    top: 87,
    left: 26,
    fontSize: FontSize.size_9xl,
    width: 262,
    height: 27,
  },
  workingAreaOfPd: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorLightsteelblue,
    width: 333,
    height: 793,
  },
  workingAreaOfPdWrapper: {
    top: 115,
    left: 2,
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_3xs,
    display: "none",
    position: "absolute",
  },
  currentPaymentDetails: {
    top: 142,
    width: 165,
    height: 17,
  },
  rectangleView: {
    top: 540,
    height: 177,
  },
  paymentDetailsChild1: {
    top: 589,
    height: 42,
  },
  paymentDetailsChild2: {
    top: 158,
    height: 162,
  },
  deletePaymentDetailsDropd: {
    top: 274,
    left: 30,
    position: "absolute",
  },
  deleteAccountConnectionsBut: {
    top: 555,
    left: 30,
    position: "absolute",
  },
  chargefoxDetailsChild: {
    width: 139,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  chargefox: {
    top: 15,
    left: 32,
    width: 75,
    fontSize: FontSize.size_sm,
    height: 20,
  },
  chargefoxDetails: {
    top: 378,
    width: 139,
    left: 30,
  },
  evieDetailsIcon: {
    left: 192,
    top: 378,
    width: 139,
  },
  connectedAccounts: {
    top: 341,
    fontSize: 16,
    left: 30,
  },
  chargefox1Icon: {
    top: 415,
    left: 40,
    width: 118,
    height: 97,
    position: "absolute",
  },
  evie1Icon: {
    top: 424,
    left: 205,
    width: 109,
    height: 79,
    position: "absolute",
  },
  paymentDetails: {
    flex: 1,
    width: "100%",
    height: 1081,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default App;
