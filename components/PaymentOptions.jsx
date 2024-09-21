import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

interface PaymentOptionProps {
  title: string;
  onPress: () => void;
}

const PaymentOption: React.FC<PaymentOptionProps> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.option} onPress={onPress}>
    <Text style={styles.optionText}>{title}</Text>
    <Image
      resizeMode="contain"
      source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/42ec0d164324254ecf750c800a7c4d4109bf3fa78d9688fdeedd45dc3ec20e3c?placeholderIfAbsent=true&apiKey=4e04c94ff895435db4776a62935fdc41" }}
      style={styles.optionIcon}
    />
  </TouchableOpacity>
);
const PaymentOptions: React.FC = () => {
  const options = [
    { title: 'Current Payment Details', onPress: () => {} },
    { title: 'Change Payment Type/Details', onPress: () => {} },
    { title: 'Delete Payment Details', onPress: () => {} },
  ];
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <PaymentOption key={index} title={option.title} onPress={option.onPress} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(27, 48, 185, 1)',
    borderRadius: 10,
    padding: 10,
  },
  option: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 14,
  },
  optionIcon: {
    width: 11,
    height: 11,
  },
});


export default PaymentOptions;