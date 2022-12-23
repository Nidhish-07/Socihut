import React from 'react'
import { BiSearch, BiNotification } from "react-icons/bi"
import { BsPersonFill, BsFillChatLeftDotsFill } from "react-icons/bs"
import Person1 from "../assets/persons/person1.jpg"

const Header = () => {
    return (
        <div className='h-12 w-full bg-blue-500 flex items-center sticky top-0'>
            {/* left div */}
            <div className='flex-[3] '>
                <span className='text-2xl ml-5 text-white font-bold cursor-pointer'>Logo</span>
            </div>
            {/* center div */}
            <div className='flex-[5]'>
                <div className='flex items-center w-full h-7 bg-white rounded-xl p-2'>
                    <BiSearch size={22}></BiSearch>
                    <input type="text" className='border-none w-3/4 focus:outline-none' placeholder='Search for' />
                </div>
            </div>
            {/* right div */}
            <div className='flex-[4] flex items-center justify-around text-white'>
                <div className="">
                    <span className='mr-2 text-sm cursor-pointer font-medium'>Homepage</span>
                    <span className='mr-2 text-sm cursor-pointer font-medium'> Timeline</span>
                </div>
                <div className='flex gap-3'>
                    <div className='flex mr-4 cursor-pointer relative '>
                        <BsPersonFill></BsPersonFill>
                        <span className='w-4 h-4 bg-red-600 rounded-[50%] text-white absolute top-1 left-[18px] text-xs flex items-center'>1</span>
                    </div>
                    <div className='flex mr-4 cursor-pointer relative'>
                        <BsFillChatLeftDotsFill></BsFillChatLeftDotsFill>
                        <span className='w-4 h-4 bg-red-600 rounded-[50%] text-white absolute top-1 left-[18px] text-xs flex items-center'>2</span>
                    </div>
                    <div className='flex mr-4 cursor-pointer relative'>
                        <BiNotification></BiNotification>
                        <span className='w-4 h-4 bg-red-600 rounded-[50%] text-white absolute top-1 left-[18px] text-xs flex items-center'>1</span>
                    </div>
                </div>
                <img src={Person1} alt="" className='w-8 h-8 rounded-full object-cover cursor-pointer' />
            </div>
        </div>
    )
}

export default Header