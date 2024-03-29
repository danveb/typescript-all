import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number; 
}

const initialState: CounterState = {
  value: 0, 
};

export const counterSlice = createSlice({
  name: "counter", 
  initialState, 
  reducers: {
    increment: (state) => {
      state.value += 1; 
    }, 
    decrement: (state) => {
      state.value -= 1; 
    }, 
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload; 
    }, 
  },
}); 

// Action creators are generated for each case reducer function 
export const { increment, decrement, incrementByAmount } = counterSlice.actions; 

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, 
  },
}); 

// infer "RootState" and "AppDispatch" types from store itself 
export type RootState = ReturnType<typeof store.getState>
// inferred type: { posts: PostsState, comments: CommentsState, users: UsersState }
export type AppDispatch = typeof store.dispatch