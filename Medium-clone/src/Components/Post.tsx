import React from 'react'

const Post = () => {
    return (
        <div className='ml-20 '>
            <div className='my-10'>
                <div className='flex text-[#191919]'>
                    <div>
                        <div className='flex items-center mb-1'>
                            <div>
                                <img className='h-6 w-6 rounded-full' src="https://miro.medium.com/fit/c/40/40/1*LJ3yf4JA7s71hQFzvoOt7Q@2x.jpeg" alt="image" />
                            </div>
                            <div className='px-1'>
                                Lauren Elizabeth
                            </div>
                        </div>
                        <h1 className='mr-10 text-2xl font-bold'>To the Men Celebrating the Death of Roe vs. Wade.</h1>
                        <p className='text-gray-700 mb-2 text-[1.1rem] my-2'>An open letter to the cheerleading conservatives.</p>
                        <div className='flex justify-between items-center my-2'>
                            <div className='flex items-center text-[1rem] text-gray-700'>
                                <div className='items-center pr-1'>Jun 11</div>
                                <div className='items-center pb-1 font-bold'>.</div>
                                <div className='items-center px-1'>20 min read</div>
                                <div className='items-center px-1 font-bold'>.</div>
                                <div className='items-center mx-1 px-2 bg-gray-200 duration-300 hover:bg-gray-300 rounded-full p-1'>Psychology</div>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            <div className='mx-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25 " fill="currentColor" className="h-7 w-7">
                                        <path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='items-center flex'>
                        <img src="https://miro.medium.com/fit/c/200/134/0*-OJth1krbVcGAKLJ" height="150px" width="200px" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
