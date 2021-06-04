import { Text, View, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import React from 'react';
import  Ionicons from 'react-native-vector-icons/Ionicons';

const Func = (props) => {
  return(
      <TouchableWithoutFeedback onPress={props.action}>
        <View style={styles.wrap}>
        <Ionicons name={props.icon} color='#1890ff' size={38} />
        <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    height: 80,
    margin: 5,
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    color: '#222'
  }
});

export default Func;
