import { useState, useEffect } from "react";
import React from "react";
import {ContactForm} from '../../components/contactForm/ContactForm'
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = ({contacts, addContact}) => {
  const [name,setName] =  useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [isDuplicate,setIsDuplicate] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDuplicate){
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

 
  useEffect(() => {
      if (contacts.find((contact) => contact.name === name)!== undefined){
        setIsDuplicate(true);
      } else {
        setIsDuplicate(false);
      }
  }, [name, contacts, isDuplicate]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
