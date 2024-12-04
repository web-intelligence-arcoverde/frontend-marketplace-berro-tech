import createSagaMiddleware from '@redux-saga/core';

import { rootSaga } from './reducer/rootSagas';
import { rootReducer } from './reducer/rootReducer';

import { configureStore } from '@reduxjs/toolkit';
const makeStore = () => {
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

export type RootState = ReturnType<typeof store.getState>;

export default store;
