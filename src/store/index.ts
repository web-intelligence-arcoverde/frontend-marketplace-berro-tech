import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';

import {counterReducer} from './reducer/counter/reducer';

import kenyeReducer from './reducer/kenye/reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    kenye: kenyeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
