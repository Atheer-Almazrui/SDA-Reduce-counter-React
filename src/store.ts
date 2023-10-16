import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/counterSlice";

export type RootState = {
    counterR: ReturnType<typeof counterReducer>
}

export const store = configureStore({
    reducer: {
        counterR: counterReducer,
    },
});