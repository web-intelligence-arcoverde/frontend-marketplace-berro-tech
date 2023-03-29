import {combineReducers} from 'redux';
import {userReducer} from './user/reducer';
import {productReducer} from './product/reducer';

export const rootReducer = combineReducers({
  user: userReducer ,
  product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
