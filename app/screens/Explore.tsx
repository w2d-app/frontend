// screens/ExploreScreen.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { makeStyles, useTheme } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import ActivityDetails from "../components/ActivityDetails";

const Explore: React.FC = () => {
  const styles = useStyles();
  const [selectedCity, setSelectedCity] = useState("Waterloo");
  const [isPickerVisible, setPickerVisible] = useState(false);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.dropDownContainer}>
        <TouchableOpacity
          style={styles.dropDownButton}
          onPress={() => setPickerVisible(!isPickerVisible)}
        >
          <Text style={styles.cityText}>city</Text>
          <Text style={styles.selectedCity}>{selectedCity}</Text>
          <Ionicons name="chevron-down" size={20} color="black" />
        </TouchableOpacity>

        {isPickerVisible && (
          <Picker
            selectedValue={selectedCity}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedCity(itemValue)}
          >
            <Picker.Item label="Waterloo" value="Waterloo" />
            <Picker.Item label="Toronto" value="Toronto" />
            <Picker.Item label="Kitchener" value="Kitchener" />
          </Picker>
        )}
      </View>
      <View style={styles.activityDetailsContainer}>
        <ActivityDetails />
      </View>
      <View>
        <Text>buttons</Text>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  dropDownContainer: {
    flexDirection: "column",
    width: "90%",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  dropDownButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cityText: {
    fontSize: 16,
    color: "#000",
  },
  selectedCity: {
    fontSize: 16,
    fontstyle: "bold",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  activityDetailsContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
}));

export default Explore;
