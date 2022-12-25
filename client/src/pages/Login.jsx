import React from 'react'

const Login = () => {
    return (
        <div className='w-[100vw] h-[100vh] bg-zinc-100 flex items-center justify-center'>
            <div className='w-2/3 h-2/3 flex'>
                <div className='flex-1 flex flex-col justify-center'>
                    <h1 className='text-5xl font-extrabold text-sky-600 mb-2'>
                        Login Logo</h1>
                    <span className='text-2xl'>Lorem ipsum dolor sit amet.</span>
                </div>
                <div className='flex-1 flex flex-col justify-center '>
                    <div className='w-72 h-72 bg-white rounded-lg flex flex-col justify-between p-4'>
                        <input type="text" placeholder='Email' className='h-12 rounded-lg border border-solid border-gray-300 text-lg pl-5 focus:outline-none' />
                        <input type="text" placeholder='Password' className='h-12 rounded-lg border border-solid border-gray-300 text-lg pl-5 focus:outline-none' />
                        <button className='h-12 rounded-lg border-none bg-sky-500 text-white font-medium text-xl'>Log In</button>
                        <span className='text-center text-sky-500'>Forgot Password</span>
                        <button className='h-12  rounded-lg border-none bg-green-500 text-white font-medium text-xl'>Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login