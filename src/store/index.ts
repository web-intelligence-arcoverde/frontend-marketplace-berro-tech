import createSagaMiddleware from '@redux-saga/core';

import { rootSaga } from './reducer/rootSagas';
import { rootReducer } from './reducer/rootReducer';

import { configureStore } from '@reduxjs/toolkit';
export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false,
        serializableCheck: false
      }).concat(sagaMiddleware),
    devTools: true
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

const store = makeStore();

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default store;
