import React from 'react'
import { Link } from "react-router-dom";
import DiscoverNew from './DiscoverNew';
import Post from './Post';
import Trending_Post from './Trending_Post';

const Hero_Header = () => {
  return (
    <>
      <div className='bg-[#FFC017] border-y border-black h-128 flex px-20'>
        <div>
          <h1 className='text-[6.5rem] font-Lalarona mt-20'>Stay curious.</h1>
          <p className='text-2xl text-gray-900 font-medium font-Domino w-3/5 my-6'>Discover stories, thinking, and expertise from writers on any topic.</p>
          <div>
            <Link to="/">
              <button className="py-2 w-54 content-center font-medium my-10 text-xl font-Domino bg-stone-900 hover:bg-black rounded-full text-white">Start reading</button>
            </Link>
          </div>
        </div>
        <div>
        </div>
      </div>
      <Trending_Post />
      <div className='flex '>
        <Post />
        <div>
          <DiscoverNew />
        </div>
        <hr />
      </div>
    </>
  )
}

export default Hero_Header
