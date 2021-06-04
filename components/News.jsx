import { Text, View, StyleSheet, Button } from 'react-native';
import React from 'react';

const News = (props) => {
  const content = props.info.intro.replace('\n', '');

  const title = props.info.title.replace('\n', '');

  return(
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>{title}</Text>
      <Text numberOfLines={3}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    // borderBottomColor: '#999',
    // borderBottomWidth: 1,
    // borderStyle: 'solid',
    backgroundColor: 'white',
    margin: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  title: {
    color: '#2f54eb',
    fontSize: 20,
    paddingBottom: 5
  }
});

export default News;
