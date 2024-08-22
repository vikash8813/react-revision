import { configureStore } from '@reduxjs/toolkit'
import CounterStore from "./stores/counterStore.js";

export default configureStore({
    reducer: {
        counter: CounterStore,
    },
})