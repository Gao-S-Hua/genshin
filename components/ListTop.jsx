import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import React, {useState} from 'react';
import List from './List';
import charList from '../data/characterList';
import ELEMENT from '../data/element';

const list = [];
for (const name in ELEMENT) {
  list.push(ELEMENT[name]);
}

const EleItem = (props) => {
  return (
    <TouchableWithoutFeedback style={styles.ele} onPress={() => props.setSelect(props.element.name)}>
      <Image source={props.element.icon} style={props.select === props.element.name ? styles.selectEle : styles.ele}/>
    </TouchableWithoutFeedback>
  );
}

const ListTop = () => {
  const [select, setSelect] = useState(ELEMENT.All.name);
  return(
    <View style={styles.wrap}>
      <View style={styles.select}>
        {list.map(item => <EleItem select={select} key={item.name} element={item} setSelect={setSelect} />)}
      </View>
      <List charList={
        select === ELEMENT.All.name ? charList : charList.filter(item => item.element === select)
      } />
    </View>
  );
}



const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  select: {
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  ele: {
    height: 40,
    flex: 1,
    resizeMode: 'contain',
  },
  selectEle: {
    height: 40,
    flex: 1,
    resizeMode: 'contain',
    backgroundColor: '#F0F0F0'
  }
});

export default ListTop;
