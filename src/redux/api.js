// import axios from 'axios'


// axios.defaults.baseURL = 'https://6441a1be76540ce2257b9cb7.mockapi.io/contacts'


// export const fetchContacts = async () => {
//     const response = await axios.get('/contacts');
//     return response.data;
// }

// export const addContact = async (values) => {
//     const response = await axios.post('/contacts',values );
//     return response.data;
// }

// export const deleteContact = async id => {
//     const response = await axios.post(`/contacts/${id}` );
//     return response.data;
// }








// export async function fetchContacts() {
//     const { data } = await axios.get('');
//     return data;
// }
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const contactApi = createApi({
//     reducerPath: 'contactApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://6441a1be76540ce2257b9cb7.mockapi.io/contacts/' }),
//     endpoints: builder => ({
//         getPhoneByName: builder.query({
//             query: () => '/contacts',
//         })
//     }),
// })

// export const {useGetPhoneByNameQuery} = contactApi


// const BASE_URL = 'https://6441a1be76540ce2257b9cb7.mockapi.io/contacts'

// export const getContact = async () => {
//     const data = await fetch(`${BASE_URL}/contacts`)
//     return await data.json()
    
// }
// // console.log(getContact())

// export const createContact = async (data) => {
//     const res = await fetch(`${BASE_URL}/contacts`, {
//         body: JSON.stringify(data),
//     })
//     return await res.json()
// }

// export const deleteContactApi = async (id) => {
//     const res = await fetch(`${BASE_URL}/contacts/${id}`)
//     return await res.json()
// }


// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios  from 'axios';

// axios.defaults.baseURL = 'https://6441a1be76540ce2257b9cb7.mockapi.io/contacts';

// export const getContact = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const createContact = createAsyncThunk(
//     'contacts/addContact',
//     async (contact, thunkAPI) => {
//         try {
//             const response = await axios.post('/contacts', contact);
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

// export const deleteContactApi = createAsyncThunk(
//     'contacts/deleteContact',
//     async (contactId, thunkAPI) => {
//         try {
//             await axios.delete(`/contacts/${contactId}`);
//             return contactId
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

