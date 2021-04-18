import { Text, View, StyleSheet, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'

const ListItem = ({ char }) => {
  const navigation = useNavigation();
  const order = useSelector(state => state.order);

  return(
      <View style={styles.wrap}>
        {
          order.has(char.name) ? (
            <View style={styles.count}>
          <Text style={styles.num}>{order.get(char.name)}</Text>
        </View>
          ) : null
        }
        <TouchableWithoutFeedback onPress={() => {navigation.navigate('Details', { char })}}>
          <Image source={char.img2} style={styles.img} />
        </TouchableWithoutFeedback>
      </View>
  );
}
const width = Math.round(Dimensions.get('window').width / 3.3);
const styles = StyleSheet.create({
  wrap: {
    height: width * 1.8,
    width: width,
    margin: 5,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8
  },
  count: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'red',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  num: {
    color: 'white'
  }
})

export default ListItem;
