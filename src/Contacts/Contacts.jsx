import React from 'react';
import style from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={style.contactsBox}>
            <div className={style.container}>
                <h2 className={style.title}>
                    Contacts
                </h2>
                <form className={style.contacts}>
                    <input placeholder="Имя" />
                    <input placeholder="e-mail"/>
                    <textarea className={style.text} placeholder="Сообщение"></textarea>
                    <button className={style.click} type="submit">Send</button>
                </form>

            </div>

        </div>
    );
}

export default Contacts;
