import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { makeStyles, useTheme } from "@rneui/themed";

const ActivityDetails: React.FC = () => {
  const styles = useStyles();
  const [selectedCity, setSelectedCity] = useState("Waterloo");
  return (
    <View style={styles.activityDetailsContainer}>
      <Image
        source={{
          uri: "https://blueskyeducation.co.in/wp-content/uploads/2022/08/WATERLOO-FI-1568x1044.png",
        }}
        style={styles.actitityImage}
      />
      <Text style={styles.activityTitle}>Activity Title</Text>
      <Text style={styles.activityLocation}>{selectedCity}</Text>
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  activityDetailsContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  actitityImage: {
    height: 200,
    width: 300,
    borderRadius: 8,
  },
  activityTitle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  activityLocation: {},
}));

export default ActivityDetails;
