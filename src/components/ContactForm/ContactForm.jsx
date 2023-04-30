import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css';
import toast from 'react-hot-toast';




import { useAddContactMutation } from 'redux/items'

export const ContactForm = ({
    initialValues = { name: '', number: '' }
}) => {
    const [AddContact] = useAddContactMutation();

    const handelAddContact = async (values) => {
        try {
            await AddContact(values);
            toast.success('Контакт додано');
        } catch (error) {
            toast.error('Помилка при додаванні контакту');
            // console.log(error);
        }
    }
     
    const handleSubmit = async (values, actions) => {
            await handelAddContact(values);
            actions.setSubmitting(false);
            actions.resetForm();
    }

        return (
            <Formik className={css.formOfContact} initialValues={initialValues} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <label className={css.textName}>
                            Name
                            <Field className={css.inputName} name="name" type="text" />
                        </label>
                        <br />
                        <label className={css.textNumber}>
                            Number
                            <Field  className={css.inputNumber} name="number" type="text" />
                        </label>
                        <br />
                        <button className={css.btnContact}  type="submit" disabled={isSubmitting}>
                           Add contact
                        </button>
                    </Form>
                )}
            </Formik>
        );
}
    
export default ContactForm