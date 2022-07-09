import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const resultMessage = document.getElementById("result-message")

    const emailValidation = (email:string) => {
        const emailRegex = /(^\w+)[a-z0-9.]+\@\w+\.\w+/i
        return emailRegex.test(email) ? true : false
    }

    const resetFields = () => {
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

    const contactSubmit = (e:any) => {

        e.preventDefault();
        if (emailValidation(email) === true) {
            axios.post('/send', { message, name, phone, email })
                .then(res => {
                    resetFields()
                    if (resultMessage){
                        resultMessage.textContent = "We got it! Thanks!"
                    }
                })
                .catch((error) => {
                    console.log(JSON.stringify(error))
                });
        }
        else {
            alert("please enter correct email address")
        }
        setEmail('')
    }

    return (
        // <div id="contact">
            <form onSubmit={contactSubmit} method='POST' action='send'>
                <div className="form--fields">

                    <div className="labels">
                        <label htmlFor="form-name">* Name : </label>
                        <label htmlFor="form-email">* E-mail address : </label>
                        <label htmlFor="form-phone">* Phone number : </label>
                        <label htmlFor="form-message">* Your message : </label>
                    </div>
                    <div className="field">
                        <input type="text" id="form-name" value={name} onChange={e => setName(e.target.value)} required></input>
                        <input id="form-email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                        <input type="text" id="form-phone" value={phone} onChange={e => setPhone(e.target.value)} required></input>
                        <input type="text" id="form-message" value={message} onChange={e => setMessage(e.target.value)} required></input>
                    </div>
                </div>
                <button type="submit" value="submit" className="btn form--btn">Submit</button>
            </form>

        // </div>
    )
}

export default Contact;

