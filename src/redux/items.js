 import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6441a1be76540ce2257b9cb7.mockapi.io/contacts' }),
    tagTypes:['Contacts'],
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => '/contacts',
            providesTags:['Contacts']
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags:['Contacts']
        }),
        addContact: builder.mutation({
            query: values => ({
                url:'/contacts',
                method: 'POST',
                body: values,
            }),
             invalidatesTags:['Contacts']
        })
    }),
})
// export const addContact = async (values) => {
//     const response = await axios.post('/contacts',values );
//     return response.data;
// }


 export const { useFetchContactsQuery, useDeleteContactMutation, useAddContactMutation } = contactApi
// import { createSlice, isAnyOf, nanoid } from '@reduxjs/toolkit'

// import { addContact, deleteContact, fetchContacts } from './thunk';
// import { initialState } from './initial';


// const handlePending = (state) => {
//     state.isLoading = true
// }

// const handleFulfilledGet = (state, { payload }) => {
//     state.isLoading = false
//     state.items = payload
//     state.error=null
// }

// const handleFulfilledCreate = (state, { payload }) => {
//     state.isLoading = false
//     state.items.push(payload)
//     state.error=null
// }

// const handleFulfilledDel = (state, { payload }) => {
//     state.isLoading = false
//     // state.contacts =  state.contacts.items.filter(contact => contact.id !== payload)
//     const index = state.items.findIndex(
//     contact => contact.id === payload.id
//   );
//   state.items.splice(index, 1);
//     state.error=null
// }

// const handelRejected = (state, { payload }) => {
//     state.isLoading = false
//     state.error= payload
// }




// export const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState,
//     extraReducers:
//         (builder) => {
//             builder
//                 .addCase(fetchContacts.pending, handlePending)
//                 .addCase(fetchContacts.fulfilled, handleFulfilledGet)
//                 .addCase(fetchContacts.rejected, handelRejected)
//                 .addCase(addContact.pending, handlePending)
//                 .addCase(addContact.fulfilled, handleFulfilledCreate)
//                 .addCase(addContact.rejected, handelRejected)
//                 .addCase(deleteContact.pending, handlePending)
//                 .addCase(deleteContact.fulfilled, handleFulfilledDel)
//                 .addCase(deleteContact.rejected, handelRejected)

//     }
// })





// export const { newContact, removeContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;