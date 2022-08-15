// import { createSlice, configureStore } from '@reduxjs/toolkit';

import { setCity, setOfferList } from './action';

const initialState = { city: 'Paris', offerList: [] };

const sixCitiesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case setOfferList.toString():
      return {
        ...state,
        offerList: action.payload,
      };
      break;

    case setCity.toString():
      return {
        ...state,
        city: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

// const couterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//   },

//   reducers: {
//     incremented: (state) => {
//       state.value += 1;
//     },

//     decremented: (state) => {
//       state.value -= 1;
//     },
//   },
// });

// export const { incremented, decremented } = couterSlice.actions;

// const store = configureStore({
//   reducer: couterSlice.reducer,
// });

// store.subscribe(() => console.log(store.getState()));

// store.dispatch(incremented());

// store.dispatch(incremented());

// store.dispatch(decremented());

// const reducer = createReducer(initialState, (builder) => {
//   builder.addCase(incrementOfferList, (state) => {
//     state.step = state.step + STEP_COUNT;
//   });
// });

export { sixCitiesReducer };
