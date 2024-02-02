//Store with initial state not persisted

import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const Store = configureStore({
  reducer
});

export default Store;

