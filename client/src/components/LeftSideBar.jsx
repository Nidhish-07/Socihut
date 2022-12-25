import React from 'react'
import { MdRssFeed, MdGroups, MdBookmarks, MdWorkOutline, MdEvent, MdSchool } from "react-icons/md"
import { BsFillChatLeftDotsFill, BsPlayCircleFill, BsQuestionCircle } from "react-icons/bs"
import Person1 from "../assets/persons/person1.jpg"
import { Users } from '../dummyData'

const LeftSideBar = () => {
    return (
        <div className='flex-[3] h-[calc(100vh_-_48px)] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 sticky top-12'>
            <div className='p-5'>
                <ul className='p-0 m-0'>
                    <li className='flex items-center mb-5 gap-4'>
                        <MdRssFeed></MdRssFeed>
                        <span>Feed</span>
                    </li>
                    <li className='flex items-center mb-5 gap-4'>
                        <BsFillChatLeftDotsFill></BsFillChatLeftDotsFill>
                        <span>Chats</span>
                    </li>
                    <li className='flex items-center mb-5 gap-4'>
                        <BsPlayCircleFill></BsPlayCircleFill>
                        <span>Videos</span>
                    </li>
                    <li className='flex items-center mb-5 gap-4'>
                        <MdGroups></MdGroups>
                        <span>Groups</span>
                    </li>
                    <li className='flex items-center mb-5 gap-4'>
                        <MdBookmarks></MdBookmarks>
                        <span>Bookmarks</span>
                    </li>
                    <li className='flex items-center mb-5 gap-4'>
                        <BsQuestionCircle></BsQuestionCircle>
                        <span>Questions</span>
                    </li>
                    <li className='flex items-center mb-5 gap-4'>
                        <MdWorkOutline></MdWorkOutline>
                        <span>Jobs</span>
                    </li>
                    <li className='flex items-center mb-5 gap-4'>
                        <MdEvent></MdEvent>
                        <span>Events</span>
                    </li>
                    <li className='flex items-center mb-5 gap-4'>
                        <MdSchool></MdSchool>
                        <span>Courses</span>
                    </li>
                </ul>

                <button className='w-36 border-none p-1 rounded font-medium bg-slate-200'>Show More</button>
                <hr className='my-5 mx-0' />
                <ul className='p-0 m-0 '>
                    {Users.map(user => (
                        <li className='flex items-center mb-4 gap-2' key={user.id}>
                            <img src={Person1} alt="" className='w-8 h-8 rounded-full object-cover ' />
                            <span>{user.username}</span>
                        </li>))}

                </ul>
            </div>
        </div>
    )
}

export default LeftSideBar