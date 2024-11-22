export type CounterState = {
  count: number;
  status: string;
};

export const initialState: CounterState = {
  count: 0,
  status: "active",
};

type UpdateCounterAction = {
  type: "increment" | "decrement" | "reset";
};

type setStatusAction = {
  type: "setStatus";
  payload: "active" | "inactive";
};

type ActionType = UpdateCounterAction | setStatusAction;

export const counterReducer = (
  state: CounterState,
  action: ActionType
): CounterState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "setStatus":
      return { ...state, status: action.payload };
    default:
      // if we are hitting this case, that means the user is performing
      // an action we dont want them to BUT WE MUST TRACK THE ERROR
      const untrackedError: never = action;
      throw new Error(
        `Unexpected Action: ${untrackedError} - Pls check the count reducer.ts`
      );
      return state;
  }
};
