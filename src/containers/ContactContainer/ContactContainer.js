import React, { useState, useReducer } from 'react';
import Contact from "../../components/Contact";
import emailjs from "emailjs-com";
import { emailjsTemplateID, emailjsUserID } from "../../config";

const ContactContainer = (props) => {
    const [formData, setFormData] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            first_name: "",
            last_name: "",
            email: "",
            inquiry_type: "Property Purchase or Sale Information Request",
            inquiry: ""
        }
    );
    const [selectIsOpen, setSelectIsOpen] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const validateForm = ({
        first_name,
        last_name,
        email,
        inquiry
    }) => {
        let formErrors = [first_name, last_name, email, inquiry].filter(value => value.length === 0);
        return formErrors.length === 0 ? true : false;
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        setClickCount(clickCount + 1);
        if (validateForm(formData)) {
            emailjs.send(
                'gmail',
                emailjsTemplateID, 
                {
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    email: formData.email,
                    inquiry_type: formData.inquiry_type,
                    inquiry: formData.inquiry,
                },
                emailjsUserID
            ).then(() => {
                setClickCount(0);
                setFormData({
                    first_name: "",
                    last_name: "",
                    email: "",
                    inquiry_type: "Property Purchase or Sale Information Request",
                    inquiry: ""
                });
                window.alert("Message sent successfully!");
            }, (error) => {
                emailjs.send(
                    'gmail', 
                    emailjsTemplateID, 
                    { 
                        first_name: "Error",
                        last_name: "Messenger",
                        email: "none",
                        inquiry_type: "Message send error",
                        inquiry: error
                    },
                    emailjsUserID
                );
                window.alert("Sorry, message could not be sent due to some type of error.");
            });
        }

    };

    const handleInputChange = (e, type) => {
        setFormData(type ? { ...formData, inquiry_type: type } : { ...formData, [e.target.id]: e.target.value });
    };

    return (
        <Contact 
            formData={formData}
            clickCount={clickCount}
            selectIsOpen={selectIsOpen}
            handleSelectClick={setSelectIsOpen}
            handleButtonClick={handleButtonClick}
            onInputChange={handleInputChange}
        />
    );
};

export default ContactContainer;