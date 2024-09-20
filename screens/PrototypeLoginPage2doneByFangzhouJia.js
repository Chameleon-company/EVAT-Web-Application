import React, { useState, Alert } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  ImageBackground,
  View,
} from "react-native";
import { CheckBox } from "@rneui/themed";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PrototypeLoginPage2doneByFangzhouJia = () => {
  const [vectorchecked, setVectorchecked] = useState(false);

  return (
    <View style={styles.prototypeLoginPage2doneBy}>
      <Text style={styles.onlyNeedA}>
        Only need a free account to explore all charging stations!
      </Text>
      <Pressable style={styles.prototypeLoginPage2doneByChild} />
      <Text
        style={[styles.signInWith, styles.signTypo]}
      >{`Sign In With Apple ID `}</Text>
      <Image
        style={[styles.appleLogoIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/apple-logo.png")}
      />
      <Pressable
        style={[styles.prototypeLoginPage2doneByItem, styles.prototypeLayout]}
      />
      <Pressable
        style={[styles.prototypeLoginPage2doneByInner, styles.prototypeLayout]}
      />
      <Text style={[styles.signInWith1, styles.signTypo]}>
        Sign In With Microsoft Account
      </Text>
      <Text style={[styles.signInWith2, styles.signTypo]}>
        Sign In With Google
      </Text>
      <Image
        style={[styles.googleIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/google.png")}
      />
      <CheckBox
        style={styles.vector}
        checked={vectorchecked}
        onPress={() => setVectorchecked(!vectorchecked)}
        checkedColor="rgba(0, 0, 0, 0)"
        checkedIcon={
          <View style={styles.checkedIconContainer}>
            <Text style={styles.checkmark}>✔</Text>
          </View>
        }
        containerStyle={styles.vectorLayout}
      />
      <Text style={[styles.iHaveRead, styles.iHaveReadClr]}>
        i have read and accept the Terms of Service.
      </Text>
      <Pressable style={styles.rectanglePressable} />
      <Text style={[styles.signIn, styles.signInTypo]}>Sign In</Text>
      <Pressable onPress={() => Alert.alert('Text clicked!')}>
      <Text style={[styles.alreadyGotAn, styles.signInTypo]}
      >{`Already got an account? `}</Text>
      </Pressable>
      <Text style={[styles.discoverTheWorlds, styles.iHaveReadClr]}>
        {" "}
        Discover the world’s largest EV driver community
      </Text>
      <Image
        style={[styles.windows11Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/windows-11.png")}
      />
      <ImageBackground
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/22.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorLayout: {
    backgroundColor: "white",
    padding: 0,
    left: "13.32%",
    right: "76.1%",
    top: "94.67%",
    bottom: "6.22%",
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 5,
  },
  signTypo: {
    height: 30,
    width: 237,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 23,
    width: 28,
    position: "absolute",
  },
  prototypeLayout: {
    left: 47,
    height: 43,
    width: 286,
    backgroundColor: Color.colorDeepskyblue,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  iHaveReadClr: {
    color: Color.colorGray,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  signInTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  onlyNeedA: {
    top: 191,
    left: 10,
    fontSize: 24,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorDeepskyblue,
    width: 353,
    height: 87,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  prototypeLoginPage2doneByChild: {
    top: 379,
    left: 47,
    height: 43,
    width: 286,
    backgroundColor: Color.colorDeepskyblue,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  signInWith: {
    top: 390,
    left: 85,
    height: 19,
    width: 237,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontSize: FontSize.size_mini,
  },
  appleLogoIcon: {
    top: 389,
    left: 97,
    width: 28,
  },
  prototypeLoginPage2doneByItem: {
    top: 450,
  },
  prototypeLoginPage2doneByInner: {
    top: 516,
  },
  signInWith1: {
    top: 460,
    left: 91,
  },
  signInWith2: {
    top: 528,
    left: 85,
    height: 15,
    width: 237,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontSize: FontSize.size_mini,
  },
  googleIcon: {
    top: 526,
    left: 99,
    width: 26,
  },
  vector: {
    backgroundColor: Color.colorGray,
  },
  iHaveRead: {
    top:670,
    left: 78,
    fontSize: 13,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 244,
    height: 49,
  },
  rectanglePressable: {
    top: 620,
    left: 131,
    width: 137,
    height: 36,
    backgroundColor: Color.colorDeepskyblue,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  signIn: {
    top: 625,
    left: 152,
    width: 96,
    height: 24,
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  alreadyGotAn: {
    top: 585,
    left: 106,
    color: "#000",
  },
  discoverTheWorlds: {
    top: 263,
    left: 55,
    fontSize: 12,
    fontStyle: "italic",
    fontFamily: FontFamily.interLight,
  },
  windows11Icon: {
    top: 459,
    left: 68,
  },
  icon: {
    top: 6,
    left: 101,
    borderRadius: 100,
    width: 187,
    height: 169,
    position: "absolute",
  },
  prototypeLoginPage2doneBy: {
    backgroundColor: "#cff9ff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default PrototypeLoginPage2doneByFangzhouJia;
