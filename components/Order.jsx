import { Text, View, StyleSheet } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ACTION } from '../store/reducer'

const Order = (props) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    const action = {
      type: ACTION.REMOVE,
      payload: props.name
    }
    dispatch(action);
  }
  return(
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
      <View style={styles.numwrap}>
        <Text style={styles.num}>{' ✕ ' + props.num}</Text>
      </View>
      
      <Ionicons name='trash-outline' size={30} color='red' style={styles.delete} onPress={handleDelete}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderLeftColor: '#fa8c16',
    borderLeftWidth: 5,
    borderStyle: 'solid',
    height: 65,
    width: '100%',
    margin: 4,
    backgroundColor: '#FCFCFC',
    flexDirection: 'row',
    alignContent: 'center',
  },
  text: {
    flex: 5,
    fontSize: 40,
  },
  num: {
    fontSize: 32,
    color: '#666',
  },
  numwrap: {
    flex: 3,
    fontSize: 32,
    color: '#666',
    justifyContent: 'center'
  },
  delete: {
    flex: 1,
    paddingTop: 10
  }
});

export default Order;
