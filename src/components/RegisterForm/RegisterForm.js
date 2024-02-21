import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as Yup from 'yup';
import {
  StyledForm,
  RegBtn,
  StyledLabel,
  StyledField,
} from './RegisterForm.styled';

const initialValues = { username: '', email: '', password: '' };
const schema = Yup.object().shape({
  username: Yup.string(),
  email: Yup.string().email(),
  password: Yup.string().min(7, 'Too short password!'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(
      register({
        name: values.username,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm autoComplete="off">
          <StyledLabel htmlFor="username">
            Username
            <StyledField type="text" name="username" required />
            <span>
              <ErrorMessage name="username" />
            </span>
          </StyledLabel>
          <StyledLabel htmlFor="email">
            Email
            <StyledField type="email" name="email" required />
            <span>
              <ErrorMessage name="email" />
            </span>
          </StyledLabel>
          <StyledLabel htmlFor="password">
            Password
            <StyledField type="password" name="password" required />
            <span>
              <ErrorMessage name="password" />
            </span>
          </StyledLabel>
          <RegBtn type="submit">Register</RegBtn>
        </StyledForm>
      </Formik>
    </div>
  );
};
