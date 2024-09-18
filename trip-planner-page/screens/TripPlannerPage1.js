import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TextInput,
  StatusBar,
} from "react-native";
import { Image } from "expo-image";
import StartLocationItem from "../components/StartLocationItem";
import LocationItem from "../components/LocationItem";
import StationItem from "../components/StationItem";
import { Gap, Color, FontFamily, Padding, FontSize } from "../GlobalStyles";

const TripPlannerPage1 = () => {
  return (
    <View style={styles.tripplannerpage}>
      <View style={[styles.mainElements, styles.elementsIconPosition]}>
        <View style={[styles.vehicleTab, styles.vehicleTabFlexBox]}>
          <Text style={[styles.vehicleName, styles.headingTypo]}>
            2011 Nissan Leaf
          </Text>
          <View style={styles.chargeStatus}>
            <Text style={styles.chargePercentage}>{`100% `}</Text>
            <Image
              style={[styles.textDividerIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/text-divider.png")}
            />
            <Text style={styles.chargePercentage}>160 kms</Text>
          </View>
          <Text style={[styles.chargers, styles.chargeTypo]}>
            Chargers: CHAdeMO, Type 1
          </Text>
          <View style={styles.grabPoint} />
        </View>
        <View style={styles.routePlan}>
          <View style={[styles.routeElements, styles.elementsIconPosition]}>
            <StartLocationItem
              locationName="Deakin University"
              chargeValues="100%"
            />
            <LocationItem
              locationName="Austin Hospital"
              distance="15.5 kms"
              time="27 mins"
              chargeValues="60%"
            />
            <StationItem
              stationName={`Austin Hospital Car Park
`}
              distance="2 kms"
              time="1 mins"
              chargeTime="26 mins"
              chargeValues="80%"
            />
            <View style={[styles.locationItem, styles.timeBodyCommon]}>
              <View style={styles.locationIcon}>
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/icon2.png")}
                />
                <Image
                  style={[styles.borderIcon, styles.borderIconPosition]}
                  contentFit="cover"
                  source={require("../assets/border1.png")}
                />
              </View>
              <View style={[styles.textBody, styles.textSpaceBlock]}>
                <Text style={[styles.locationName, styles.driveFlexBox]}>
                  Gumnut Park Playground
                </Text>
                <View style={styles.bodyFlexBox}>
                  <Text style={[styles.distance, styles.driveFlexBox]}>
                    41.9 kms
                  </Text>
                  <Image
                    style={[styles.textDividerIcon1, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/text-divider2.png")}
                  />
                  <Text style={[styles.distance, styles.driveFlexBox]}>
                    39 mins
                  </Text>
                </View>
              </View>
              <View style={styles.chargeBody}>
                <Text style={[styles.chargeStatus1, styles.chargePosition]}>
                  Discharging
                </Text>
                <View style={[styles.chargePrediction, styles.chargeBg]}>
                  <Text style={[styles.chargeValues, styles.icon1Layout]}>
                    50%
                  </Text>
                </View>
              </View>
              <Pressable style={styles.deleteIcon} onPress={() => {}}>
                <Image
                  style={styles.icon1Layout}
                  contentFit="cover"
                  source={require("../assets/delete-icon2.png")}
                />
              </Pressable>
              <Image
                style={styles.moveIcon}
                contentFit="cover"
                source={require("../assets/move-icon2.png")}
              />
            </View>
          </View>
          <Text style={[styles.routePlanHeading, styles.headingTypo]}>
            Route Plan
          </Text>
        </View>
        <View style={[styles.tripOverview, styles.locationItemBorder]}>
          <Text style={[styles.overallHeading, styles.headingTypo]}>
            Overview
          </Text>
          <View style={styles.topStroke} />
          <View style={[styles.textBody1, styles.bodyFlexBox]}>
            <View style={styles.timeBodyCommon}>
              <View style={[styles.driveTimeBody, styles.vehicleTabFlexBox]}>
                <Text style={[styles.driveTitle, styles.driveFlexBox]}>
                  Driving:
                </Text>
                <Text style={[styles.driveTime, styles.driveFlexBox]}>
                  1 hr, 7 mins
                </Text>
              </View>
              <View style={styles.chargeTimeBody}>
                <Text style={[styles.driveTitle, styles.driveFlexBox]}>
                  Charging:
                </Text>
                <Text style={[styles.driveTime, styles.driveFlexBox]}>
                  26 mins
                </Text>
              </View>
            </View>
            <Image
              style={[styles.divider1Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/divider-1.png")}
            />
            <View style={styles.totalBody}>
              <Text style={[styles.overallTime, styles.driveTitleTypo]}>
                1 hr, 55 mins
              </Text>
              <Text style={[styles.overallTime, styles.driveTitleTypo]}>
                57.4 kms
              </Text>
            </View>
            <Image
              style={[styles.divider1Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/divider-1.png")}
            />
            <View style={[styles.chargeBody1, styles.chargeBody1FlexBox]}>
              <View style={styles.charge}>
                <View style={[styles.chargePrediction1, styles.chargeBg]}>
                  <Text style={[styles.chargeValues, styles.icon1Layout]}>
                    50%
                  </Text>
                </View>
                <Text style={[styles.chargeRemainingTitle, styles.chargeTypo]}>
                  Remaining
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.searchAndMap}>
          <Image
            style={[styles.mapPlaceholderIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/map-placeholder.png")}
          />
          <View style={[styles.searchBar, styles.searchLayout]}>
            <View style={[styles.searchBody, styles.searchLayout]}>
              <TextInput
                style={styles.searchField}
                placeholder="Search"
                placeholderTextColor="#1e1e1e"
              />
            </View>
            <Pressable
              style={[styles.clearIcon, styles.iconLayout]}
              onPress={() => {}}
            >
              <Image
                style={styles.icon1Layout}
                contentFit="cover"
                source={require("../assets/clear-icon.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.addIcon, styles.iconLayout]}
              onPress={() => {}}
            >
              <Image
                style={styles.icon1Layout}
                contentFit="cover"
                source={require("../assets/add-icon.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={[styles.navbarTemplate, styles.elementsIconPosition]}>
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/statusbar.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  elementsIconPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  vehicleTabFlexBox: {
    gap: Gap.gap_sm,
    alignItems: "center",
    overflow: "hidden",
  },
  headingTypo: {
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  chargeTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  timeBodyCommon: {
    gap: Gap.gap_md,
    overflow: "hidden",
  },
  borderIconPosition: {
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  textSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    overflow: "hidden",
  },
  driveFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  chargePosition: {
    width: 81,
    left: 1,
    position: "absolute",
  },
  chargeBg: {
    backgroundColor: Color.colorGoldenrod,
    height: 21,
    overflow: "hidden",
  },
  icon1Layout: {
    height: "100%",
    width: "100%",
  },
  locationItemBorder: {
    borderBottomWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  bodyFlexBox: {
    gap: Gap.gap_lg,
    flexDirection: "row",
    alignItems: "center",
  },
  driveTitleTypo: {
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  chargeBody1FlexBox: {
    alignContent: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  searchLayout: {
    height: 40,
    position: "absolute",
  },
  iconLayout: {
    width: 41,
    height: 40,
  },
  vehicleName: {
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.singleLineBodyBase_size,
  },
  chargePercentage: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    letterSpacing: 0,
  },
  textDividerIcon: {
    height: 14,
  },
  chargeStatus: {
    backgroundColor: Color.colorGreen,
    width: 354,
    gap: 10,
    justifyContent: "center",
    flexDirection: "row",
    height: 21,
    alignItems: "center",
  },
  chargers: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
  },
  grabPoint: {
    borderRadius: 5,
    backgroundColor: "#d9d9d9",
    width: 117,
    height: 8,
  },
  vehicleTab: {
    borderColor: Color.colorWhite,
    borderWidth: 3,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    borderStyle: "solid",
    alignSelf: "stretch",
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
    bottom: "2.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
    right: "0%",
    width: "100%",
  },
  locationIcon: {
    width: 35,
    height: 36,
    overflow: "hidden",
  },
  locationName: {
    fontSize: FontSize.size_mini,
    height: 16,
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  distance: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  textDividerIcon1: {
    height: 20,
  },
  textBody: {
    width: 188,
    gap: Gap.gap_xs,
    paddingHorizontal: 0,
  },
  chargeStatus1: {
    top: 22,
    display: "flex",
    fontSize: FontSize.size_smi,
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 0,
    alignItems: "center",
    height: 16,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  chargeValues: {
    display: "flex",
    fontSize: FontSize.size_smi,
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 0,
    alignItems: "center",
    top: "0%",
    left: "0%",
    position: "absolute",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: "100%",
  },
  chargePrediction: {
    top: 1,
    width: 81,
    left: 1,
    position: "absolute",
  },
  chargeBody: {
    width: 83,
    height: 39,
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
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_3xs,
    marginTop: -1,
    alignContent: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    alignSelf: "stretch",
    borderTopWidth: 1,
  },
  routeElements: {
    top: 21,
    alignItems: "center",
  },
  routePlanHeading: {
    marginLeft: -67,
    left: "50%",
    fontSize: 18,
    width: 134,
    top: 0,
    height: 21,
    textAlign: "center",
    position: "absolute",
  },
  routePlan: {
    alignSelf: "stretch",
    flex: 1,
  },
  overallHeading: {
    height: 18,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.singleLineBodyBase_size,
    alignSelf: "stretch",
  },
  topStroke: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  driveTitle: {
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
  },
  driveTime: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
  },
  driveTimeBody: {
    flexDirection: "row",
  },
  chargeTimeBody: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  divider1Icon: {
    height: 30,
  },
  overallTime: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    letterSpacing: 0,
  },
  totalBody: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  chargePrediction1: {
    width: 80,
  },
  chargeRemainingTitle: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  charge: {
    width: 107,
    height: 36,
    alignItems: "center",
  },
  chargeBody1: {
    overflow: "hidden",
  },
  textBody1: {
    paddingHorizontal: 3,
    paddingVertical: Padding.p_11xs,
    overflow: "hidden",
    justifyContent: "center",
  },
  tripOverview: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  mapPlaceholderIcon: {
    height: 377,
    top: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  searchField: {
    width: "87.8%",
    top: 12,
    left: "6.99%",
    fontFamily: FontFamily.singleLineBodyBase,
    fontSize: FontSize.singleLineBodyBase_size,
    position: "absolute",
  },
  searchBody: {
    width: "71.12%",
    right: "27.65%",
    left: "1.24%",
    borderRadius: 999,
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    zIndex: 0,
    top: 0,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  clearIcon: {
    zIndex: 1,
  },
  addIcon: {
    zIndex: 2,
  },
  searchBar: {
    width: "81.93%",
    top: 11,
    right: "9.16%",
    left: "8.92%",
    justifyContent: "flex-end",
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  searchAndMap: {
    height: 377,
    alignSelf: "stretch",
  },
  mainElements: {
    height: "84.86%",
    top: "4.36%",
    bottom: "10.78%",
    gap: 15,
    alignItems: "center",
  },
  navbarTemplate: {
    bottom: 0,
    top: 0,
  },
  tripplannerpage: {
    height: 986,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default TripPlannerPage1;
