import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Boat from './Boat';
////
export default function App() {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.header}>GetABoat - For Sale</Text>
        <ScrollView>
          <Boat
              name="Sea Ray 500 Sundancer"
              description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
              picture={require('./img/sea_ray.jpg')}
              icon="sail-boat"
              price="$1,200,000"
          />
          <Boat
              name="Four Winns Horizon 180"
              description="A sporty look and refined details truly set the Horizon 180 above all others."
              picture={require('./img/four_winns.jpg')}
              icon="ferry"
              price="$45,000"
          />
          <Boat
              name="Flipper 640 ST"
              description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
              picture={require('./img/flipper.jpg')}
              icon="ship-wheel"
              price="$80,000"
          />
          <Boat
              name="Princess V48"
              description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
              picture={require('./img/princess.jpg')}
              icon="anchor"
              price="$950,000"
          />
          <Boat
              name="Bayliner 175 Bowrider"
              description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
              picture={require('./img/bayliner.jpg')}
              icon="rowing"
              price="$30,000"
          />
          <Boat
              name="Fairline Targa 47"
              description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
              picture={require('./img/fairline.jpg')}
              icon="waves"
              price="$850,000"
          />
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: '#C0C0C0',
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginBottom: 10,
  },
});

//