import  Axios  from 'axios';
Axios.defaults.withCredentials = true;
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const Login = ({ setIsLoggedIn }) => {
   const [email,  setEmail] = useState('');
   const [password,  setPassword] = useState('');

    const Login = ()=> {
      Axios.post('http://localhost:3000/auth/signin', {
        email: email,
        password: password,
      }, {
        withCredentials: true, // Include cookies
      }).then((response)=> {
        console.log(response);
        setIsLoggedIn(true);
        navigateTo('/');
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
    };

    const navigateTo = useNavigate();
    const redirectToSignUpPage = () => {
      navigateTo('/auth/signup');
    };
    
    // handleChange = (e) => {
    //     e.preventDefault()
    //     console.log(e.target.value)
    // }
  return (
    <div>
     
        <div className="md:mx-6 md:p-12">
          <div className='text-center'>
            <img       className="mx-auto w-48" src="https://pranadaayurved.in/wp-content/uploads/2022/09/Pranada-Logo-tree.png" alt="logo" />
               <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The AyurEase Team
                      </h4>
              </div>
                 <form >
                   <p className="mb-4"> Please login to your account   </p>
            
                     {/* <!--email input--> */}
                   <input type="text" 
                   className='mb-4 text-center rounded px-6 pb-2 pt-2.5 text-md font-medium text-black w-full border-solid border-2 border-gray-300 shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]' 
                     placeholder='email'
                     onChange={(e)=> {
                      setEmail(e.target.value);
                     }} > 
                    </input>
      
               
                    <input type="password" 
                   className='mb-4 text-center rounded px-6 pb-2 pt-2.5 text-md font-medium text-black w-full border-solid border-2 border-gray-300 shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]'
                     placeholder='Password'
                     onChange={(e)=> {
                      setPassword(e.target.value);
                     }} >
                    </input>
                     {/* <!--Submit button--> */}
                    <div className="mb-12 pb-1 pt-1 text-center">
                       
                    <button
                     className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] pb-8"
                     type="button"
                     onClick={Login}
                    style={{
                     background:
                     "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                   >
                   Log in
                  </button>
                      

                     {/* <!--Forgot password link--> */}
                    <a href="/auth/forgot-password">Forgot password?</a>
                   </div>
                      {/* <!--Register button--> */}
                   <div className="flex items-center justify-between pb-6">
                <p className="mb-0 mr-2">Don't have an account?</p>
                   
                 <button
                   type="button"
                   className="text-blue-600 inline-block rounded border-4  border-danger border-blue  px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  onClick={redirectToSignUpPage}
                 >
                  Register
                </button></div>
                 </form>
     
      </div>
    
    </div>
  )
}


