import css from "./Form.module.css";

export const Form = ({ data }) => {
    // console.log(data);
    // console.log(data.length);
    // console.log(typeof data);
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    
    return (
        <form className={css.phonebook_form} name="phonebook_form" autoComplete="on">
            {data.map(({type, name, pattern, title, isRequired}, index) => (
                <label
                    key={index}
                    className={css.phonebook_label}
                >
                    {capitalizeFirstLetter(name)}
                    <input
                        type={type}
                        name={name}
                        pattern={pattern}
                        title={title}
                        required
                    />
                </label>
            ))}
            
            {/* <label className={css.phonebook_label}>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label> */}

            {/* <label>
                Password
                <input type="password" name="password" />
            </label> */}

            {/* <button type="submit">Submit</button> */}
        </form>
    )
};