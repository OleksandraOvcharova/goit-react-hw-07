import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ContactForm.css";
import { nanoid } from "nanoid";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, actions) => {
    dispatch(addContact({ id: nanoid(), name, number }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className="contact-form">
        <div className="contact-input-group">
          <label className="contact-label" htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className="contact-name-input"
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            name="name"
            component="span"
            className="contact-error"
          />
        </div>

        <div className="contact-input-group">
          <label className="contact-label" htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className="contact-number-input"
            type="tel"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage
            name="number"
            component="span"
            className="contact-error"
          />
        </div>
        <button className="add-button" type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
