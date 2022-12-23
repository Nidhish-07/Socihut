import React from 'react'

import Person1 from "../assets/persons/person1.jpg"
import { IoMdMore } from "react-icons/io"
import { AiFillLike, AiFillHeart } from "react-icons/ai"

const Post = () => {
    return (
        <div className='w-full rounded-2 shadow-md my-7 mx-0'>
            <div className='p-2 '>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <img src={Person1} alt="" className='w-8 h-8 rounded-full object-cover' />
                        <span className='text-lg m-0 font-medium'>Name</span>
                        <span className='text-sm '>5 min ago</span>
                    </div>
                    <div>
                        <IoMdMore></IoMdMore>
                    </div>
                </div>
                <div className='my-5 mx-0 '>
                    <span>Lorem ipsum dolor sit amet.</span>
                    <img src={Person1} alt="" className='mt-5 w-full max-h-[500px] object-contain' />
                </div>
                <div className='flex item-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <AiFillHeart color='red' size={24} className="cursor-pointer" ></AiFillHeart>
                        <AiFillLike color='blue' size={24} className="cursor-pointer" ></AiFillLike>
                        <span className='text-base'>15 liked this post</span>
                    </div>
                    <div>
                        <span className='cursor-pointer border-b border-dashed border-b-gray-500 text-lg'>7 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post