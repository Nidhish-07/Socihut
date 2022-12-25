import React from 'react'
import Feed from '../components/Feed'
import Header from '../components/Header'
import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar'
import Person1 from "../assets/persons/person1.jpg"

const Profile = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex  w-full'>

                <LeftSideBar></LeftSideBar>
                <div className='flex-[10]'>
                    <div className=''>
                        <div className='h-80 relative'>

                            <img src={Person1} alt="" className='w-full h-60 object-cover' />
                            <img src={Person1} alt="" className='w-36 h-36 rounded-full object-cover absolute left-0 right-0 m-auto top-36 border-4 border-solid border-white' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h2 className='text-2xl '>John Doe</h2>
                            <span className='font-light'>Lorem, ipsum dolor.</span>
                        </div>
                    </div>
                    <div className='flex'>

                        <Feed></Feed>
                        <RightSideBar profile={true}></RightSideBar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile