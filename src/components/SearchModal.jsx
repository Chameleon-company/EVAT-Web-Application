import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TextInput,
    Select,
    Button,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native';

// type Props = {
//   visible: boolean;
//   onClose: () => void;
//   onResults: (results: any[]) => void;
// };

const SearchModal = ({ visible, onClose, onResults }) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [distance, setDistance] = useState('');
    const [connectorType, setConnectorType] = useState('');
    const [current, setCurrent] = useState('');
    const [operator, setOperator] = useState('');
    const navigation = useNavigation();

    const handleSearch = async () => {
        let query = 'https://evat.vt2.app/api/navigation/ev-chargers?';

        if (location) {
            const [lat, lon] = location.split(',').map(coord => coord.trim());
            query += `lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&`;
        }
        if (distance) query += `distance=${encodeURIComponent(distance)}&`;
        if (connectorType) query += `chargerType=${encodeURIComponent(connectorType)}&`;

        try {
            const response = await fetch(query, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (response.ok) {
                onResults(data.data);
                onClose();
            } else {
                console.error('Failed to fetch:', data.message);
            }
        } catch (error) {
            console.error('Search error:', error);
        }
    };

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={styles.overlay}>
                <ScrollView style={styles.modal}>
                    <Text style={styles.header}>Search Chargers</Text>

                    <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
                    <TextInput placeholder="Location" value={location} onChangeText={setLocation} style={styles.input} />
                    <TextInput placeholder="Distance (km)" value={distance} onChangeText={setDistance} keyboardType="numeric" style={styles.input} />
                    {/* < placeholder="Distance (km)" value={distance} onChangeText={setDistance} keyboardType="numeric" style={styles.input} /> */}
                    <TextInput placeholder="Connector Type" value={connectorType} onChangeText={setConnectorType} style={styles.input} />
                    <TextInput placeholder="Current (AC/DC)" value={current} onChangeText={setCurrent} style={styles.input} />
                    <TextInput placeholder="Operator" value={operator} onChangeText={setOperator} style={styles.input} />

                    <View style={styles.buttonGroup}>
                        <Button title="Search" onPress={handleSearch} />
                        <Button title="Cancel" onPress={onClose} color="red" />
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#000000aa',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: 'white',
        margin: 20,
        padding: 20,
        borderRadius: 10,
        maxHeight: Dimensions.get('window').height * 0.8,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 12,
        padding: 8,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
});

export default SearchModal;