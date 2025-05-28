import Contact from "./Contact";
import "./ContactList.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(({ contacts: { items } }) => {
    return items;
  });

  const search = useSelector(({ filters: { name } }) => {
    return name;
  });

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

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
