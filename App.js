import React from 'react'
import { useState } from 'react'
import { View, Text, FlatList, StyleSheet, Linking } from 'react-native'
import { Button, Card, Paragraph, Title } from 'react-native-paper'

const data = [
  { id: '1', number: '082373023737', maps: 'https://www.google.com/maps/place/Adiksi+Coffee+Korpri/@-5.3700652,105.2962382,17z/data=!3m1!4b1!4m5!3m4!1s0x2e40dbebbec91f71:0x321fe3512e793ec8!8m2!3d-5.3700705!4d105.2984269', instagram: 'https://www.instagram.com/adiksicoffee/', title: 'Adiksi Korpri', image: require("./assets/adiksi.jpg"), favorite: true, description: 'Jl. Rya Cudu, Way Dadi, Kec. Sukarame, Kota Bandar Lampung' },
  { id: '2', number: '08117226558', maps: 'https://www.google.com/maps/place/Kedai+Kopi+Kini/@-5.386832,105.2818104,17z/data=!3m1!4b1!4m5!3m4!1s0x2e40db23739d717b:0x8812c5000b0b0bfb!8m2!3d-5.386832!4d105.2818104', instagram: 'https://www.instagram.com/kedaikopikini/', title: 'Kedai Kopi Kini', image: require("./assets/kini.jpg"), favorite: true, description: 'Jl. Arif Rahman Hakim TR/1A BTN 3, Way Halim Permai (dekat Transmart) Bandar Lampung.' },
  { id: '3', number: '', maps: 'https://www.google.com/maps/place/QALU+COFFEE/@-5.3670705,105.3002676,17z/data=!3m1!4b1!4m5!3m4!1s0x2e40dbce33841593:0xeddd92721bf35f84!8m2!3d-5.3670705!4d105.3002676', instagram: 'https://www.instagram.com/qalu.coffee/', title: 'Qalu Coffee', image: require("./assets/qalu.jpg"), favorite: true, description: 'Jl. Harapan Jaya, Sukarame, Kota Bandar Lampung' },
  { id: '4', number: '', maps: 'https://www.google.com/maps/place/Kopi+Ketje+Korpri/@-5.3648366,105.299459,17z/data=!3m1!4b1!4m5!3m4!1s0x2e40c5bc8ad4473d:0xc602116dc4bf134!8m2!3d-5.3648419!4d105.3016477', instagram: 'https://www.instagram.com/kopiketjekorpri/', title: 'Kopi Ketje Korpri', image: require("./assets/ketje.jpg"), favorite: true, description: 'Jl. Harapan Jaya, Kec. Sukarame, Kota Bandar Lampung' },
  { id: '5', number: '08118901747', maps: 'https://www.google.com/maps/place/Jiwa+Toast+Jikid+747/@-5.3609682,105.3040236,17z/data=!3m1!4b1!4m5!3m4!1s0x2e40c542c96dc63d:0xa913c9c4f723bf5f!8m2!3d-5.3609631!4d105.3040163', instagram: 'https://www.instagram.com/kopijanjijiwa.bdlryacudu/', title: 'Kopi Janji Jiwa Sukarame 747', image: require('./assets/janjiw.jpg'), favorite: true, description: 'Jl. Rya Cudu, Harapan Jaya, Kec. Sukarame, Kota Bandar Lampung' },
]

const CardItem = ({ item }) => {
  const [showMore, setShowMore] = useState(false)

  return (

    <Card style={styles.cardStyle}>
      <Card.Cover source={item.image} />
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <View>
          <Button onPress={() => {
            Linking.openURL(`tel:${item.number}`)
          }} color="red">Call</Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => {
            Linking.openURL(item.instagram);
          }}
            color="steelblue">Instagram</Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => {
            Linking.openURL(item.maps);
          }}
            color="">Map</Button>
        </View>

      </Card.Actions>
    </Card>
  )
}

const Home = ({ navigation, route }) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id + index.toString()}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 20 }}
        renderItem={({ item }) => (
          <CardItem item={item} />
        )}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },

})
