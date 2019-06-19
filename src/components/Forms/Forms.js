/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { RegUser } from "../../actions"
import { reduxForm,Field  } from 'redux-form';

// import "./index.css"

class ContactForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <Field name="firstName" component="input" type="text" />
                </div>
                <div>
                    <label>Last Name</label>
                    <Field name="lastName" component="input" type="text" />
                </div>
                <div>
                    <label>Email</label>
                    <Field name="email" component="input" type="email" />
                </div>
                <button type="submit" onClick={handleSubmit(data => {
                    console.log(data)
                })}>Submit</button>
            </form>
        );
    }
}
// Decorate the form component
ContactForm = reduxForm({
    form: 'contact' // a unique name for this form
})(ContactForm);

export default ContactForm;