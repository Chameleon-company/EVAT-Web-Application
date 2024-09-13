import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Gap,
  Padding,
} from "../GlobalStyles";

const StationItem = ({
  stationName,
  distance,
  time,
  chargeTime,
  chargeValues,
}) => {
  return (
    <View style={styles.stationItem}>
      <View style={styles.stationIcon}>
        <Text style={styles.stations}>Stations</Text>
        <Image
          style={[styles.stationIconChild, styles.stationIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-12.png")}
        />
        <Image
          style={[styles.stationIconItem, styles.stationIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-23.png")}
        />
        <View style={[styles.stationIconInner, styles.stationIconInnerBg]} />
        <View style={styles.rectangleView} />
      </View>
      <View style={styles.textBody}>
        <Text style={styles.stationName}>{stationName}</Text>
        <View style={[styles.distancetimeBody, styles.bodyFlexBox]}>
          <Text style={[styles.distance, styles.chargeTypo]}>{distance}</Text>
          <Image
            style={styles.textDividerIcon}
            contentFit="cover"
            source={require("../assets/text-divider2.png")}
          />
          <Text style={[styles.distance, styles.chargeTypo]}>{time}</Text>
        </View>
        <View style={styles.bodyFlexBox}>
          <Text style={styles.chargeTimeTitle}>Charge Time:</Text>
          <Text style={[styles.chargeTime, styles.chargeTypo]}>
            {chargeTime}
          </Text>
        </View>
      </View>
      <View style={styles.chargeBody}>
        <Text style={[styles.chargeStatus, styles.chargeFlexBox]}>
          CHAdeMO Charging
        </Text>
        <View style={[styles.chargePrediction, styles.stationIconInnerBg]}>
          <Text style={[styles.chargeValues, styles.chargeFlexBox]}>
            {chargeValues}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stationIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  stationIconInnerBg: {
    backgroundColor: Color.colorGreen,
    position: "absolute",
  },
  bodyFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  chargeTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  chargeFlexBox: {
    display: "flex",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  stations: {
    top: 56,
    fontSize: FontSize.size_xs,
    color: Color.colorRoyalblue_100,
    display: "none",
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 1,
    position: "absolute",
  },
  stationIconChild: {
    top: "4%",
    right: "2%",
    bottom: "-4%",
    left: "-2%",
    width: "100%",
    height: "100%",
  },
  stationIconItem: {
    height: "10%",
    width: "58%",
    top: "66%",
    right: "22%",
    bottom: "24%",
    left: "20%",
    borderRadius: Border.br_10xs,
  },
  stationIconInner: {
    height: "40%",
    width: "28%",
    top: "32%",
    right: "38%",
    bottom: "28%",
    left: "34%",
    borderRadius: Border.br_10xs,
  },
  rectangleView: {
    height: "12%",
    width: "20%",
    top: "38%",
    right: "42%",
    bottom: "50%",
    left: "38%",
    borderRadius: Border.br_12xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  stationIcon: {
    width: 35,
    height: 35,
  },
  stationName: {
    fontSize: FontSize.size_mini,
    color: Color.colorGreen,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  distance: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_200,
    textAlign: "left",
    letterSpacing: 0,
  },
  textDividerIcon: {
    height: 20,
    maxWidth: "100%",
    overflow: "hidden",
  },
  distancetimeBody: {
    gap: Gap.gap_lg,
  },
  chargeTimeTitle: {
    color: Color.colorRoyalblue_200,
    width: 84,
    zIndex: 0,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    height: 16,
    textAlign: "left",
    letterSpacing: 0,
  },
  chargeTime: {
    top: 0,
    left: 84,
    width: 105,
    zIndex: 1,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_200,
    textAlign: "left",
    letterSpacing: 0,
    height: 16,
    position: "absolute",
  },
  textBody: {
    width: 181,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    gap: Gap.gap_xs,
    overflow: "hidden",
  },
  chargeStatus: {
    top: 22,
    width: 131,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    height: 16,
    display: "flex",
    left: 1,
  },
  chargeValues: {
    top: "0%",
    left: "0%",
    color: Color.colorWhite,
    width: "100%",
    height: "100%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    display: "flex",
  },
  chargePrediction: {
    top: 1,
    left: 26,
    width: 81,
    height: 21,
    overflow: "hidden",
  },
  chargeBody: {
    width: 135,
    height: 41,
    overflow: "hidden",
  },
  stationItem: {
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexWrap: "wrap",
    alignContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    gap: Gap.gap_md,
    marginTop: -1,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
});

export default StationItem;
