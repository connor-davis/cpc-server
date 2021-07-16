import LinuxImage from '../assets/linux.png';
import React from 'react';
import WindowsImage from '../assets/windows.png';

export let HomePage = () => {
  return (
    <div className="flex flex-col w-full h-full space-y-32">
      <div id="home" className="flex flex-col">
        <div className="flex flex-col justify-center items-center p-10 space-y-1 md:space-y-5">
          <div className="flex text-4xl md:text-8xl">Optimise</div>
          <div className="flex">
            <div className="relative flex flex-col space-y-3">
              <div className="flex text-4xl md:text-8xl text-blue-600 z-10 transform skew-x-6">
                Communications
              </div>
              <div className="absolute bottom-0 z-0 flex w-full h-6 bg-blue-200 rounded-sm"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:p-10 space-y-5">
          <div className="flex text-lg px-5 md:px-20 text-center">
            CPC is designed to allow your organization to efficiently
            communicate on a secure platform. Let your community stay updated
            with whats happening.
          </div>
        </div>
      </div>

      <div id="why" className="flex flex-col">
        <div className="flex flex-col justify-center items-center p-10 space-y-1 md:space-y-5">
          <div className="flex">
            <div className="relative flex flex-col space-y-3">
              <div className="flex text-4xl md:text-8xl text-blue-600 z-10 transform skew-x-6">
                Why CP Communications?
              </div>
              {/* <div className="absolute bottom-0 z-0 flex w-32 h-6 bg-blue-200 rounded-sm"></div> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center p-5 md:p-10 space-y-5 md:space-x-5 md:space-y-0">
          <div className="flex flex-col shadow-md md:shadow-xl rounded-md space-y-6 p-6 md:w-1/3 h-full">
            <div className="flex justify-center">
              <div className="flex flex-col justify-center items-center bg-blue-600 text-gray-100 p-5 rounded-full shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex text-2xl font-bold">Fast Messaging</div>
            <div className="flex">
              <div className="flex flex-col text-lg">
                Messaging in CPC happens in real-time, making sure that you and
                your users stay in touch as things happen.
              </div>
            </div>
          </div>
          <div className="flex flex-col shadow-md md:shadow-xl rounded-md space-y-6 p-6 md:w-1/3 h-full">
            <div className="flex justify-center">
              <div className="flex flex-col justify-center items-center bg-blue-600 text-gray-100 p-5 rounded-full shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex text-2xl font-bold">Intuitive UI</div>
            <div className="flex">
              <div className="flex flex-col text-lg">
                The UI of CPC is built to be easy and efficient to use, making
                sure that anyone can get on and use the app without having to
                figure out where everything is.
              </div>
            </div>
          </div>
          <div className="flex flex-col shadow-md md:shadow-xl rounded-md space-y-6 p-6 md:w-1/3 h-full">
            <div className="flex justify-center">
              <div className="flex flex-col justify-center items-center bg-blue-600 text-gray-100 p-5 rounded-full shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
            </div>
            <div className="flex text-2xl font-bold">Reliable Servers</div>
            <div className="flex">
              <div className="flex flex-col text-lg">
                The CPC server is built to manage users efficiently and reliably
                and also makes sure that admins can keep in touch with users
                while being able to let the community know whats happening out
                there.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="licence" className="flex flex-col">
        <div className="flex flex-col justify-center items-center p-10 space-y-2 md:space-y-5">
          <div className="flex">
            <div className="relative flex flex-col space-y-3">
              <div className="flex text-4xl md:text-8xl text-blue-600 z-10 transform skew-x-6">
                Licence
              </div>
              {/* <div className="absolute bottom-0 z-0 flex w-full h-6 bg-blue-200 rounded-sm"></div> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:p-10 space-y-5">
          <div className="flex text-lg px-5 md:px-20 text-center">
            Your CPC Licence helps fund the development of server that your
            platform will be hosted on as well as the mobile app that your users
            will be able to download to keep things updated.
          </div>
        </div>
      </div>

      <div id="download" className="flex flex-col">
        <div className="flex flex-col justify-center items-center p-10 space-y-2 md:space-y-5">
          <div className="flex">
            <div className="relative flex flex-col space-y-3">
              <div className="flex text-4xl md:text-8xl text-blue-600 z-10 transform skew-x-6">
                Downloads
              </div>
              {/* <div className="absolute bottom-0 z-0 flex w-full h-6 bg-blue-200 rounded-sm"></div> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center p-5 md:p-10 space-y-5 md:space-x-5 md:space-y-0">
          <div className="flex flex-col w-full shadow-md md:shadow-xl rounded-md space-y-6 p-6 md:w-1/3 h-full">
            <div className="flex justify-center w-full">
              <div className="flex flex-col justify-center items-center bg-blue-600 text-gray-100 p-5 rounded-full shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex text-2xl font-bold justify-center">
              Download Server
            </div>
            <div className="flex justify-center space-x-2">
              <div className="flex flex-col justify-center items-center bg-gray-100 text-gray-100 p-5 rounded-full shadow-2xl cursor-pointer">
                <img src={WindowsImage} alt="Windows" className="w-10 h-10" />
              </div>
              <div className="flex flex-col justify-center items-center bg-gray-100 text-gray-100 p-5 rounded-full shadow-2xl cursor-pointer">
                <img src={LinuxImage} alt="Linux" className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contactUs" className="flex flex-col">
        <div className="flex flex-col justify-center items-center p-10 space-y-5">
          <div className="flex">
            <div className="relative flex flex-col space-y-3">
              <div className="flex text-4xl md:text-8xl text-blue-600 z-10 transform skew-x-6">
                Contact Us
              </div>
              {/* <div className="absolute bottom-0 z-0 flex w-44 md:w-52 h-6 bg-blue-200 rounded-sm"></div> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:p-10 space-y-5">
          <div className="flex text-lg px-5 md:px-20 text-center">
            Get in Contact with us to find out more.
          </div>
        </div>
      </div>
    </div>
  );
};
