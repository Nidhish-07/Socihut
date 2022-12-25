import React from 'react'

import Person1 from "../assets/persons/person1.jpg"
import { IoMdMore } from "react-icons/io"
import { AiFillLike, AiFillHeart } from "react-icons/ai"
import { Users } from '../dummyData'

const Post = (props) => {

    const [like, setLike] = React.useState(props.post.like)
    const [isLiked, setIsLiked] = React.useState(false)

    const likeHandler = () => {
        setLike(isLiked ? prev => prev - 1 : prev => prev + 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className='w-full rounded-2 shadow-md my-7 mx-0'>
            <div className='p-2 '>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <img src={Users.filter(user => user.id === props.post.userId)[0].profilePicture} alt="" className='w-8 h-8 rounded-full object-cover' />
                        <span className='text-lg m-0 font-medium'>{Users.filter(user => user.id === props.post.userId)[0].username}</span>
                        <span className='text-sm '>{props.post.date}</span>
                    </div>
                    <div>
                        <IoMdMore></IoMdMore>
                    </div>
                </div>
                <div className='my-5 mx-0 '>
                    <span>{props.post?.desc}</span>
                    <img src={props.post.photo} alt="" className='mt-5 w-full max-h-[500px] object-contain' />
                </div>
                <div className='flex item-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <AiFillHeart color='red' size={24} className="cursor-pointer" ></AiFillHeart>
                        <AiFillLike color='blue' size={24} className="cursor-pointer" onClick={likeHandler}></AiFillLike>
                        <span className='text-base'>{like} likes</span>
                    </div>
                    <div>
                        <span className='cursor-pointer border-b border-dashed border-b-gray-500 text-lg'>{props.post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post