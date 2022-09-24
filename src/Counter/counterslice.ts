import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState{
    counterValue: number
};

const initialState: CounterState = {
  counterValue: 0
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        incremented: (state: CounterState, action: PayloadAction<number>) => {
            state.counterValue += action.payload;
        },
        decreased: (state: CounterState, action: PayloadAction<number>) => {
            state.counterValue -= action.payload;
        },
        reset: (state: CounterState) => {
            state.counterValue = 0;
        }
    }
})

export const { incremented, decreased, reset } = counterSlice.actions;
export default counterSlice.reducer;