import { Text, View, StyleSheet, Button, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
  const { charList } = props;
  return(
    <View style={styles.wrap}>
      <ScrollView 
        style={styles.scrollwrap}
        contentContainerStyle={styles.container}
        >
          {
            charList.map(char => {
              return <ListItem key={char.name} char = {char} />
            })
          }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  scrollwrap: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  }
});

export default React.memo(List);
