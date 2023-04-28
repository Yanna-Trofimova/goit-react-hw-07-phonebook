import { configureStore } from '@reduxjs/toolkit'
import { contactApi } from './items'
// import { filterSlice, filtersReducer } from './filter'
// import { contactsReducer, contactsSlice } from './items'
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'


export const store = configureStore({
    reducer: {
        [contactApi.reducerPath]:contactApi.reducer,
    },
    middleware: getDefaultMiddleware =>[
      ...getDefaultMiddleware(),
      contactApi.middleware],
    
});










// const persistConfig = {
//   key: 'root',
//     storage,
//   whitelist: ['contacts']
// }



// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filtersReducer
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//   reducer: 
//   {
//       contacts: contactsReducer,
//     filter: filtersReducer
//     // contacts: contactsSlice.reducer,
//     // middleware: (getDefaultMiddleware) =>
//     //   getDefaultMiddleware().concat(contactsApi.middleware),

//     // // [contactsApi.reducerPath]: contactsApi.reducer,
//     // // middleware: getDefaultMiddleware =>[
//     // //   ...getDefaultMiddleware(),
//     // //   contactsApi.middleware],
    
//     // filter: filterSlice.reducer
//     }
    
// })

// export const persistor = persistStore(store);



// export const initialState = {
//     items: [],
//     isLoading: false,
//     error: null
// }



// {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },
//   filter: ""
// }