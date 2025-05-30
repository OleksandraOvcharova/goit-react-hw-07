import Contact from "./Contact";
import "./ContactList.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../redux/contactsSlice";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className="contact-list">
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className="contact-list-item">
            <Contact id={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
}
