import React from "react";
import { Formik, Field, Form } from "formik";
import { UserFormSchema, EmailFormSchema } from "./FormSchema";

const UserForm = () => (
    <Formik
      initialValues={{
        username: "",
        phone: ""
      }}
      validationSchema={UserFormSchema}
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
      render={({ errors, touched }) => (
        <Form>
          <div className='subscribe'>
            <Field name="username" placeholder='Your name' type="text" className='subscribe-input' />

            {errors.username &&
              touched.username && (
                <div className="field-error">{errors.username}</div>
              )}

            <Field name="phone" placeholder='Your number' type="tel" id='phone-mask' className='subscribe-input' />

            {errors.phone &&
              touched.phone && (
                <div className="field-error field-error--next">{errors.phone}</div>
              )}

            <button type="submit" className='subscr-button'>Get a call</button>
          </div>
        </Form>
      )}
    />
);

const EmailForm = () => (
    <Formik
      initialValues={{
        email: ""
      }}
      validationSchema={EmailFormSchema}
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
      render={({ errors, touched }) => (
        <Form>
          <div className='newsletter'>
            <Field
              name="email"
              placeholder='Your email'
              type="email"
              className='newsletter-input'
            />

            {errors.email &&
              touched.email && <div className="field-error">{errors.email}</div>}

            <button className='newsletter-button' type='submit'>Subscribe</button>
          </div>
        </Form>
      )}
    />
);

export {  UserForm, EmailForm };
