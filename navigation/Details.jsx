import { Text, View, StyleSheet, Image, Alert, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import { ACTION } from '../store/reducer'
import React from 'react';

const Details = ({ route }) => {
  const { char } = route.params;
  const dispatch = useDispatch();
  const addToChart = () => {
    const action = {
      type: ACTION.ADD,
      payload: char.name
    }
    dispatch(action);
    Alert.alert(`Add ${char.name} into Chart`);
  }
  return(
    <View style={styles.wrap}>
      <View style={styles.touch}>
        <TouchableWithoutFeedback onPress={addToChart} >
          <Text style={styles.add} >Add to Cart</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.container}>
        <View style={styles.imgWrap}>
          <Image source={char.img} style={styles.img} />
        </View>
        <Text style={styles.name}> {char.name} </Text>
        <Text style={styles.property}> {'Element: ' + char.element + '     Level: ' + char.level} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    position: 'relative'
  },
  touch: {
    height: 35,
    flexDirection: 'row-reverse',
    padding: 10,
  },
  add: {
    height: 40,
    padding: 10,
    fontSize: 18,
    borderRadius: 13,
    overflow: 'hidden',
    color: '#F8F8F8',
    backgroundColor: '#40a9ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 35,
    marginVertical: 5
  },
  property: {
    fontSize: 25,
    color: '#888'
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },
  imgWrap: {
    height: '80%',
    width: '90%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#333',
    borderStyle: 'solid',
    overflow: 'hidden'
  }
});

export default Details;
