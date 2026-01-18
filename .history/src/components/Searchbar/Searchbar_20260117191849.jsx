import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { MapPin, Mic } from "lucide-react-native";
import Assests
const { width } = Dimensions.get("window");

const TransparentSearchBar = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.searchBar}>

        {/* Left Icon */}
        <MapPin size={22} color="#5f6368" />

        {/* Input */}
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#5f6368"
          style={styles.input}
        />

        {/* Mic Icon */}
        <TouchableOpacity style={styles.iconBtn}>
          <Mic size={22} color="#5f6368" />
        </TouchableOpacity>

        {/* Profile Avatar */}
        <TouchableOpacity>
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={styles.avatar}
          />
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default TransparentSearchBar;


const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 50,
    width: "100%",
    alignItems: "center",
    zIndex: 10,      
    elevation: 10,  
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.92,
    height: 52,
    paddingHorizontal: 14,
    borderRadius: 30,


    backgroundColor: "rgba(255, 255, 255, 0.78)",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 10,
    color: "#000",
  },
  iconBtn: {
    marginRight: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});
