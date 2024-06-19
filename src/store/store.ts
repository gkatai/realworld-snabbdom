import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";

export const store = configureStore({
  reducer: rootReducer,
});

if (import.meta.hot) {
  import.meta.hot.accept("./root-reducer", (rootReducerModule) => {
    if (!rootReducerModule) {
      return;
    }

    store.replaceReducer(rootReducerModule.default);
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
