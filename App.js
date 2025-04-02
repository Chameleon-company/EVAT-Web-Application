import React from 'react';
import { SafeAreaView } from 'react-native';
import { ChargerInfoPopup } from './ChargerInfoPopup';

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ChargerInfoPopup
                chargerName="Tesla Supercharger"
                address="123 Charging Ave"
                rating={4.5}
                totalReviews={326}
                isOpen={true}
                phoneNumber="1300518038"
                openingHours={{
                    Monday: 'Open 24 hours',
                    Tuesday: 'Open 24 hours',
                    Wednesday: 'Open 24 hours',
                    Thursday: 'Open 24 hours',
                    Friday: 'Open 24 hours',
                    Saturday: 'Open 24 hours',
                    Sunday: 'Open 24 hours',
                }}
            />
        </SafeAreaView>
    );
}
