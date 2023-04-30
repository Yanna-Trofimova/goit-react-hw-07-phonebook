import React from "react";
import css from './ContactList.module.css';
import {useFetchContactsQuery, useDeleteContactMutation} from 'redux/items'
import {  useSelector } from "react-redux";
import { getFilterContacts } from "redux/selectors";





const ContactList = () => {

    const [deleteContact,] = useDeleteContactMutation()

    const filterContact = useSelector(getFilterContacts)
    
    

    const { isLoading, data: items, isError } = useFetchContactsQuery()
    
    
    const filteredContacts = filterContact
        ? items.filter(contact =>
        contact.name.toLowerCase().includes(filterContact.toLowerCase())
        )
        : items;
    
        
    return (   
        <>
             {isLoading && (<h2>loading...</h2>)}
                 <ul className={css.contactList}>
                     {(filteredContacts && filteredContacts.map(({ id, name, number }) => (
                    <li key={id} className={css.contactItem}>

                            
                        <p className="TodoList__text"><span className={css.contactName} >{name}</span> :  {number}</p>
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