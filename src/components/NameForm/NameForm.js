import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm, AddBtn, StyledField} from './NameForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const formSquema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number().required('Required'),
});
export const NameForm = () => {
  const dispatch = useDispatch();
 
  const contacts=useSelector(selectContacts)


  const handleSubmit = (values, actions) => {
     const isInContacts = contacts.find(({ name }) => name.toLowerCase() === values.name.toLowerCase())
    if (isInContacts) {
  return alert(`This contact is in your contacts`)
    } 
      console.log(values);

    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={formSquema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <label>
          {' '}
          Name
          <StyledField
            name="name"
            placeholder="Name"
          />
          <ErrorMessage name="name" />
        </label>

        <label>
          {' '}
          Number
          <StyledField
            name="number"
            placeholder="number"
          />
          <ErrorMessage name="number" />
        </label>

        <AddBtn type="submit">Add contact</AddBtn>
      </StyledForm>
    </Formik>
  );
};
