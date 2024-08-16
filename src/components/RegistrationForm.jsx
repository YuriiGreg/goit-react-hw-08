import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="email">Email</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="password">Password</label>
        <Field type="password" id="password" name="password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
