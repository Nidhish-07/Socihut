import React from 'react'
import Post from './Post'
import Share from './Share'

const Feed = () => {
    return (
        <div className='flex-[6]'>
            <div className='p-5'>

                <Share></Share>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>
        </div>
    )
}

export default Feed