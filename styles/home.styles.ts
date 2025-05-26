import { COLORS } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  title: {
    color: "red",
    fontSize: 20,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "cover",
  },
});
