
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

export const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = cryptoSlice.actions;

export default cryptoSlice.reducer;
