import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header: React.FC<HeaderProps> = ({ username, notificationCount }) => {

  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/145385c6e022b186f590cc1ce73867a198547508d87a195127512ca4bf20c275?placeholderIfAbsent=true&apiKey=4e04c94ff895435db4776a62935fdc41" }}
          style={styles.avatar}
        />
        <Text style={styles.welcomeText}>Welcome {username}</Text>
      </View>
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationCount}>{notificationCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(27, 48, 185, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    marginRight: 10,
  },
  welcomeText: {
    color: 'white',
    fontSize: 20,
  },
  notificationContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
  },
  notificationCount: {
    color: 'black',
    fontSize: 14,
  },
});
export default Header;