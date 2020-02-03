import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ className, iconName }) => {
    const style = { background: `url('../../img/${iconName}.png') 0% 0% / contain no-repeat` };
    return <div className={className} style={style} ></div>
};

Icon.propTypes = {
    className: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
};

export default Icon;