import React, { useCallback } from "react";
import { useRootState, useDispatch } from "../reducers";
import * as actions from "../actions";

export function Main() {
  const rootState = useRootState();
  console.log("with rootState", rootState);

  const dispatch = useDispatch();
  const onClick = useCallback(() => dispatch(actions.reset()), []);
  return (
    <>
      <h1>Main</h1>
      <button onClick={onClick}>reset</button>
    </>
  );
}
