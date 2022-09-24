import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchSliceState{
    view: string,
    step: number
};

const initialState: SearchSliceState = {
    view: "textsearch",
    step: 0,
};

interface ChangeView
{
    view: string,
    step: number
}

const searchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        changeSearchView: (state: SearchSliceState, action: PayloadAction<ChangeView>) => {
            state.view = action.payload.view;
            state.step = action.payload.step;
        }
    }
})

export const { changeSearchView } = searchSlice.actions;
export default searchSlice.reducer;