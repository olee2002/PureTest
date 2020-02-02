import React from 'react';
import "./styles.scss";
import content from "./content";
import NavContainer from "../../containers/NavContainer";
import InputField from "../../common/InputField";
import TextArea from "../../common/TextArea";
import Button from "../../common/Button";
import FooterNav from "../FooterNav";

const Contact = ({ 
    first_name,
    last_name,
    email,
    inquiry_type,
    inquiry,
    selectIsOpen,
    handleSelectClick,
    handleButtonClick,
    onInputChange
}) => {
    return (
        <div className="contactContainer">
            <NavContainer />
            <h5 className="contactFormHeader">{content.HEADER}</h5>
            <form className="formContainer">
                <div className="headerInputRow">
                    <div className="inputContainer">
                        <InputField 
                            id="first_name"
                            className="inputField"
                            onChange={onInputChange}
                            value={first_name}
                            placeholder={content.FIRST_NAME}
                        />
                    </div>
                    <div className="inputContainer">
                        <InputField 
                            id="last_name"
                            className="inputField"
                            onChange={onInputChange}
                            value={last_name}
                            placeholder={content.LAST_NAME}
                        />
                    </div>
                    <div className="inputContainer">
                        <InputField 
                            id="email"
                            className="inputField"
                            onChange={onInputChange}
                            value={email}
                            placeholder={content.EMAIL}
                        />
                    </div>
                    <div onClick={() => handleSelectClick(!selectIsOpen)} className="inputContainer">
                        <InputField 
                            id="inquiry_type"
                            className="inputField"
                            onChange={onInputChange}
                            value={inquiry_type}
                            placeholder={content.INQUIRY_TYPE}
                            hasIcon
                            iconPosition="right"
                            iconName="add_circle"
                            disabled={true}
                        />
                        {selectIsOpen && (
                            <ul className="selectList">
                                {content.INQUIRY_TYPES.map((type, i) => <li onClick={(e) => onInputChange(e, type)} key={i} style={(inquiry_type === type) ? { color: '#c90016' } : {}}>{type}</li>)}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="textAreaContainer">
                    <TextArea 
                        id="inquiry"
                        className="textArea"
                        onChange={onInputChange}
                        value={inquiry}
                        placeholder={content.TEXTAREA_PLACEHOLDER}
                    />
                </div>
                <div className="buttonContainer">
                    <Button
                        onClick={(e) => handleButtonClick(e)}
                        className="submitButton"
                        buttonText={content.BUTTON_NAME_TYPES[1]}
                        disabled={false}
                    />
                </div>
            </form>
            <FooterNav />
        </div>
    );
};

export default Contact;