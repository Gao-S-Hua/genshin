import { Text, View, StyleSheet, ActivityIndicator, TouchableWithoutFeedback, TextInput, Alert, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import firebase from '../store/firebase';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ACTION } from '../store/reducer';
import 'firebase/firestore';

const db = firebase.firestore();

const Log = () => {
  const [user, setUser] = useState('');
  const [pswd, setPswd] = useState('');
  const [logging, setLogging] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleLog = async() => {
    if (logging) return;
    setLogging(true);
    try {
      Keyboard.dismiss();
      const email = user + '@gmail.com';
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, pswd);
      const uid = userCredential.user.uid;
      const query = await db.collection('user').where(firebase.firestore.FieldPath.documentId(), '==', uid).get();
      const userName = query.docs[0].data().name;
      const money = query.docs[0].data().money;
      const action = {
        type: ACTION.SETUSER,
        payload: {
          userId: uid,
          userName,
          money
        }
      }
      dispatch(action);
      navigation.navigate('User')
    } catch(err) {
      console.log(err);
      Alert.alert('User Name or Password Error!');
      setLogging(false);
    }
  }
  return(
    <View style={styles.wrap}>
      <View style={styles.logMain}>
        <View style={styles.logTitleWrap}>
          <Text style={styles.logTitle}>Log In</Text>
        </View>
        <View style={styles.itemwraper}>
          <View style={styles.itemwrap}>
            <Ionicons name='person-outline' style={styles.icon}/>
            <TextInput placeholder='User Email' style={styles.input} value={user} onChangeText={setUser}/>
          </View>
          <View style={styles.itemwrap}>
            <Ionicons name='lock-closed-outline' style={styles.icon}/>
            <TextInput 
              placeholder='Password' 
              style={styles.input} 
              value={pswd} 
              onChangeText={setPswd}
              secureTextEntry
            />
          </View>
          <TouchableWithoutFeedback onPress={handleLog}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>{logging ? 'Logging' : 'Log In'}</Text>
            </View>
          </TouchableWithoutFeedback>
          {logging ? <ActivityIndicator size='large' color="#AAA"/> : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100
  },
  logTitleWrap: {
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingBottom: 10
  },
  logTitle: {
    fontSize: 24,
  },
  logMain: {
    width: '80%',
    height: 380,
    backgroundColor: 'white',
    borderRadius: 20
  },
  itemwraper: {
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center'
  },
  itemwrap: {
    flexDirection: 'row',
    marginVertical: 10
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#69c0ff',
    borderStyle: 'solid',
    height: 40,
    width: '70%'
  },
  icon: {
    fontSize: 40,
    marginHorizontal: 10,
    color: '#40a9ff'
  },
  button: {
    marginVertical: 30,
    width: '50%',
    height: 44,
    backgroundColor: '#40a9ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  }
});

export default Log;
