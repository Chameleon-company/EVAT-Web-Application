import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

interface AccountProps {
  name: string;
  logoUri: string;
}
const Account: React.FC<AccountProps> = ({ name, logoUri }) => (
  <View style={styles.accountContainer}>
    <Text style={styles.accountName}>{name}</Text>
    <Image
      resizeMode="contain"
      source={{ uri: logoUri }}
      style={styles.accountLogo}
    />
  </View>
);
const ConnectedAccounts: React.FC = () => {
  const accounts = [
    { name: 'ChargeFox', logoUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/72f557b630bbb56f8cf2987b667f3336e62d6eee7ce115b5be4022698a7dbb00?placeholderIfAbsent=true&apiKey=4e04c94ff895435db4776a62935fdc41' },
    { name: 'Evie Charge', logoUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c52e5de47b18ef6aa844f3af8384dd90bb1791968e7efe291c125c4931f7d4b8?placeholderIfAbsent=true&apiKey=4e04c94ff895435db4776a62935fdc41' },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connected Accounts</Text>
      <View style={styles.accountsWrapper}>
        {accounts.map((account, index) => (
          <Account key={index} name={account.name} logoUri={account.logoUri} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  title: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 10,
  },
  accountsWrapper: {
    backgroundColor: 'rgba(27, 48, 185, 1)',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  accountContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: 139,
    height: 139,
  },
  accountName: {
    fontSize: 14,
    marginBottom: 10,
  },

  accountLogo: {
    width: 100,
    height: 100,
  },
});

export default ConnectedAccounts;