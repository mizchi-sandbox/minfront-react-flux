import React, { Dispatch, useContext } from "react";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import * as actions from "../actions";

export type RootState = {};

export const initialState: RootState = {};

export const reducer = reducerWithInitialState(initialState).case(
  actions.reset,
  _state => initialState
);

// react heleprs
export const RootStateContext = React.createContext<RootState>(null as any);
export const DispatchContext = React.createContext<Dispatch<any>>(null as any);

export function useRootState<Selected = RootState>(
  selector?: (state: RootState) => Selected
) {
  const rootState = useContext(RootStateContext);
  return selector ? selector(rootState) : rootState;
}

export function useDispatch<A>() {
  return useContext(DispatchContext) as Dispatch<A>;
}
