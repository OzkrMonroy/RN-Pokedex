import { StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  cardIconBackgroundContainer: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 0,
    right: 0,
    overflow: "hidden",
  },
  cardIconBackground: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: -20,
    right: -25,
    opacity: .5,
  },
  cardImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5,
  }
})