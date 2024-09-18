import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Color, FontFamily, FontSize, Gap, Padding } from "../GlobalStyles";

const LocationItem = ({ locationName, distance, time, chargeValues }) => {
  return (
    <View style={styles.locationItem}>
      <View style={styles.locationIcon}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon1.png")}
        />
        <Image
          style={[styles.borderIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/border.png")}
        />
      </View>
      <View style={styles.textBody}>
        <Text style={styles.locationName}>{locationName}</Text>
        <View style={styles.distancetimeBody}>
          <Text style={[styles.distance, styles.distanceTypo]}>{distance}</Text>
          <Image
            style={[styles.textDividerIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/text-divider1.png")}
          />
          <Text style={[styles.distance, styles.distanceTypo]}>{time}</Text>
        </View>
      </View>
      <View style={styles.chargeBody}>
        <Text style={[styles.chargeStatus, styles.chargePosition]}>
          Discharging
        </Text>
        <View style={[styles.chargePrediction, styles.chargePosition]}>
          <Text style={[styles.chargeValues, styles.icon1Layout]}>
            {chargeValues}
          </Text>
        </View>
      </View>
      <Pressable style={styles.deleteIcon} onPress={() => {}}>
        <Image
          style={styles.icon1Layout}
          contentFit="cover"
          source={require("../assets/delete-icon1.png")}
        />
      </Pressable>
      <Image
        style={styles.moveIcon}
        contentFit="cover"
        source={require("../assets/move-icon1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  distanceTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  chargePosition: {
    width: 81,
    left: 1,
    position: "absolute",
  },
  icon1Layout: {
    height: "100%",
    width: "100%",
  },
  icon: {
    top: 8,
    left: 8,
    width: 19,
    height: 20,
    position: "absolute",
  },
  borderIcon: {
    height: "97.22%",
    right: "0%",
    bottom: "2.78%",
    maxHeight: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  locationIcon: {
    width: 35,
    height: 36,
    overflow: "hidden",
  },
  locationName: {
    fontSize: FontSize.size_mini,
    color: Color.colorRoyalblue_100,
    height: 16,
    textAlign: "left",
    letterSpacing: 0,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  distance: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0,
  },
  textDividerIcon: {
    height: 20,
  },
  distancetimeBody: {
    gap: Gap.gap_lg,
    alignItems: "center",
    flexDirection: "row",
  },
  textBody: {
    width: 164,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    gap: Gap.gap_xs,
    overflow: "hidden",
  },
  chargeStatus: {
    top: 21,
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_smi,
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    height: 16,
  },
  chargeValues: {
    color: Color.colorWhite,
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_smi,
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  chargePrediction: {
    top: 0,
    backgroundColor: Color.colorGoldenrod,
    height: 21,
    overflow: "hidden",
  },
  chargeBody: {
    width: 82,
    height: 37,
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
  locationItem: {
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexWrap: "wrap",
    alignContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_3xs,
    gap: Gap.gap_md,
    marginTop: -1,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default LocationItem;
