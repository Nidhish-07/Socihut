import React from 'react'
import Feed from '../components/Feed'
import Header from '../components/Header'
import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex  w-full'>

                <LeftSideBar></LeftSideBar>
                <Feed></Feed>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    )
}

export default Home