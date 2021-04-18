import { Text, View, StyleSheet, Image, MaskedViewIOS } from 'react-native';
import React from 'react';

const HomeTitle = ({source}) => {

  return(
    <View style={styles.container}>
      <Image source={source} style={styles.img}></Image>
      {/* <Text style={styles.txt}>GenShin</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 35,
    width: 100,
    marginHorizontal: 5
  },
  txt: {
    fontSize: 30
  }
});

export default HomeTitle;
