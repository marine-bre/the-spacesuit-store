import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [result, setResult] = useState(null);

    const resultMessage = document.getElementById("result-message");

    const emailValidation = (email) => {
        const emailRegex = /(^\w+)[a-z0-9.]+\@\w+\.\w+/i;
        return emailRegex.test(email)? true : false
    }

    const resetFields = () => {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    }

    const contactSubmit = (e) => {        
        
        e.preventDefault();
        if(emailValidation(email)===true){
            axios.post('/send', {message, name, phone, email})
        .then(response => {
            setResult(response.data);
        })
        .then(resetFields())
        .then(resultMessage.textContent="We got it! Thanks!")
        .catch(()=>{
            setResult({sucess:"false", message:'Something went wrong, please try again'})
        });}
        else{
            alert("please enter correct email address")}
            setEmail('')
        }

    return (
        <div id="contact">
            <form onSubmit={contactSubmit} method='POST' action='send'>
                <ul id="contact-form">
                    <li>
                        <label htmlFor="form-name">* Name : </label>
                        <input type="text" id="form-name" value={name} onChange={e => setName(e.target.value)} required></input>
                    </li>
                    <li> <label htmlFor="form-email">* E-mail address : </label>
                        <input id="form-email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                    </li>
                    <li> <label htmlFor="form-phone">* Phone number : </label>
                        <input type="text" id="form-phone" value={phone} onChange={e => setPhone(e.target.value)} required></input>
                    </li>
                    <li id='message-field'>  <label htmlFor="form-message">* Your message : </label>
                        <input type="text" id="form-message" value={message} onChange={e => setMessage(e.target.value)} required></input>
                    </li>

                    <button type="submit" value="submit" className="button-go">Submit</button>
                </ul>
            </form>
            <p id="result-message"></p>

        </div>
    )
}

export default Contact;

