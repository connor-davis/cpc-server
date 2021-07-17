import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

export let SignUpPage = () => {
  let [statusMessage, setStatusMessage] = useState({});

  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');

  let perform = async () => {
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    )
      return setStatusMessage({
        text: 'Please make sure all fields are filled in.',
        type: 'error',
      });
    else if (password !== confirmPassword)
      return setStatusMessage({
        text: 'Passwords do not match.',
        type: 'error ',
      });
    else {
      axios
        .post('http://192.168.101.224:8080/api/authentication/register/admin', {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        })
        .then((response) => {
          console.log(response);

          if (response.data.success) {
            axios
              .get('http://192.168.101.224:8080/api/authOnly', {
                headers: {
                  Authorization: `Bearer ${response.data.data.userAuthenticationToken}`,
                },
              })
              .then((response) => {
                console.log(response);
              });

            return setStatusMessage({
              text: 'Successfully registered new user.',
              type: 'success',
            });
          } else {
            return setStatusMessage({
              text: 'Unable to register new user.',
              type: 'error',
            });
          }
        });
    }
  };

  return (
    <div className="flex w-screen h-screen bg-gray-100 justify-center">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col w-auto h-auto shadow-lg rounded-md p-2">
          <div className="flex w-full h-auto p-2 py-10 justify-center">
            <div className="text-xl text-blue-600">Sign Up</div>
          </div>
          {statusMessage && statusMessage.type && (
            <div
              className={`flex w-full h-auto p-2 text-center justify-center ${
                statusMessage.type === 'success'
                  ? 'bg-green-300 border-l border-t border-r border-b border-green-400 text-green-500'
                  : 'bg-red-300 border-l border-t border-r border-b border-red-400 text-red-500'
              }`}
            >
              {statusMessage.text}
            </div>
          )}
          <div className="flex flex-col w-full h-auto py-4 space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="flex bg-gray-200 border-l border-t border-r border-b border-gray-300 px-3 py-2 focus:outline-none text-blue-600 w-36"
                placeholder="First Name"
                onChange={({ target: { value } }) => setFirstName(value)}
                value={firstName}
              />
              <input
                type="text"
                className="flex bg-gray-200 border-l border-t border-r border-b border-gray-300 px-3 py-2 focus:outline-none text-blue-600 w-36"
                placeholder="Last Name"
                onChange={({ target: { value } }) => setLastName(value)}
                value={lastName}
              />
            </div>
            <input
              type="email"
              className="flex bg-gray-200 border-l border-t border-r border-b border-gray-300 px-3 py-2 focus:outline-none text-blue-600"
              placeholder="Email"
              onChange={({ target: { value } }) => setEmail(value)}
              value={email}
            />
            <input
              type="password"
              className="flex bg-gray-200 border-l border-t border-r border-b border-gray-300 px-3 py-2 focus:outline-none text-blue-600"
              placeholder="Password"
              onChange={({ target: { value } }) => setPassword(value)}
              value={password}
            />
            <input
              type="password"
              className="flex bg-gray-200 border-l border-t border-r border-b border-gray-300 px-3 py-2 focus:outline-none text-blue-600"
              placeholder="Confirm Password"
              onChange={({ target: { value } }) => setConfirmPassword(value)}
              value={confirmPassword}
            />
          </div>
          <div className="flex flex-col w-full h-auto py-4 space-y-2">
            <div
              className="flex justify-center items-center bg-blue-600 text-gray-100 px-3 py-2 rounded-md cursor-pointer"
              onClick={() => perform()}
            >
              Continue
            </div>
            <div className="flex justify-center items-center space-x-2">
              <div className="text-gray-700">Already have an account?</div>
              <Link to="/signIn">
                <span className="text-blue-600">Sign In</span>
              </Link>
            </div>
            <Link to="/">
              <div className="flex justify-center items-center text-blue-600 px-3 py-2 rounded-md cursor-pointer">
                Cancel
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
