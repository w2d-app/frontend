// LocationListItem.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface LocationListItemProps {
  image: string | number;
  name: string;
  address: string;
}

const LocationListItem: React.FC<LocationListItemProps> = ({ image, name, address }) => {
  const imageSource = typeof image === 'string' ? { uri: image } : image;

  return (
    <View style={styles.locationItem}>
      <Image source={imageSource} style={styles.locationImage} />
      <Text style={styles.locationName} numberOfLines={2} ellipsizeMode="tail">{name}</Text>
      <Text style={styles.locationAddress} numberOfLines={1} ellipsizeMode="tail">{address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  locationItem: {
    width: '100%',
    aspectRatio: 1,
    padding: 5,
    marginBottom: 60,
  },
  locationImage: {
    height: '100%',
    aspectRatio: 1,
  },
  locationName: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 4,
    width: '100%',
  },
  locationAddress: {
    fontSize: 12,
    color: '#888',
    width: '100%',
  },
});

export default LocationListItem;