import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import "./Contact.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsOps.js";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className="contact-box">
      <div className="contact-container">
        <div className="contact-name-container">
          <FaUserAlt className="icon-box" />
          <p>{name}</p>
        </div>
        <div className="contact-number-container">
          <FaPhone className="icon-box" />
          <p>{number}</p>
        </div>
      </div>
      <button
        className="contact-button"
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}
