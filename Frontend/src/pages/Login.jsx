import React from 'react'
import { useState } from 'react'

export const Login = () => {
    // [user, setUser] = useState('')
  return (
    <div>
     
        <div className="md:mx-6 md:p-12">
          <div className='text-center'>
            <img       className="mx-auto w-48" src="https://pranadaayurved.in/wp-content/uploads/2022/09/Pranada-Logo-tree.png" alt="logo" />
            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The AyurEase Team
                      </h4>
          </div>
          <form action="">
            <p className="mb-4"> Please login to your account   </p>
            
             {/* <!--Username input--> */}
             <input type="text" 
             className='mb-4 text-center rounded px-6 pb-2 pt-2.5 text-md font-medium text-white w-full border-solid border-2 border-gray-300 shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]' 
             placeholder='Username' > 
             </input>
      
               
            <input type="password" 
            className='mb-4 text-center rounded px-6 pb-2 pt-2.5 text-md font-medium text-white w-full border-solid border-2 border-gray-300 shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]'
            placeholder='Password' >
            </input>
    {/* <!--Submit button--> */}
    <div className="mb-12 pb-1 pt-1 text-center">
                        {/* <TERipple rippleColor="light" className="w-full"> */}
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Log in
                          </button>
                        {/* </TERipple> */}

                        {/* <!--Forgot password link--> */}
                        <a href="#!">Forgot password?</a>
                      </div>
                   {/* <!--Register button--> */}
                   <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                   
                        <button
                            type="button"
                            className="text-blue-600 inline-block rounded border-4  border-danger border-blue  px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Register
                          </button></div>
          </form>
        {/* </div> */}
      </div>
    
    </div>
  )
}


