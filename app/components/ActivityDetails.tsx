import React from 'react';
import {View, Image, Text} from 'react-native';
import {makeStyles} from '@rneui/themed';

interface ActivityDetailsProps {
  title: string;
  location: string;
  imageUrl: string;
}

const ActivityDetails: React.FC<ActivityDetailsProps> = ({
  title,
  location,
  imageUrl,
}) => {
  const styles = useStyles();
  return (
    <View style={styles.activityDetailsContainer}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.activityImage}
        resizeMode="cover"
      />
      <View style={styles.activityTitleContainer}>
        <Text style={styles.activityName}>{title}</Text>
        <Text style={styles.activityLocation}>{location}</Text>
      </View>
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  activityDetailsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    height: 430,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    marginLeft: 25,
    marginRight: 25,
    marginTop: -38,
  },
  activityImage: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },
  activityTitleContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activityName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  activityLocation: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
}));

export default ActivityDetails;
