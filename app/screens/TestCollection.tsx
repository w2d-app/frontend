import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';
import LocationListItem from '../components/LocationListItem';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const HEADER_MAX_HEIGHT = SCREEN_WIDTH - 60; // Square image + padding
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const ELASTIC_THRESHOLD = 200; // Amount of elastic scroll allowed

const userContext = {
  username: 'sample username',
  userCollection: {
    collectionImage: require('../../assets/images/cat_cover.jpg'),
    collectionTitle: 'Sample Title',
    collectionDescription: 'sample description can be seen here',
  },
};

const locations = [
  {
    name: 'Eiffel Tower',
    address: 'Paris, France',
    image: require('../../assets/images/cat_cover.jpg'),
  },
  {
    name: 'Statue of Liberty',
    address: 'New York, United States',
    image: require('../../assets/images/cat_cover.jpg'),
  },
  {
    name: 'Great Wall of China',
    address: 'Huairou, China',
    image: require('../../assets/images/cat_cover.jpg'),
  },
  {
    name: 'Colosseum',
    address: 'Rome, Italy',
    image: require('../../assets/images/cat_cover.jpg'),
  },
  {
    name: 'Taj Mahal',
    address: 'Agra, India',
    image: require('../../assets/images/cat_cover.jpg'),
  },
  {
    name: 'Machu Picchu',
    address: 'Cusco, Peru',
    image: require('../../assets/images/cat_cover.jpg'),
  },
  {
    name: 'Sydney Opera House',
    address: 'Sydney, Australia',
    image: require('../../assets/images/cat_cover.jpg'),
  },
  {
    name: 'Christ the Redeemer',
    address: 'Rio de Janeiro, Brazil',
    image: require('../../assets/images/cat_cover.jpg'),
  },
  {
    name: 'Pyramids of Giza',
    address: 'Giza, Egypt',
    image: require('../../assets/images/cat_cover.jpg'),
  },
  {
    name: 'Louvre Museum',
    address: 'Paris, France',
    image: require('../../assets/images/cat_cover.jpg'),
  },
];

const TestCollection: React.FC = () => {
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [-ELASTIC_THRESHOLD, 0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT + ELASTIC_THRESHOLD, HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [-ELASTIC_THRESHOLD, 0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.5, 0],
    extrapolate: 'clamp',
  });

  const imageScale = scrollY.interpolate({
    inputRange: [-ELASTIC_THRESHOLD, 0, HEADER_SCROLL_DISTANCE],
    outputRange: [1.4, 1, 0.5], // Increased scale factor for faster growth/shrinkage
    extrapolate: 'clamp',
  });

  const imageTranslateY = scrollY.interpolate({
    inputRange: [-ELASTIC_THRESHOLD, 0, HEADER_SCROLL_DISTANCE],
    outputRange: [ELASTIC_THRESHOLD / 2, 0, -HEADER_SCROLL_DISTANCE / 4],
    extrapolate: 'clamp',
  });

  const renderHeader = () => (
    <Animated.View style={[styles.header, { height: headerHeight }]}>
      <Animated.Image
        style={[
          styles.mainImage,
          {
            opacity: imageOpacity,
            transform: [
              { scale: imageScale },
              { translateY: imageTranslateY },
            ],
          },
        ]}
        source={userContext.userCollection.collectionImage}
      />
      <Text style={styles.title}>
        {userContext.userCollection.collectionTitle}
      </Text>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <ArrowLeft color="black" size={24} />
      </TouchableOpacity>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <View style={{ height: HEADER_MAX_HEIGHT }} />
        <View style={styles.scrollContent}>
          <Text style={styles.description}>{userContext.userCollection.collectionDescription}</Text>
          <View style={styles.userContainer}>
            <Image 
              source={userContext.userCollection.collectionImage} 
              style={styles.userImage}
            />
            <Text style={styles.username}>{userContext.username}</Text>
          </View>
          <View style={styles.grid}>
            {locations.map((item, index) => (
              <View key={item.name} style={styles.gridItem}>
                <LocationListItem
                  image={item.image}
                  name={item.name}
                  address={item.address}
                />
              </View>
            ))}
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8f8f8',
    overflow: 'hidden',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mainImage: {
    width: SCREEN_WIDTH - 140,
    height: SCREEN_WIDTH - 140,
    resizeMode: 'cover',
    marginTop: 20,
  },
  title: {
    position: 'absolute',
    bottom: 16,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',

  },
  scrollContent: {
    backgroundColor: 'white',
    paddingTop: 20,
  },
  description: {
    fontSize: 16,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 5,
  },
  gridItem: {
    width: '33.33%',
    alignItems: 'flex-start',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 15,
    zIndex: 2,
    padding: 8,
    borderRadius: 20,
  },
});

export default TestCollection;