import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

interface ChargerInfoPopupProps {
    chargerName: string;
    address: string;
    rating: number;
    totalReviews: number;
    isOpen: boolean;
    phoneNumber: string;
    openingHours: { [key: string]: string };
    onSuggestEdit?: () => void;
}

const StarRating = ({ rating }: { rating: number }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <Text key={i} style={styles.starIcon}>
                {i <= rating ? '★' : '☆'}
            </Text>
        );
    }
    return <View style={styles.starContainer}>{stars}</View>;
};

export const ChargerInfoPopup: React.FC<ChargerInfoPopupProps> = ({
    chargerName,
    address,
    rating,
    totalReviews,
    isOpen,
    phoneNumber,
    openingHours,
    onSuggestEdit,
}) => {
    return (
        <ScrollView style={styles.container} bounces={false}>
            <Image
                source={require('../assets/Image.jpg')}
                style={styles.bannerImage}
                resizeMode="cover"
            />

            <View style={styles.contentContainer}>
                <Text style={styles.title}>{chargerName}</Text>
                <Text style={styles.address}>{address}</Text>

                <View style={styles.ratingContainer}>
                    <StarRating rating={rating} />
                    <Text style={styles.ratingText}>{rating}</Text>
                    <Text style={styles.reviewsText}>
                        ({totalReviews.toLocaleString()} reviews)
                    </Text>
                </View>

                {isOpen && <Text style={styles.openNowText}>Open now</Text>}

                <View style={styles.hoursContainer}>
                    {Object.entries(openingHours).map(([day, hours]) => (
                        <View key={day} style={styles.hourRow}>
                            <Text style={styles.dayText}>{day}</Text>
                            <Text style={styles.hoursText}>{hours}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.bookingContainer}>
                    <Text style={styles.sectionTitle}>Booking Slot</Text>
                    <TouchableOpacity style={styles.dropdownPlaceholder}>
                        <Text style={styles.dropdownText}>Select time</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.phoneContainer}>
                    <Text style={styles.phoneIcon}>📞</Text>
                    <Text style={styles.phoneNumber}>{phoneNumber}</Text>
                </View>

                <TouchableOpacity
                    style={styles.suggestEditButton}
                    onPress={onSuggestEdit}
                >
                    <Text style={styles.suggestEditText}>Suggest an edit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        maxHeight: Dimensions.get('window').height * 0.9,
    },
    bannerImage: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    contentContainer: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2ECC71',
        marginBottom: 4,
    },
    address: {
        fontSize: 16,
        color: '#666',
        marginBottom: 12,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    starContainer: {
        flexDirection: 'row',
        marginRight: 8,
    },
    starIcon: {
        fontSize: 18,
        color: '#FFD700',
    },
    ratingText: {
        fontSize: 16,
        marginRight: 4,
        color: '#333',
    },
    reviewsText: {
        fontSize: 16,
        color: '#666',
    },
    openNowText: {
        color: '#2ECC71',
        fontSize: 16,
        marginBottom: 16,
    },
    hoursContainer: {
        marginVertical: 16,
    },
    hourRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
    dayText: {
        fontSize: 16,
        color: '#333',
    },
    hoursText: {
        fontSize: 16,
        color: '#666',
    },
    bookingContainer: {
        marginVertical: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
        color: '#333',
    },
    dropdownPlaceholder: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#F8F8F8',
    },
    dropdownText: {
        color: '#666',
        fontSize: 16,
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
    },
    phoneIcon: {
        fontSize: 20,
        marginRight: 8,
    },
    phoneNumber: {
        fontSize: 16,
        color: '#333',
    },
    suggestEditButton: {
        backgroundColor: '#2ECC71',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginTop: 16,
    },
    suggestEditText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});
