/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Modal, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';

const VehiclePage = () => {
    const [search, setSearch] = useState<string>(''); // Specify type
    const [suggestions, setSuggestions] = useState<string[]>([]); // Specify type
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Specify type
    const [selectedYear, setSelectedYear] = useState<string>(''); // Specify type
    const [skipForNow, setSkipForNow] = useState<boolean>(false); // Specify type

    const vehicles: string[] = ["Audi e-tron", "Polestar", "Tesla Model 3", "Tesla Model S", "Tesla Model Y"]; // Example list

    const handleSearchChange = (value: string) => {
        setSearch(value);
        setSuggestions(vehicles.filter(vehicle => vehicle.toLowerCase().includes(value.toLowerCase())));
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleYearChange = (value: string) => {
        setSelectedYear(value);
    };

    const handleSkipChange = (value: boolean) => {
        setSkipForNow(value);
    };

    const chargingPortTypes: string[] = ["Type 1", "Type 2", "CHAdeMO", "CCS", "Tesla Supercharger"]; // Example options

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: 'https://i.ibb.co/yRY5hWd/addvehiclebg.jpg' }} style={styles.backgroundImage} />
            <View style={styles.content}>
                <Image source={{ uri: 'https://i.ibb.co/Q6dRkQN/companylogo.jpg' }} style={styles.logo} />
                <Text style={styles.heading}>Add Your Electric Vehicle</Text>
                <Text style={styles.description}>Your vehicle is used to assess the compatibility of charging stations.</Text>
                <View style={styles.searchField}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type your vehicle..."
                        value={search}
                        onChangeText={handleSearchChange}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Vehicle type?"
                    />
                    {suggestions.length > 0 && (
                        <View style={styles.suggestions}>
                            {suggestions.map((suggestion, index) => (
                                <Text key={index} style={styles.suggestion}>{suggestion}</Text>
                            ))}
                        </View>
                    )}
                </View>

                <View style={styles.label}>
                    <Text>Select Charging Port Type</Text>
                    <Picker style={styles.picker}>
                        {chargingPortTypes.map((type, index) => (
                            <Picker.Item key={index} label={type} value={type} />
                        ))}
                    </Picker>
                </View>

                <View style={styles.label}>
                    <Text>Vehicle Date of Manufacture</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="YYYY-MM-DD"
                        value={selectedYear}
                        onChangeText={handleYearChange}
                    />
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={skipForNow}
                        onValueChange={handleSkipChange}
                    />
                    <Text>Skip for Now</Text>
                </View>

                <Button title="Proceed" onPress={() => {}} />

                <View style={styles.bottomLeft}>
                    <Text>Need Help?</Text>
                    <TouchableOpacity onPress={openModal}>
                        <Image source={{ uri: 'https://i.ibb.co/qB7vfb3/Needhelp.png' }} style={styles.linkImage} />
                    </TouchableOpacity>
                </View>
            </View>

            {isModalOpen && (
                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={isModalOpen}
                    onRequestClose={closeModal}
                >
                    <View style={styles.modal}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Vehicle Information</Text>
                            <Text>Please fill out the details below.</Text>
                            <TextInput
                                style={styles.modalInput}
                                placeholder="Preferred Contact Method (Phone/Email)"
                            />
                            <TextInput
                                style={styles.modalInput}
                                placeholder="Vehicle Name/Type"
                            />
                            <TextInput
                                style={styles.modalInput}
                                placeholder="Year of Manufacture"
                            />
                            <Text>Thank you for your patience! We will locate your car and add it to our system. Once that’s done, we’ll notify you. In the meantime, you can skip this page and proceed.</Text>
                            <Button title="Submit" onPress={closeModal} />
                        </View>
                    </View>
                </Modal>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        zIndex: -1,
    },
    content: {
        padding: 20,
        alignItems: 'center',
    },
    logo: {
        width: 160,
        height: 160,
        marginBottom: 20,
        borderRadius: 80,
        opacity: 0.7,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    description: {
        fontSize: 16,
        fontStyle: 'italic',
        color: 'black',
    },
    searchField: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        padding: 10,
        marginVertical: 10,
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#f9f9f9',
    },
    suggestions: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 5,
    },
    suggestion: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    label: {
        width: '100%',
        marginBottom: 20,
    },
    picker: {
        width: '100%',
        height: 40,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    bottomLeft: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        alignItems: 'center',
    },
    linkImage: {
        width: 50,
        height: 50,
        marginTop: 5,
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        maxWidth: 400,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalInput: {
        width: '100%',
        height: 40,
        padding: 10,
        marginVertical: 10,
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#f9f9f9',
    },
    customButton:{
      width:'100%',
      height:30,
      backgroundColor:'grey',
    }
});

export default VehiclePage;
