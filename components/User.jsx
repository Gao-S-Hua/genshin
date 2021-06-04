import { Text, View, StyleSheet, Image, Alert, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import Func from './Func';
import { useSelector, useDispatch } from 'react-redux';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Ani from './Ani';
function empty() {
  Alert.alert('Under Development...');
}


const User = (props) => {
  const navigationPage = useNavigation();
  const money = useSelector(state => state.money);
  const userName = useSelector(state => state.userName);
  
  return(
    <View style={styles.container}>
      <View style={styles.userWrap}>
        <TouchableOpacity onPress={() => navigationPage.navigate('Log')}>
        <View style={styles.userInfo}>
          <Image source={require('../assets/user.png')} style={styles.userLogo} />
          <Text style={styles.userName}>{userName}</Text>
          <View style={{position: 'absolute', right: 0}}><Ionicons style={{fontSize: 42}} name="chevron-forward-outline" /></View>
        </View>
        </TouchableOpacity>
        <View style={styles.funcWrap}>
          <Func title={money ? `$ ${money.toFixed(2)}` : 'N/A'}icon='wallet-outline' action={empty}/>
          <Func title='Orders' icon='reorder-four-outline' action={() => navigationPage.navigate('Main', {screen: 'Cart'})}/>
          <Func title='Game' icon='game-controller-outline' action={empty}/>
          <Func title='Setting' icon='settings-outline' action={empty}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userWrap: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 20
  },
  userLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 5,
    backgroundColor: '#CAA'
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
  },
  userName: {
    fontSize: 32,
    paddingHorizontal: 20,
    fontWeight: 'bold'
  },
  funcWrap: {
    flexDirection: 'row',
    marginVertical: 10,
  }
});

export default User;
