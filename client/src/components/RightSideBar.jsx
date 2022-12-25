import React from 'react'
import { FaBirthdayCake } from "react-icons/fa"
import { RiAdvertisementFill } from "react-icons/ri"
import Person1 from "../assets/persons/person1.jpg"
import { Users } from '../dummyData'

const RightSideBar = (props) => {
    return (
        <div className='flex-[3] sticky top-12'>
            <div className='pt-5 pr-5'>
                {!props.profile ? (<div> <div className='flex items-center'>
                    <FaBirthdayCake color='red' size={40} className="mr-2"></FaBirthdayCake>
                    <span className='font-light text-base'>
                        <b>Jane Doe</b>and <b>3 other friends</b>have birthday today
                    </span>
                </div>
                    <RiAdvertisementFill className='w-full rounded-lg my-7 mx-0' ></RiAdvertisementFill>
                    <h1 className='font-semibold text-lg mb-5'>Friends Online</h1>
                    <ul className='p-0 m-0'>

                        {Users.map(user => (<li className='flex items-center mb-4' key={user.id}>
                            <div className='mr-2 relative' >
                                <img src={user.profilePicture} alt="" className='w-10 h-10 rounded-full object-cover' />
                                <span className='w-3 h-3 rounded-full bg-green-500 absolute -top-1 left-7 border-2 border-solid border-white'></span>
                            </div>
                            <span className='font-medium'>{user.username}</span>
                        </li>
                        ))}

                    </ul></div>) : (
                    <div>
                        <h1 className='text-lg mb-2 font-medium'>User Information</h1>
                        <div className='mb-7'>
                            <div className='mb-2'>
                                <span className='font-medium mr-4 text-gray-400'>City: </span>
                                <span className='font-light'>Gondia</span>
                            </div>
                            <div className='mb-2'>
                                <span className='font-medium mr-4 text-gray-400'>From: </span>
                                <span className='font-light'>Gondia</span>
                            </div>
                            <div className='mb-2'>
                                <span className='font-medium mr-4 text-gray-400'>Relationship: </span>
                                <span className='font-light'>Single</span>
                            </div>
                        </div>
                        <h1 className='text-lg mb-2 font-medium'> Friends</h1>
                        <div className='flex flex-wrap justify-between '>
                            <div className='flex flex-col mb-5 cursor-pointer'>
                                <img src={Person1} alt="" className='w-20 h-20 object-cover rounded' />
                                <span>Jane Doe</span>
                            </div>
                            <div className='flex flex-col mb-5 cursor-pointer'>
                                <img src={Person1} alt="" className='w-20 h-20 object-cover rounded' />
                                <span>Jane Doe</span>
                            </div>
                            <div className='flex flex-col mb-5 cursor-pointer'>
                                <img src={Person1} alt="" className='w-20 h-20 object-cover rounded' />
                                <span>Jane Doe</span>
                            </div>
                            <div className='flex flex-col mb-5 cursor-pointer'>
                                <img src={Person1} alt="" className='w-20 h-20 object-cover rounded' />
                                <span>Jane Doe</span>
                            </div>
                            <div className='flex flex-col mb-5 cursor-pointer'>
                                <img src={Person1} alt="" className='w-20 h-20 object-cover rounded' />
                                <span>Jane Doe</span>
                            </div>
                            <div className='flex flex-col mb-5 cursor-pointer'>
                                <img src={Person1} alt="" className='w-20 h-20 object-cover rounded' />
                                <span>Jane Doe</span>
                            </div>
                            <div className='flex flex-col mb-5 cursor-pointer'>
                                <img src={Person1} alt="" className='w-20 h-20 object-cover rounded' />
                                <span>Jane Doe</span>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default RightSideBar