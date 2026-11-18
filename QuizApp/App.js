import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Question from './components/Question';
import questions from './questions';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F5F9',
        padding: 15,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginLeft: 5,
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#2563EB',
        padding: 15,
        alignItems: 'center',
        marginBottom: 40,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

const MyApp = () => {
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
    const [ans4, setAns4] = useState('');
    const [ans5, setAns5] = useState('');

    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleRow}>
                <MaterialCommunityIcons name="cellphone-link" size={28} color="black" />
                <Text style={styles.title}>Guess the Tech Brand</Text>
            </View>
            <Text style={styles.subtitle}>
                Can you identify these technology brands?
            </Text>

            <Question
                label="Question 1: What tech brand is this?"
                image={questions[0].image}
                op1={questions[0].op1} op2={questions[0].op2} op3={questions[0].op3}
                onValueChange={(value) => setAns1(value)}
            />
            <Question
                label="Question 2: What tech brand is this?"
                image={questions[1].image}
                op1={questions[1].op1} op2={questions[1].op2} op3={questions[1].op3}
                onValueChange={(value) => setAns2(value)}
            />
            <Question
                label="Question 3: What tech brand is this?"
                image={questions[2].image}
                op1={questions[2].op1} op2={questions[2].op2} op3={questions[2].op3}
                onValueChange={(value) => setAns3(value)}
            />
            <Question
                label="Question 4: What tech brand is this?"
                image={questions[3].image}
                op1={questions[3].op1} op2={questions[3].op2} op3={questions[3].op3}
                onValueChange={(value) => setAns4(value)}
            />
            <Question
                label="Question 5: What tech brand is this?"
                image={questions[4].image}
                op1={questions[4].op1} op2={questions[4].op2} op3={questions[4].op3}
                onValueChange={(value) => setAns5(value)}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    let score = 0;
                    if (ans1 == questions[0].correct) {
                        score = score + 1;
                    }
                    if (ans2 == questions[1].correct) {
                        score = score + 1;
                    }
                    if (ans3 == questions[2].correct) {
                        score = score + 1;
                    }
                    if (ans4 == questions[3].correct) {
                        score = score + 1;
                    }
                    if (ans5 == questions[4].correct) {
                        score = score + 1;
                    }

                    let mymessage = 'Keep practising!';
                    if (score == 5) {
                        mymessage = 'Excellent!';
                    }
                    Alert.alert('You have ' + score + ' correct answers! ' + mymessage);
                }}
            >
                <Text style={styles.buttonText}>SUBMIT ANSWERS</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default MyApp;
