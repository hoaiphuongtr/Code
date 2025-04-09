import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from 'types/blog.type';
export const blogAPI = createApi({
    reducerPath: 'blogAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (build) => ({
        getPosts: build.query<Post[], void>({
            query: () => 'posts'
        })
    })
});
export const { useGetPostsQuery } = blogAPI;
