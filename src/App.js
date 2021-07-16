import { Link, Route } from 'react-router-dom';

import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { Navbar } from './components/Navbar';
import React from 'react';

let Title = () => {
  return (
    <a href="/#home">
      <div className="flex items-center space-x-2">
        <div className="text-gray-700">CP</div>
        <div className="text-blue-600">Communications.</div>
      </div>
    </a>
  );
};

function App() {
  return (
    <div className="flex flex-col w-screen h-screen select-none">
      <Navbar title={<Title />} padding="md:px-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center space-y-5 md:space-x-10 md:space-y-0">
          <div className="flex w-full md:w-auto px-10 md:px-0 text-lg md:text-md hover:md:bg-blue-200 hover:text-blue-600 rounded-lg md:hover:text-blue-300 md:flex-col items-center justify-center text-gray-600 cursor-pointer">
            <a href="/#why">Why</a>
          </div>
          <div className="flex w-full md:w-auto px-10 md:px-0 text-lg md:text-md hover:md:bg-blue-200 hover:text-blue-600 rounded-lg md:hover:text-blue-300 md:flex-col items-center justify-center text-gray-600 cursor-pointer">
            <a href="/#licence">Licence</a>
          </div>
          <div className="flex w-full md:w-auto px-10 md:px-0 text-lg md:text-md hover:md:bg-blue-200 hover:text-blue-600 rounded-lg md:hover:text-blue-300 md:flex-col items-center justify-center text-gray-600 cursor-pointer">
            <a href="/#download">Download</a>
          </div>
          <div className="flex w-full md:w-auto px-10 md:px-0 text-lg md:text-md hover:md:bg-blue-200 hover:text-blue-600 rounded-lg md:hover:text-blue-300 md:flex-col items-center justify-center text-gray-600 cursor-pointer">
            <a href="/#contactUs">Contact Us</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-5 md:space-x-10 md:space-y-0 pt-10 md:pt-0">
          <Link to="/signIn" className=" w-full md:w-auto ">
            <div className="flex w-full md:w-auto justify-center items-center bg-gray-100 hover:bg-blue-300 hover:text-gray-100 border-l border-t border-r border-b border-blue-300 px-3 py-1 md:px-6 md:py-2 rounded-full text-blue-500 font-bold">
              Sign In
            </div>
          </Link>
          <Link to="/signUp" className=" w-full md:w-auto ">
            <div className="flex w-full md:w-auto justify-center items-center bg-blue-200 hover:bg-blue-300 hover:text-gray-100 border-l border-t border-r border-b border-blue-300 px-3 py-1 md:px-6 md:py-2 rounded-full text-blue-500 font-bold">
              Sign Up
            </div>
          </Link>
        </div>
      </Navbar>

      <Content>
        <Route exact path="/" component={(props) => <HomePage {...props} />} />
      </Content>

      <Footer padding="px-6 py-3">
        <div className="flex w-full justify-between items-center text-blue-500">
          <div>CPC &#9994;'s With SA</div>
          <div className="text-gray-700">by Connor Davis</div>
        </div>
      </Footer>
    </div>
  );
}

export default App;
