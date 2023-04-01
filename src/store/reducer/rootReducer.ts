import {combineReducers} from 'redux';
import {userReducer} from './user/reducer';
import {productReducer} from './product/reducer';

import {auth} from './auth/reducer';

import {step} from './step/reducer';

export const rootReducer = combineReducers({
  auth,
  step,
  user: userReducer,
  product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
