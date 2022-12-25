import React from 'react'
import Post from './Post'
import Share from './Share'
import { Posts } from '../dummyData'

const Feed = () => {
    return (
        <div className='flex-[6]'>
            <div className='p-5'>

                <Share></Share>
                {Posts.map(post => (
                    <Post key={post.id} post={post}></Post>))}
            </div>
        </div>
    )
}

export default Feed