import React from 'react'
import Person1 from "../assets/persons/person1.jpg"
import { MdPermMedia, MdOutlineEmojiEmotions, MdLocationPin } from "react-icons/md"
import { AiFillTag } from "react-icons/ai"

const Share = () => {
    return (
        <div className='w-full h-44 rounded-lg shadow-md'>
            <div className='p-2 '>
                <div className='flex items-center'>
                    <img src={Person1} alt="" className='w-12 h-12 rounded-full object-cover mr-2' />
                    <input type="text" className='border-none w-4/5 focus:outline-none' placeholder='Post some content' />
                </div>
                <hr className='m-5' />
                <div className='flex items-center justify-between '>
                    <div className='flex ml-5'>
                        <div className='flex items-center gap-3 mr-4 cursor-pointer'>
                            <MdPermMedia size={18} className="red"></MdPermMedia>
                            <span className='text-sm font-medium'>Photo or Video</span>
                        </div>
                        <div className='flex items-center gap-3 mr-4 cursor-pointer'>
                            <MdOutlineEmojiEmotions size={18} className="gold"></MdOutlineEmojiEmotions>
                            <span className='text-sm font-medium'>Emotions</span>
                        </div>
                        <div className='flex items-center gap-3 mr-4 cursor-pointer'>
                            <AiFillTag size={18} color="brown"></AiFillTag>
                            <span className='text-sm font-medium'>Tag</span>
                        </div>
                        <div className='flex items-center gap-3 mr-4 cursor-pointer'>
                            <MdLocationPin size={18} color="skyblue"></MdLocationPin>
                            <span className='text-sm font-medium'>Location</span>
                        </div>
                    </div>
                    <button className='border-none p-2 rounded bg-blue-500 font-medium text-white'>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share