import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment} from '../store/reducer/counterSlice';
import {RootState} from '../store/index';
const HomeScreen = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <View>
      <Text>{count}</Text>
      <Button title="test" onPress={() => dispatch(increment())} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
