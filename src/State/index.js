
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    mode: "Dark",
    useId: "63701cc1f039b7f70000e"
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "Dark"? "Light" : "Dark";
        },
        updateUserId: (state, action) => {
            state.useId = action.payload;
        }
    }
});

export const { setMode,  } = globalSlice.actions;

export default globalSlice.reducer;