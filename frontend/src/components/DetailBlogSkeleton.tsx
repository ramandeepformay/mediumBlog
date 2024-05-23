
const DetailBlogSkeleton = () => {
    return <>
    <div className="flex justify-between mx-4 p-4 border-b-2 mb-4">

            <div className="text-2xl font-semibold">
                Medium
            </div>
            <div className="flex items-center">
                <div className="mx-2">
                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 ">New</button>

                </div>
                <div className="mr-6">
                    <svg className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                </div>

            </div>

        </div>

        <div>
            <div className="flex justify-center ">
                <div className="border-b border-slate-200  p-4 m-2 w-screen max-w-2xl cursor:pointer">
                    <div role="status" className="animate-pulse">
                        <div className="flex justify-between items-center w-auto ">
                            
                            <div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
                            <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className=" text-slate-400 text-lg font-thin w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <svg className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </div>
                        <div className="mt-2 text-3xl font-bold h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto">
                        </div>
                        <div className="mt-1 text-md h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto">
                        </div>
                        <div className="my-2 font-thin text-slate-400 h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

}

export default DetailBlogSkeleton;