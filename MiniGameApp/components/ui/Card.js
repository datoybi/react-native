import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    // backgroundColor: "tomato",
    borderRadius: 8,

    // boxShadow - android
    elevation: 4,

    // boxShadow - ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
