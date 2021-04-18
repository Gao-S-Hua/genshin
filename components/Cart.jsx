import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import React from 'react';
import Order from './Order';

const User = () => {
  const navigation = useNavigation();
  let sum = 0;
  const order = useSelector(state => state.order);
  if (order.size) {
    const orderList = [];
    for (const [key, value] of order) {
      orderList.push([key, value]);
      sum += value;
    }
    return (
      <View style={styles.top}>
        <View style={styles.chartwrap}>
          {orderList.map(pair => <Order key={pair[0]} name={pair[0]} num={pair[1]}/>)}
        </View>
        <View style={styles.totalwrap}>
          <Text style={styles.totalNum}>{sum}</Text>
          <Text style={styles.total}>Total Items: </Text>
        </View>
        <View style={styles.buywrap}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pay')}>
            <View style={styles.buy}>
            <Text style={{fontSize: 30, color: 'white'}}>Pay {' '}</Text>
            <Ionicons name='log-out-outline' size={40} color='white' />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
  return(
    <View style={styles.container}>
      <Text>Your Cart is Empty</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chartwrap: {
    flex: 0
  },
  buywrap: {
    flex: 1,
    flexBasis: 0,
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row-reverse'
  },
  totalwrap: {
    flexDirection: 'row-reverse',
    marginHorizontal: 15
  },
  total: {
    fontSize: 30,
  },
  totalNum: {
    fontSize: 30,
    color: '#fa8c16',
    fontWeight: 'bold'
  },
  buy: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 140,
    borderRadius: 24,
    height: 48,
    backgroundColor: '#fa8c16'
  },
  top: {
    flex: 1
  }
});

export default User;
