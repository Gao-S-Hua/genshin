import { Text, View, StyleSheet, Button, Animated } from 'react-native';
import React, { useRef, useCallback, useState } from 'react';

const Ani = () => {
  const loc = useRef(new Animated.Value(0)).current;
  const [location, setLocation] = useState(0)
  const handleRun = useCallback(() => {    
    Animated.timing(loc, {
      toValue: location + 50,
      duration: 500,
      useNativeDriver: true
    }).start();
    setLocation((prev) => prev + 50);
  }, [location]
  )
  const handleBack = useCallback(() => {    
    Animated.timing(loc, {
      toValue: location - 50,
      duration: 500,
      useNativeDriver: true
    }).start();
    setLocation((prev) => prev - 50);
  }, [location]
  )
  return(
    <View style={styles.wrap}>
      <Button title='run' onPress={handleRun}/>
      <Button title='back' onPress={handleBack}/>
      <Animated.View style={[
        styles.obj,
        {
          transform: [{translateY: loc}]
        }
      ]}>
        <Text>Object</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  obj: {
    height: 100,
    width: 200,
    backgroundColor: '#99AA99'
  }
});

export default Ani;
