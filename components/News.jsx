import { Text, View, StyleSheet, Button } from 'react-native';
import React from 'react';

const News = (props) => {
  const content = props.info.intro.replace('\n', '');
  // if (content.length > 110) {
  //   content = content.slice(0, 110) + '...';
  // }
  const title = props.info.title.replace('\n', '');
  // if (title.length > 40) {
  //   title = title.slice(0, 40) + '...';
  // }
  return(
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>{title}</Text>
      <Text numberOfLines={2}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderColor: '#999',
    borderWidth: 1,
    borderStyle: 'solid',
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#f8f8f8'
  },
  title: {
    color: '#2f54eb',
    fontSize: 18
  }
});

export default News;
