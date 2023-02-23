import CounterReducer from './counterSlice';
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const RootReducer = combineReducers({
  counter: CounterReducer,
});

export const PersistedReducer = persistReducer(persistConfig, RootReducer);
