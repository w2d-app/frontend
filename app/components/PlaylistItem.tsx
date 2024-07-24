import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';


type RootStackParamList = {
  TabNavigator: undefined;
  TestCollection: undefined;
};

type CollectionScreenNavgationProp = StackNavigationProp<
  RootStackParamList,
  'TabNavigator'
>;

interface PlaylistItemProps {
  image: string | number; // Update to allow both local (require) and remote (URL) image sources
  name: string;
  description: string;
}

const PlaylistItem: React.FC<PlaylistItemProps> = ({
  image,
  name,
  description,
}) => {
  
  const navigation = useNavigation<CollectionScreenNavgationProp>();
  
  // Convert string to require if it's a local image path
  const imageSource = typeof image === 'string' ? { uri: image } : image;

  return (
    <TouchableOpacity style={styles.playlistItem} onPress={() => navigation.navigate('TestCollection')}>
      <Image source={imageSource} style={styles.playlistImage} />
      <View style={styles.playlistInfo}>
        <Text style={styles.playlistName}>{name}</Text>
        <Text style={styles.playlistDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 25,
  },
  playlistImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  playlistInfo: {
    flex: 1,
  },
  playlistName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  playlistDescription: {
    fontSize: 14,
    color: '#888',
  },
});

export default PlaylistItem;
