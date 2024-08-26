import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {makeStyles} from '@rneui/themed';
import {Picker} from '@react-native-picker/picker';
import {Ionicons} from '@expo/vector-icons';
import Swiper, {SwiperRef} from 'react-native-deck-swiper';
import ActivityDetails from '../components/ActivityDetails';

const Explore: React.FC = () => {
  const styles = useStyles();
  const [selectedCity, setSelectedCity] = useState('Waterloo');
  const [isPickerVisible, setPickerVisible] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);

  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Earth Sciences Museum',
      location: 'Waterloo, ON',
      imageUrl:
        'https://blueskyeducation.co.in/wp-content/uploads/2022/08/WATERLOO-FI-1568x1044.png',
    },
    {
      id: 2,
      title: 'Statue of Liberty',
      location: 'New York, NY',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1681803531285-75db948035d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D',
    },
    // Add more cards here
  ]);

  const handleSwipeLeft = (cardIndex: number) => {
    console.log(`Swiped left on card index: ${cardIndex}`);
    // Additional logic if needed
  };

  const handleSwipeRight = (cardIndex: number) => {
    console.log(`Swiped right on card index: ${cardIndex}`);
    // Additional logic if needed
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.dropDownContainer}>
        <TouchableOpacity
          style={styles.dropDownButton}
          onPress={() => setPickerVisible(!isPickerVisible)}>
          <Text style={styles.cityText}>city</Text>
          <Text style={styles.selectedCity}>{selectedCity}</Text>
          <Ionicons name="chevron-down" size={20} color="black" />
        </TouchableOpacity>

        {isPickerVisible && (
          // <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCity}
            style={styles.picker}
            onValueChange={itemValue => setSelectedCity(itemValue)}>
            <Picker.Item label="Waterloo" value="Waterloo" />
            <Picker.Item label="Toronto" value="Toronto" />
            <Picker.Item label="New York" value="New York" />
          </Picker>
          // </View>
        )}
      </View>
      <View style={styles.activityCardContainer}>
        <Swiper
          ref={swiperRef}
          cards={cards}
          renderCard={card => (
            <ActivityDetails
              title={card.title}
              location={card.location}
              imageUrl={card.imageUrl}
            />
          )}
          onSwipedLeft={cardIndex => handleSwipeLeft(cardIndex)}
          onSwipedRight={cardIndex => handleSwipeRight(cardIndex)}
          verticalSwipe={false}
          stackSize={3}
          cardIndex={0}
          backgroundColor={'white'}
          containerStyle={styles.swiperContainer}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.smallButtonStyle}
          onPress={() => swiperRef.current?.swipeLeft()}>
          <Ionicons name="arrow-back-outline" size={30} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.largeButtonStyle}
          onPress={() => swiperRef.current?.swipeLeft()}>
          <Ionicons name="close-outline" size={50} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.largeButtonStyle}
          onPress={() => swiperRef.current?.swipeRight()}>
          <Ionicons name="heart-outline" size={45} color="#D68A8A" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButtonStyle}>
          <Ionicons name="ellipsis-horizontal" size={35} color="#206E86" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  pageContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#ffffff', // Changed to white
  },
  dropDownContainer: {
    flexDirection: 'column',
    width: '90%',
    //height: 70,
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000000',
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginTop: 10,
    marginBottom: 20,
    zIndex: 20,
  },
  dropDownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //height: 80,
    paddingVertical: 10,
    paddingHorizontal: 15,
    zIndex: 20,
  },
  // pickerContainer: {
  //   //position: 'absolute',
  //   top: 70, // Adjust this value to position the picker below the dropdown button
  //   left: '5%',
  //   width: '90%',
  //   backgroundColor: 'white',
  //   borderRadius: 25,
  //   borderWidth: 1,
  //   //borderColor: '#000000',
  //   zIndex: 20, // Ensure the picker is above other components
  // },
  cityText: {
    fontSize: 16,
    color: '#000',
  },
  selectedCity: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  picker: {
    //height: 80,
    width: '100%',
    // zIndex: 20,
    // position: 'absolute',
    // top: 70,
  },
  activityCardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // marginright: -150,
    // backgroundColor: 'white',
    //marginBottom: 300,

    // marginBottom: 10,
  },
  swiperContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'pink',
    height: 450, // Ensure a fixed height to center the card
    width: '100%', // Make sure the swiper takes the full width
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingBottom: 10,
    // backgroundColor: 'pink', // Ensure background color is white
  },
  smallButtonStyle: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 55,
    height: 55,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  largeButtonStyle: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 70,
    height: 70,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
}));

export default Explore;
