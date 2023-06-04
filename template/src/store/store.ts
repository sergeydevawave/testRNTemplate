import {configureStore, combineReducers} from '@reduxjs/toolkit';

const combineReducer = combineReducers({});

const rootReducer = (state: any, action: any) => {
  if (action.type === "@user/userLogOut") {
    state = undefined;
  }

  return combineReducer(state, action);
};

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: false,
    }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

