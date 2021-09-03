import React from 'react';

interface GreaterThanSignProps {
  left?: boolean;
}

const GreaterThanSign = ({ left = false }: GreaterThanSignProps) => (
  <div>
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d={`${
          left ? 'M12.061 17.071L5.01234 9.97767L12.1057 2.92898' : 'M8.93896 2.92896L15.9877 10.0223L8.89429 17.071'
        }`}
        stroke="#434343"
        strokeWidth="1.3"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  </div>
);

export default GreaterThanSign;
