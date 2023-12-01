import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { MeData } from '@/services/auth/types'

export const baseApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  tagTypes: ['Auth'],
  endpoints: builder => {
    return {
      getAuthMeData: builder.query<MeData | null, void>({
        query: () => `/v1/auth/me`,
        providesTags: ['Auth'],
        extraOptions: { maxRetries: false },
      }),
    }
  },
})

export const {} = baseApi
