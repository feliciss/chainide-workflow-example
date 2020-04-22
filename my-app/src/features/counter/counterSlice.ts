import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import {MockService} from "../../services";

const service = new MockService();

interface CounterState {
  value: any;
}

const initialState: CounterState = {
  value: '',
};

export const counterSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    compile: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = service.compile();
    },
    deploy: state => {
      state.value = service.deploy();
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    interact: state => {
      state.value = service.interact();
    },
  },
});

export const { compile, deploy, interact } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(interact());
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
