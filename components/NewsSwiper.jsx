import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import Swiper from 'react-native-swiper';

const NewsSwiper = () => {
  return(
    <Swiper style={styles.container}>
      <View><Image source={require('../assets/new1.png')} style={styles.img} /></View>
      <View><Image source={require('../assets/new2.jpeg')} style={styles.img} /></View>
      <View><Image source={require('../assets/new3.png')} style={styles.img} /></View>
      <View><Image source={require('../assets/new4.jpeg')} style={styles.img} /></View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  }
});

export default NewsSwiper;
