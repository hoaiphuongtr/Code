import { configureStore } from '@reduxjs/toolkit';
import blogReducer from 'Page/Blog/blog.slide';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: { blog: blogReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
