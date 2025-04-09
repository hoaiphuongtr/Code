import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { blogAPI } from 'pages/blog/blog.service';
import blogReducer from 'pages/blog/blog.slice';

export const store = configureStore({
    reducer: {
        reducer: blogReducer,
        [blogAPI.reducerPath]: blogAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(blogAPI.middleware)
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
