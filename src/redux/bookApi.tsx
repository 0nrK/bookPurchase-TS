import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:3001/api/book`,
    }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: (page: number) => `/?page=${page}`,
        }),
        getBySearchInput: builder.query({
            query: (searchInput: string) => `/search=${searchInput}`
        }),
    }),
});

export const { useGetBooksQuery, useGetBySearchInputQuery } = bookApi;