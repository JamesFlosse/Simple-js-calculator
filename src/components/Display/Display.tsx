import React from 'react';
import PropTypes from 'prop-types';

import './Display.scss';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.string.isRequired, // Assuming value is required; adjust as needed
};

export default Display;
