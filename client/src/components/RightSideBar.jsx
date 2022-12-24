import React from 'react'
import { FaBirthdayCake } from "react-icons/fa"
import { RiAdvertisementFill } from "react-icons/ri"
import Person1 from "../assets/persons/person1.jpg"

const RightSideBar = () => {
    return (
        <div className='flex-[3]'>
            <div className='pt-5 pr-5'>
                <div className='flex items-center'>
                    <FaBirthdayCake color='red' size={40} className="mr-2"></FaBirthdayCake>
                    <span className='font-light text-base'>
                        <b>Jane Doe</b>and <b>3 other friends</b>have birthday today
                    </span>
                </div>
                <RiAdvertisementFill className='w-full rounded-lg my-7 mx-0' ></RiAdvertisementFill>
                <h1 className='font-semibold text-lg mb-5'>Friends Online</h1>
                <ul className='p-0 m-0'>
                    <li className='flex items-center mb-4'>
                        <div className='mr-2 relative'>
                            <img src={Person1} alt="" className='w-10 h-10 rounded-full object-cover'/>
                            <span className='w-3 h-3 rounded-full bg-green-500 absolute -top-1 left-7 border-2 border-solid border-white'></span>
                        </div>
                        <span className='font-medium'>John Doe</span>
                    </li>
                    <li className='flex items-center mb-4'>
                        <div className='mr-2 relative'>
                            <img src={Person1} alt="" className='w-10 h-10 rounded-full object-cover'/>
                            <span className='w-3 h-3 rounded-full bg-green-500 absolute -top-1 left-7 border-2 border-solid border-white'></span>
                        </div>
                        <span className='font-medium'>John Doe</span>
                    </li>
                    <li className='flex items-center mb-4'>
                        <div className='mr-2 relative'>
                            <img src={Person1} alt="" className='w-10 h-10 rounded-full object-cover'/>
                            <span className='w-3 h-3 rounded-full bg-green-500 absolute -top-1 left-7 border-2 border-solid border-white'></span>
                        </div>
                        <span className='font-medium'>John Doe</span>
                    </li>
                    <li className='flex items-center mb-4'>
                        <div className='mr-2 relative'>
                            <img src={Person1} alt="" className='w-10 h-10 rounded-full object-cover'/>
                            <span className='w-3 h-3 rounded-full bg-green-500 absolute -top-1 left-7 border-2 border-solid border-white'></span>
                        </div>
                        <span className='font-medium'>John Doe</span>
                    </li>
                    <li className='flex items-center mb-4'>
                        <div className='mr-2 relative'>
                            <img src={Person1} alt="" className='w-10 h-10 rounded-full object-cover'/>
                            <span className='w-3 h-3 rounded-full bg-green-500 absolute -top-1 left-7 border-2 border-solid border-white'></span>
                        </div>
                        <span className='font-medium'>John Doe</span>
                    </li>
                    <li className='flex items-center mb-4'>
                        <div className='mr-2 relative'>
                            <img src={Person1} alt="" className='w-10 h-10 rounded-full object-cover'/>
                            <span className='w-3 h-3 rounded-full bg-green-500 absolute -top-1 left-7 border-2 border-solid border-white'></span>
                        </div>
                        <span className='font-medium'>John Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RightSideBar