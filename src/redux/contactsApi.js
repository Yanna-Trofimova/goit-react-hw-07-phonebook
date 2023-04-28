//  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const contactApi = createApi({
//     reducerPath: 'contacts',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://6441a1be76540ce2257b9cb7.mockapi.io/contacts' }),
//     tagTypes:['Contacts'],
//     endpoints: (builder) => ({
//         getContact: builder.query({
//             query: () => '/contacts',
//             providesTags:['Products']
//         }),
//         deleteContactApi: builder.mutation({
//             query: (id) =>({ url: `/contacts/${id}`, method: 'DELETE'}),
//             invalidatesTags:['Products']
//         })
//     }),
// })

// export const { useGetContactQuery, useDeleteContactApiMutation } = contactApi
