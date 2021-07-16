import React from 'react';

export let Footer = ({ children, padding }) => {
  return (
    <div
      className={`flex justify-between ${padding} bg-gray-100 border-t border-gray-300`}
    >
      {children}
    </div>
  );
};
