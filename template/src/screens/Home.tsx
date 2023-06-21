import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  }
});

export default HomeScreen;
