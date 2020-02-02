import React from "react";

const TextArea = ({
  id,
  className,
  placeholder,
  hasIcon,
  onChange,
  iconName,
  type,
  value,
  disabled,
  style
}) => {
  let componentStyle = style;
  if (hasIcon) {
    componentStyle = {
      ...componentStyle,
      background: `url('../../img/${iconName}.png') no-repeat`,
      backgroundSize: "17px 17px",
      backgroundPosition: "8px 16px",
      paddingLeft: "30px",
    };
  }
  return (
    <textarea 
      rows="8"
      id={id}
      className={className}
      style={componentStyle}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
      disabled={disabled}
    />
  );
};

export default TextArea;