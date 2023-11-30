import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Card, CreateCardRequest, GetCardParams, GradeCard } from '@/services/cards-api/types'
import { GetItemsResponse } from '@/services/common/types'

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  tagTypes: ['Cards'],
  endpoints: builder => {
    return {
      getCards: builder.query<GetItemsResponse<Card>, GetCardParams>({
        query: ({ id, ...body }) => {
          return { url: `v1/decks/${id}/cards`, body }
        },
        providesTags: ['Cards'],
      }),
      createCard: builder.mutation<Card, CreateCardRequest>({
        query: ({ deckId, ...body }) => ({
          url: `v1/decks/${deckId}/cards`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Cards'],
      }),
      getRandomCards: builder.query<Card, string>({
        query: id => `v1/decks/${id}/cards`,
        providesTags: ['Cards'],
      }),
      gradeCard: builder.mutation<void, GradeCard>({
        query: ({ id, ...body }) => ({
          url: `v1/decks/${id}/cards`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Cards'],
      }),
    }
  },
})

export const {} = cardsApi
