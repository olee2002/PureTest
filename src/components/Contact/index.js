import React from 'react';
import "./styles.scss";
import content from "./content";
import NavContainer from "../../containers/NavContainer";
import InputField from "../../common/InputField";
import TextArea from "../../common/TextArea";
import Button from "../../common/Button";
import FooterNav from "../FooterNav";

const Contact = ({ 
    formData,
    clickCount,
    selectIsOpen,
    handleSelectClick,
    handleButtonClick,
    onInputChange
}) => {
    const {
        first_name,
        last_name,
        email,
        inquiry_type,
        inquiry
    } = formData;

    let formIsValid = first_name.length < 1 ? 
        false : last_name.length < 1 ? 
        false : email.length < 1 ?
        false : inquiry.length < 5 ? 
        false : true;

    return (
        <div className="contactContainer">
            <NavContainer />
            <h5 className="contactFormHeader">{content.HEADER}</h5>
            <form className="formContainer">
                <div className="headerInputRow">
                    <div className="inputContainer">
                        <InputField 
                            id="first_name"
                            className={((clickCount > 0) && (first_name.length === 0)) ? "errorField" : "inputField"}
                            onChange={onInputChange}
                            value={first_name}
                            placeholder={content.FIRST_NAME}
                            style={
                                ((clickCount > 0) && (first_name.length === 0)) ? { borderTop: "2px solid #ff0000" } : 
                                ((clickCount > 0) && (first_name.length !== 0)) ? { borderTop: "2px solid #0080005b" } : {}
                            }
                        />
                    </div>
                    <div className="inputContainer">
                        <InputField 
                            id="last_name"
                            className={((clickCount > 0) && (last_name.length === 0)) ? "errorField" : "inputField"}
                            onChange={onInputChange}
                            value={last_name}
                            placeholder={content.LAST_NAME}
                            style={
                                ((clickCount > 0) && (last_name.length === 0)) ? { borderTop: "2px solid #ff0000" } : 
                                ((clickCount > 0) && (last_name.length !== 0)) ? { borderTop: "2px solid #0080005b" } : {}
                            }
                        />
                    </div>
                    <div className="inputContainer">
                        <InputField 
                            id="email"
                            className={((clickCount > 0) && (email.length === 0)) ? "errorField" : "inputField"}
                            onChange={onInputChange}
                            value={email}
                            placeholder={content.EMAIL}
                            style={
                                ((clickCount > 0) && (email.length === 0)) ? { borderTop: "2px solid #ff0000" } : 
                                ((clickCount > 0) && (email.length !== 0)) ? { borderTop: "2px solid #0080005b" } : {}
                            }
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
                            style={clickCount > 0 && { borderTop: "2px solid #0080005b" }}
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
                        className={((clickCount > 0) && (inquiry.length < 4)) ? "errorArea" : "textArea"}
                        onChange={onInputChange}
                        value={inquiry}
                        placeholder={content.TEXTAREA_PLACEHOLDER}
                        style={
                            ((clickCount > 0) && (inquiry.length === 0)) ? { borderTop: "2px solid #ff0000" } : 
                            ((clickCount > 0) && (inquiry.length !== 0)) ? { borderTop: "2px solid #0080005b" } : {}
                        }
                    />
                </div>
                <div className="buttonContainer">
                    <Button
                        onClick={(e) => handleButtonClick(e)}
                        className="submitButton"
                        buttonText={content.BUTTON_NAME_TYPES[1]}
                        disabled={((clickCount > 0) && !formIsValid) ? true : false}
                    />
                </div>
            </form>
            <FooterNav />
        </div>
    );
};

export default Contact;