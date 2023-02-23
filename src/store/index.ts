import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import {PersistedReducer} from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: PersistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        thunk: false,
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(sagaMiddleware),
});
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
