import {createReducer, SerializedError} from '@reduxjs/toolkit';
import { userLogout } from './actions';

export type IUser = {
  user?: {} | null;
};

const initialState: IUser = {
  user: null,
};

export const userReducer = createReducer(initialState, builder => {
  builder.addCase(userLogout, (state, action) => {
    return initialState;
  });
});
