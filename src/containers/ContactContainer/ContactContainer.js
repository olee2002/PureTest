import React, { useState, useCallback } from 'react';
import { connect } from "react-redux";
import Contact from "../../components/Contact";
import { updateInquiry } from "../../state/actions/updateActions";
import { updateSelector } from "../../state/selectors/updates";
import emailjs from "emailjs-com";
import { 
    emailjsTemplateID,
    emailjsUserID
 } from "../../config";

const ContactContainer = ({ 
    update = [],
    dispatchUpdate
}) => {
    const {
        first_name,
        last_name,
        email,
        inquiry_type,
        inquiry
    } = update;
    const [selectIsOpen, setSelectIsOpen] = useState(false);

    const handleButtonClick = (e) => {
        emailjs.send(
            'gmail',
            emailjsTemplateID, 
            {
                first_name: first_name,
                last_name: last_name,
                email: email,
                inquiry_type: inquiry_type,
                inquiry: inquiry,
            },
            emailjsUserID
            ).then((result) => {
                window.alert(result.text);
            }, (error) => {
            console.log(error.text);
        });
    };

    const handleInputChange = useCallback((e, type) => {
        let payload = type ? { inquiry_type: type } : { [e.target.id]: e.target.value };
        dispatchUpdate(payload);
    }, [dispatchUpdate]);

    return (
        <Contact 
            first_name={first_name}
            last_name={last_name}
            email={email}
            inquiry_type={inquiry_type}
            inquiry={inquiry}
            selectIsOpen={selectIsOpen}
            handleSelectClick={setSelectIsOpen}
            handleButtonClick={handleButtonClick}
            onInputChange={handleInputChange}
        />
    );
};

const dispatchActions = (dispatch) => ({
    dispatchUpdate: (payload) => dispatch(updateInquiry(payload))
});

export default connect (
    updateSelector,
    dispatchActions
)(ContactContainer);