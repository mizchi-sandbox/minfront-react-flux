import React, { useReducer } from "react";
import {
  reducer,
  DispatchContext,
  RootStateContext,
  RootState
} from "../reducers";
import { reset } from "../actions";
import { Main } from "./Main";

export function App() {
  const [appState, dispatch] = useReducer(reducer, null as any, reset());
  return (
    <>
      <RootStateContext.Provider value={appState as RootState}>
        <DispatchContext.Provider value={dispatch}>
          <Main />
        </DispatchContext.Provider>
      </RootStateContext.Provider>
    </>
  );
}
