import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { CreateDeckRequest, Deck, UpdateDeckRequest } from './types'

import { GetItemsResponse } from '@/services/common/types'

export const decksApi = createApi({
  reducerPath: 'decksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  tagTypes: ['Deck'],
  endpoints: builder => {
    return {
      getDecks: builder.query<GetItemsResponse<Deck>, void>({
        query: () => `v1/decks`,
        providesTags: ['Deck'],
      }),
      createDeck: builder.mutation<Deck, CreateDeckRequest>({
        query: body => ({
          url: `v1/decks`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Deck'],
      }),
      getSpecificDeck: builder.query<Deck, string>({
        query: id => `v1/decks/${id}`,
      }),
      updateDeck: builder.mutation<Deck, UpdateDeckRequest>({
        query: ({ id, ...body }) => ({
          url: `v1/decks/${id}`,
          method: 'PATCH',
          body,
        }),
        invalidatesTags: ['Deck'],
      }),
      deleteDeck: builder.mutation<Omit<Deck, 'author'>, string>({
        query: id => ({
          url: `v1/decks/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Deck'],
      }),
    }
  },
})

export const {
  useGetDecksQuery,
  useCreateDeckMutation,
  useGetSpecificDeckQuery,
  useUpdateDeckMutation,
  useDeleteDeckMutation,
} = decksApi
