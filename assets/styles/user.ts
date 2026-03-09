import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createUserStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    margin: 16,
    borderRadius: 20,
    overflow: "hidden"
  },

  header: {
    height: 140,
    backgroundColor: "#a8a4d6"
  },

  avatarContainer: {
    alignItems: "center",
    marginTop: -40
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ff7b7b",
    borderWidth: 4,
    borderColor: "#000"
  },

  content: {
    padding: 20,
    alignItems: "center"
  },

  lineLarge: {
    width: "80%",
    height: 8,
    backgroundColor: "#000",
    marginTop: 10
  },

  lineSmall: {
    width: "50%",
    height: 8,
    backgroundColor: "#000",
    marginTop: 10,
    marginBottom: 20
  },

  row: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 15
  },

  button: {
    width: 140,
    height: 40,
    borderRadius: 20
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginTop: 10
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#000",
    marginRight: 10
  },

  lineMedium: {
    flex: 1,
    height: 6,
    backgroundColor: "#000"
  } 
})
return styles 

}

