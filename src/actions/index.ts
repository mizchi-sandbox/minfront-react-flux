import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const reset = actionCreator<void>("RESET");
