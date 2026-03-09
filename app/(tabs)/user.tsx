import React from "react";
import { View, StyleSheet} from "react-native";
import { createUserStyles } from "@/assets/styles/user";
import useTheme from "@/hooks/useTheme";      

export default function ProfileCard() {
   const { toggleDarkMode, colors } = useTheme();    
    const styles = createUserStyles(colors);
  
  return (
    <View style={styles.container}>
      
      <View style={styles.header} />

      <View style={styles.avatarContainer}>
        <View style={styles.avatar} />
      </View>

      <View style={styles.content}>
        <View style={styles.lineLarge} />
        <View style={styles.lineSmall} />

        <View style={styles.row}>
          <View style={[styles.button, { backgroundColor: "#10a76d" }]} />
          <View style={[styles.button, { backgroundColor: "#efaaaa" }]} />
        </View>

        <View style={styles.row}>
          <View style={[styles.button, { backgroundColor: "#6b63ff" }]} />
          <View style={[styles.button, { backgroundColor: "#ff7b7b" }]} />
        </View>

        <View style={styles.infoRow}>
          <View style={styles.dot} />
          <View style={styles.lineMedium} />
        </View>

        <View style={styles.infoRow}>
          <View style={styles.dot} />
          <View style={styles.lineMedium} />
        </View>
      </View>

    </View>
  );
}
