import React from 'react';

export let Content = ({ children }) => {
  return (
    <div className="flex flex-col w-screen h-full bg-gray-100 md:px-64 overflow-y-auto">
      {children}
    </div>
  );
};
