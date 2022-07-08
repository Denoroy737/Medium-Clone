import React from 'react'

const DiscoverNew = () => {
  return (
    <div className='my-10 mx-20'>
      <div className='subpixel-antialiased text-sm font-title font-extrabold text-[#191919]'>DISCOVER MORE OF WHAT MATTERS TO YOU</div>
      <div className=' my-5 text-gray-500 flex flex-wrap w-96'>
        <div className='mr-2 my-2'>
          <button className='px-4 py-1.5 border border-gray-300'>Self</button>
        </div>
        <div className='mr-2 my-2'>
          <button className='px-4 py-1.5 border border-gray-300'>Relationships</button>
        </div>
        <div className='mr-2 my-2'>
          <button className='px-4 py-1.5 border border-gray-300'>Data Science</button>
        </div>
        <div className='mr-2 my-2'>
          <button className='px-4 py-1.5 border border-gray-300'>Programming</button>
        </div>
        <div className='mr-2 my-2'>
          <button className='px-4 py-1.5 border border-gray-300'>Javascript</button>
        </div>
        <div className='mr-2 my-2'>
          <button className='px-4 py-1.5 border border-gray-300'>Productivity</button>
        </div>
        <div className='mr-2 my-2'>
          <button className='px-4 py-1.5 border border-gray-300'>Machine Learning</button>
        </div>
      </div>
      <hr />
      <div className='my-5 flex flex-wrap w-96 text-gray-500'>
        <div className='mx-2'>Help</div>
        <div className='mx-2'>Status</div>
        <div className='mx-2'>Writers</div>
        <div className='mx-2'>Blog</div>
        <div className='mx-2'>Careers</div>
        <div className='mx-2'>Privacy</div>
        <div className='mx-2'>Terms</div>
        <div className='mx-2'>About</div>
        <div className='mx-2'>Knowable</div>
      </div>
    </div>
  )
}

export default DiscoverNew
