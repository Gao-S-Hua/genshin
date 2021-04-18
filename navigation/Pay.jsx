import { Text, View, StyleSheet, Image, Alert, TouchableWithoutFeedback } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION } from '../store/reducer';
import { useNavigation } from '@react-navigation/native'

import  Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const Pay = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const order = useSelector(state => state.order);
  let sum = 0;

  for (const [key, value] of order) {
    sum += value;
  }
  const handlePay = () => {
    
    Alert.alert('Purcharse Status:', 'Successful', [{
      text: 'OK',
      onPress: () => {
        dispatch({type: ACTION.CLEAR});
        navigation.navigate('Home');
      }
    }]);
    
  }
  return(
    <View style={styles.wrap}>
      <Image source={require('../assets/pay.jpeg')} style={styles.payImage}/>
      <View style={styles.count}>
        <Text style={{color: '#000', fontSize: 40}}>{sum * 10 + '.00  '}</Text> 
        <Text style={{color: '#888', fontSize: 40}}>SGD</Text>
      </View>
      <View style={styles.paywrap}>
        <TouchableWithoutFeedback onPress={handlePay} >
          <View style={styles.paywrapin}>
            <Text style={styles.text}>Pay {' '}</Text>
            <Ionicons name="card-outline" size={30} color={'white'}/>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  payImage: {
    width: '100%',
    height: 200,
  },
  paywrap: {
    marginVertical: 20,
    alignItems: 'center'
  },
  paywrapin: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fa8c16',
    width: 100,
    borderRadius: 20
  },
  text: {
    fontSize: 25,
    color: 'white'
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5
  }
});

export default Pay;
