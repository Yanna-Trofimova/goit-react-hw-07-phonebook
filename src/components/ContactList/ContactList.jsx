import React from "react";
import css from './ContactList.module.css';
// import { useDispatch, useSelector } from "react-redux";
import {useFetchContactsQuery, useDeleteContactMutation} from '../../redux/items'
// import {  removeContact } from '../../redux/items'
// import { contactsSelector } from "redux/selectors";
// import { deleteContact } from "redux/thunk";
// import { useDeleteContactApiMutation, useGetContactQuery } from "redux/contactsApi";
// import {
//   getContacts,
//   getError,
//   getFilterContacts,
//   getIsLoading,
// }from 'redux/selectors'



const ContactList = () => {
//     const  contacts  = useSelector(getContacts)
//     const filterContact = useSelector(getFilterContacts)
//     // const dispatch = useDispatch();

//     const { items, erro, isLoading } = useSelector(getContacts)
//     console.log(items)
    
//     const getVisibleTodos = () => {
//         const normalaziedFilter = filterContact.toLowerCase();
//         return items.filter(contact => contact.name.toLowerCase().includes(normalaziedFilter),);
//   }

//     const visibleTodos = getVisibleTodos();
    // const dispatch = useDispatch();

    //   const isLoading = useSelector(getIsLoading);
    //   const error = useSelector(getError);
    
    
    const { isLoading, data: items, isError } = useFetchContactsQuery()

    //  console.log(isError)
    const { deleteContact, } = useDeleteContactMutation()
     console.log(deleteContact)
    // const [deleteMaterial,] = useDeleteContactMutation();

//         const getVisibleTodos = () => {
//         const normalaziedFilter = filterContact.toLowerCase();
//         return items.filter(contact => contact.name.toLowerCase().includes(normalaziedFilter),);
//   }

//     const visibleTodos = getVisibleTodos();
 
        
    return (   
        <>
             {isLoading && (<h2>loading...</h2>)}
                 <ul className={css.contactList}>
                    {items && (items.map(({ id,name, number }) => (
                        <li key={id} className={css.contactItem}>

                            
                        <p className="TodoList__text"><span className={css.contactName} >{name}</span> :  { number}</p>
                               <button 
                                type="button"
                                className={css.contactBtn}
                                onClick={() => deleteContact(id)}
                            >
                                Удалить
                            </button>

                        </li>)))}
                </ul> 
            {isError && (<h2>erro</h2>)}
        </>)
}



export default ContactList