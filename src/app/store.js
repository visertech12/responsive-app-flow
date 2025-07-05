
import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from '../features/crypto/cryptoSlice.js';

export default configureStore({
    reducer: {
        crypto: cryptoReducer,
    },
});
