import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import {
  FontFamily,
  FontSize,
  Border,
  Color,
  Padding,
  Gap,
} from "../GlobalStyles";

const StartLocationItem = ({ locationName, chargeValues }) => {
  return (
    <View style={styles.startLocationItem}>
      <View style={styles.locationIcon}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
      </View>
      <View style={styles.textBody}>
        <Text style={[styles.startTitle, styles.startTitleFlexBox]}>
          Starting from
        </Text>
        <Text style={[styles.locationName, styles.locationNameTypo]}>
          {locationName}
        </Text>
      </View>
      <View style={styles.chargeBody}>
        <Text style={[styles.chargeStatus, styles.chargeFlexBox]}>
          Current Charge
        </Text>
        <View style={styles.chargePrediction}>
          <Text style={[styles.chargeValues, styles.icon1Layout]}>
            {chargeValues}
          </Text>
        </View>
      </View>
      <Pressable style={styles.deleteIcon} onPress={() => {}}>
        <Image
          style={styles.icon1Layout}
          contentFit="cover"
          source={require("../assets/delete-icon.png")}
        />
      </Pressable>
      <Image
        style={styles.moveIcon}
        contentFit="cover"
        source={require("../assets/move-icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  startTitleFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  locationNameTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  chargeFlexBox: {
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_smi,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  icon1Layout: {
    width: "100%",
    height: "100%",
  },
  icon: {
    top: 8,
    left: 8,
    width: 19,
    height: 20,
    position: "absolute",
  },
  locationIcon: {
    borderRadius: Border.br_mid_5,
    backgroundColor: Color.colorGray_300,
    borderColor: Color.colorRoyalblue_100,
    borderWidth: 1,
    width: 35,
    height: 35,
    overflow: "hidden",
    borderStyle: "solid",
  },
  startTitle: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    letterSpacing: 0,
  },
  locationName: {
    fontSize: FontSize.size_mini,
    color: Color.colorRoyalblue_100,
    textAlign: "left",
    letterSpacing: 0,
  },
  textBody: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    overflow: "hidden",
  },
  chargeStatus: {
    top: 20,
    left: 1,
    width: 101,
    height: 16,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  chargeValues: {
    top: "0%",
    left: "0%",
    color: Color.colorWhite,
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_smi,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  chargePrediction: {
    top: 1,
    left: 11,
    backgroundColor: Color.colorGreen,
    width: 81,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  chargeBody: {
    width: 103,
    height: 36,
    overflow: "hidden",
  },
  deleteIcon: {
    width: 30,
    height: 20,
  },
  moveIcon: {
    width: 37,
    height: 23,
    overflow: "hidden",
  },
  startLocationItem: {
    alignSelf: "stretch",
    borderColor: Color.colorGray_100,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_3xs,
    gap: Gap.gap_md,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderStyle: "solid",
  },
});

export default StartLocationItem;
