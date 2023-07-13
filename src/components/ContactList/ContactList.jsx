import PropTypes from "prop-types";
import css from "./ContactList.module.css";

export const ContactList = ({ contacts, handleDeleteContact }) => {
    
    return (
        <ul className={css.phonebook__list}>
            {contacts.length !== 0
                ?
                (contacts.map(({ name, id, number }) => (
                    <li key={id}>
                        <span>{name}</span>
                        <span>{number}</span>
                        <button
                            type="button"
                            onClick={() => handleDeleteContact(id)}
                            className={css.contact__item}
                        >
                            Delete
                        </button>
                    </li>
                )))
                :
                (<li>
                    <p className="phonebook__info">Unfortunately, but you do not have any contacts.</p>
                </li>)
            }
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleDeleteContact: PropTypes.func.isRequired,
};