import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

const User = () => {
  return(
    <View style={styles.container}>
      <Text>This is User Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default User;
