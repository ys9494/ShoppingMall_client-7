import React, { createContext, useContext, useReducer } from "react";
import { getUserId } from "../utils/utils";

const initialState = {
  userId: getUserId(),
  orderedItems: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADDORDERINFO":
      return {
        orderedItems: state.orderedItems.concat(action.orderItem),
      };
    case "DELETEORDERINFO":
      return {
        orderedItems: state.orderedItems.filter(
          (v) => v._id !== action.orderItem._id
        ),
      };
    default:
      return state;
  }
};

const OrderStateContext = createContext(null);
const OrderDispatchContext = createContext(null);

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <OrderStateContext.Provider value={state}>
      <OrderDispatchContext.Provider value={dispatch}>
        {children}
      </OrderDispatchContext.Provider>
    </OrderStateContext.Provider>
  );
};

export const useOrderState = () => {
  const state = useContext(OrderStateContext);
  if (!state) throw new Error("Cannot find UserStateProvider");
  return state;
};

export const useOrderDispatch = () => {
  const dispatch = useContext(OrderDispatchContext);
  if (!dispatch) throw new Error("Cannot find UserDispatchProvider");
  return dispatch;
};
