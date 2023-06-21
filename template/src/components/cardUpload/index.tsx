import React, { useState } from "react";
import ImagePicker from 'react-native-image-crop-picker';
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";

const CardUpload = () => {
  const [image, setImage] = useState<any>(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.btn]}
        onPress={() => {
          ImagePicker.openCamera({
            width: 140,
            height: 140,
            mediaType: 'photo',
            cropping: true,
            cropperCircleOverlay: true,
            includeBase64: true,
          }).then(images => {
            setImage({
              uri: `data:${images.mime};base64,${images?.data}`,
            });
          });
        }}>
        <Text>Make your photo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn]}
        onPress={() => {
          ImagePicker.openPicker({
            mediaType: 'photo',
            width: 140,
            height: 140,
            cropping: true,
            cropperCircleOverlay: true,
            includeBase64: true,
          }).then(images => {
            setImage({
              uri: `data:${images.mime};base64,${images.data}`,
            });
          });
          <Text>Pick your photo</Text>
        }}>
      </TouchableOpacity>
      {image ? <View style={styles.imageCard}>
        <Image source={image} />
      </View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  btn: {

  },
  imageCard: {
    borderRadius: 15,
    padding: 20,
    marginVertical: 20,
  }
});

export default CardUpload;
