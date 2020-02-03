import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

const Button = ({ 
  onClick, 
  className, 
  buttonText, 
  isIcon, 
  iconName, 
  disabled 
}) => {
  return !isIcon ? (
    <button className={className} onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  ) : (
    <div role="button" onClick={onClick}>
      <Icon className={className} iconName={iconName} />
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  isIcon: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProp = {
  buttonText: "",
  isIcon: false,
  disabled: false
};

export default Button;