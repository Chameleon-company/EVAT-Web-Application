import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const AccountManagementPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Management</Text>
      <View style={styles.profileContainer}>
        <View style={styles.profileIcon}>
          <Text style={styles.profileIconText}>👤</Text>
        </View>
        <Text style={styles.editText}>Edit</Text>
      </View>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Address</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Contact Details</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Email ID</Text></TouchableOpacity>
      <View style={styles.sectionsBox}>
        <Text style={styles.sectionsTitle}>Sections</Text>
        <View style={styles.sectionsRow}>
          <View style={styles.sectionItem}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.sectionLabel}>Select Car</Text>
          </View>
          <View style={styles.sectionItem}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.sectionLabel}>Fav charger</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.okayButton}><Text style={styles.okayButtonText}>okay</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(200,255,200,0.3)', // Simulate blurred map background
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 4,
    borderColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  profileIconText: {
    fontSize: 40,
  },
  editText: {
    marginTop: 8,
    fontWeight: '500',
    fontSize: 16,
  },
  button: {
    width: 280,
    height: 48,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  sectionsBox: {
    width: 340,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 10,
    padding: 18,
    marginTop: 30,
    alignItems: 'center',
  },
  sectionsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
  },
  sectionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 8,
  },
  sectionItem: {
    alignItems: 'center',
    flex: 1,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(200,200,200,0.3)',
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  okayButton: {
    marginTop: 30,
    backgroundColor: '#6fa07f',
    borderRadius: 22,
    width: 120,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  okayButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default AccountManagementPage; 