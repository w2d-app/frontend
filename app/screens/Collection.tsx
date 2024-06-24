import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PlaylistItem from '../components/PlaylistItem';
import CollectionHeader from '../components/CollectionHeader'; // Import the CollectionHeader component

const playlists = [
  {
    image: require('../../assets/images/cat_cover.jpg'),
    name: 'Saved Activities',
    description: 'TravelList 22 places',
  },
  {
    image: require('../../assets/images/cat_cover.jpg'),
    name: 'Waterloo',
    description: 'Ontario, Canada',
  },
  {
    image: require('../../assets/images/cat_cover.jpg'),
    name: 'Toronto',
    description: 'Ontario, Canada',
  },
  {
    image: require('../../assets/images/cat_cover.jpg'),
    name: 'Clubs',
    description: 'Collection - By Dora',
  },
  {
    image: require('../../assets/images/cat_cover.jpg'),
    name: 'Yummy Food',
    description: 'Collection - By Dora',
  },
];

const Collection: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Collection header */}
      <CollectionHeader
        profileImage={require('../../assets/images/cat_cover.jpg')}
      />
      {/* Playlist grid */}
      <FlatList
        data={playlists}
        renderItem={({ item }) => (
          <PlaylistItem
            image={item.image}
            name={item.name}
            description={item.description}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default Collection;
