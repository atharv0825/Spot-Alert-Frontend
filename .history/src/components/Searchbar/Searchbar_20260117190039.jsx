import { View, Text } from 'react-native'
import React from 'react'

const Searchbar = () => {
  return (
    <View>
      <Text>Searchbar</Text>
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 50,
    width: "100%",
    alignItems: "center",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.92,
    height: 52,
    paddingHorizontal: 14,
    borderRadius: 30,

    /* Transparent background */
    backgroundColor: "rgba(255, 255, 255, 0.78)",

    /* Elevation / shadow */
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
    borderRadius:
