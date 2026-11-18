import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Boat = ({ name, description, picture, icon, price }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleRow}>
                <MaterialCommunityIcons name={icon} size={24} color="white" />
                <Text style={styles.name}>{name}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>
            <Image source={picture} style={styles.picture} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C0C0C0',
        borderWidth: 1,
        borderColor: 'black',
        padding: 8,
        marginBottom: 15,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555555',
        padding: 6,
    },
    name: {
        fontSize: 18,
        color: 'white',
        textTransform: 'uppercase',
        marginLeft: 5,
    },
    description: {
        fontSize: 12,
        textAlign: 'center',
        backgroundColor: '#E8E8E8',
        borderWidth: 1,
        borderColor: 'grey',
        padding: 5,
        marginTop: 10,
        marginHorizontal: 10,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        marginVertical: 5,
    },
    picture: {
        width: '100%',
        height: 220,
    },
});

export default Boat;

//