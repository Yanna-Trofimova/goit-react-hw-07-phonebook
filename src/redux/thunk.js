// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { createContact, deleteContactApi, getContact } from "./api";

// export const fetchContacts = createAsyncThunk("contacts/fetchAll", () =>
//     getContact()
   
// )
// //  console.log('fetchContacts', fetchContacts )

// export const addContact = createAsyncThunk("contacts/addContact", (data) =>
//     createContact(data)
// )


// export const deleteContact = createAsyncThunk("contacts/deleteContact", (id) =>
//     deleteContactApi(id)
// )

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://644175a1792fe886a8a82ed8.mockapi.io';

// export const fetchContacts = createAsyncThunk(
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

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', contact);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (idContact, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${idContact}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );