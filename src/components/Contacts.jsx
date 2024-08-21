import React from 'react';
import '../styles/contacts.css';

const Contacts = () => {
    return (
        <div className="contacts-page">
            <div className="contacts-page-content">
                <h2>Контакты</h2>
                <div className="company-contact-info">
                    <h3>Свяжитесь с нами</h3>
                    <p>Почта компании: <a href="mailto:danil@mail.ru">danil@mail.ru</a></p>
                    <p>Контактный номер: <a href="tel:+79121231212">+7 (912) 123 12 12</a></p>
                    <p>Мы всегда готовы ответить на ваши вопросы и помочь решить любые возникшие проблемы. Свяжитесь с нами по электронной почте или телефону — мы стремимся обеспечить вам качественную поддержку и внимание к каждому клиенту.</p>
                </div>
                <div className="author-info">
                    <h3>Автор сайта</h3>
                    <p>Почта автора: <a href="mailto:zetzet16@yandex.ru">zetzet16@yandex.ru</a></p>
                    <p>Автор: Ilya Beskrovny</p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;

