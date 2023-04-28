
import css from './ContactForm.module.css';
import toast from 'react-hot-toast';



import { useAddContactMutation } from 'redux/items'
// import { useDispatch, useSelector } from 'react-redux';
// import { newContact } from '../../redux/items'
// import { useState } from 'react';
// import {useGetPhoneByNameQuery} from '../../redux/api'


function ContactForm() {
    // const [name, setName] = useState('');
    // const [number, setNumber] = useState('');
    // const  contacts  = useSelector((state) => state.contacts)
    // const dispatch = useDispatch()

    // // const { contacts, erro, isLoading, isError } = useSelector((state) => state.contacts)
   

    // const handleChangeName = e => {
    //     setName(e.currentTarget.value);
        
    // };

    // const handleChangeNumber = e => { 
    //    setNumber( e.currentTarget.value );
    // };



    // const handelSubmit = e => {
    //     e.preventDefault();
    //     createContact(name, number);
    // };


    // const cleanForm = () => {
    //     setName('');
    //     setNumber('');
    // }


    // const createContact = (name, number) => {
    //   contacts.find(cont => cont.name.toLowerCase() === name.toLowerCase(),) ?
    //       alert(`${name} is already in contacts.`)
    //       : dispatch(newContact(name, number)) && cleanForm();
    // };
    
    // const { data: contact } = useFetchContactsQuery()
    const [AddContact] = useAddContactMutation();
    // console.log(AddContact(values))

    const handelAddContact = async values => {
        try {
            await AddContact(values);
            toast.success('Контакт додано');
            console.log('aaaaddddddd');
        } catch (error) {
            toast.error('Помилка при додаванні контакту');
            console.log(error);
        }
        
    }

      const handleSubmit = async (values, actions) => {
        handelAddContact(values);
        // actions.setSubmitting(false);
        // actions.resetForm();
    };

    return (
            <>
            <form className={css.formOfContact}
                // initialValues={{name: contact.name, number: contact.number}}
                onSubmit={handleSubmit}
            >
                <p className={css.textName}>Name</p>
                <input
                    className={css.inputName}
                    // value={name} 
                    // onChange={handleChangeName}
                    type="text"
                    name="name"
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <p className={css.textNumber}>Number</p>
                <input
                    className={css.inputNumber}
                    // value={number} 
                    // onChange={handleChangeNumber}
                    type="tel"
                    name="number"
                    // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />


                 <button className={css.btnContact} type="submit">
                    Add contact
                 </button>
            </form>

            {/* {isError && erro.originalStatus === 404 && <p>Контакта не істує</p>} */}
            </>
        )
    }




export default ContactForm