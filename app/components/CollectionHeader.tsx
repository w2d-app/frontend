// Import necessary libraries
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Define the props if needed
interface CollectionHeaderProps {
  profileImage: string | number; // Assuming a local image path or a URL
}

const CollectionHeader: React.FC<CollectionHeaderProps> = ({
  profileImage,
}) => {
  // Convert string to require if it's a local image path
  const imageSource = typeof profileImage === 'string' ? { uri: profileImage } : profileImage;

  // Define an array of categories
  const categories = ["Cities", "By You", "Food", "Limited", "View History"];

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTopRow}>
        <View style={styles.profileSection}>
          <Image source={imageSource} style={styles.profileImage} />
          <Text style={styles.collectionTitle}>Your Collection</Text>
        </View>
        <View style={styles.iconsSection}>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="add-outline" size={24} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.categories}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

// Define the styles
const styles = StyleSheet.create({
  headerContainer: {
    padding: 15,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    paddingBottom: 10,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10, // Space between the two rows
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // Circular image
    marginRight: 10,
  },
  collectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconsSection: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  categories: {
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15, // Rounded corners for the category container
    overflow: 'hidden', // Hide overflow content
  },
  categoryText: {
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 13,
    borderRadius: 20, // Rounded corners for each category
    borderWidth: 1, // Border thickness
    borderColor: '#ccc', // Light grey border color
    backgroundColor: '#ffffff', // Background color for better contrast
    textAlign: 'center', // Center align text within the rounded border
    overflow: 'hidden', // Hide text that overflows the border
  },
});

export default CollectionHeader;
