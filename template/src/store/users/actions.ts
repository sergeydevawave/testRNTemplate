import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
export const userLogout = createAction('@user/userLogOut', (token: string) => {
  return {
    payload: true,
  };
});
