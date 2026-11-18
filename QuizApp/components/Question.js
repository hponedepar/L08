import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
//
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        padding: 5,
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: 120,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        backgroundColor: 'steelblue',
        padding: 5,
        marginTop: 5,
    },
});

const Question = ({label, image, op1, op2, op3, onValueChange}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: image}} style={styles.image} resizeMode="contain" />
            <Text style={styles.label}>{label}</Text>
            <Picker onValueChange={onValueChange}>
                <Picker.Item label='Select an answer...' value=''/>
                <Picker.Item label={op1} value={op1}/>
                <Picker.Item label={op2} value={op2}/>
                <Picker.Item label={op3} value={op3}/>
            </Picker>
        </View>
    );
};

export default Question;
