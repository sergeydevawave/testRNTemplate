import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import CardUpload from '@components/cardUpload';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Text>Profile Screen</Text>
        <View>
          <CardUpload />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  }
});

export default ProfileScreen;
