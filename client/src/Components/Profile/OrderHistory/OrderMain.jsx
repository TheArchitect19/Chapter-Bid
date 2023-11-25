import React from 'react'

export const OrderMain = () => {

  return (
    <div className="w-90% h-banner mx-6 py-4 overflow-x-auto">

        <div className="mt-2 py-2">
            <h1 className='text-2xl font-bold '>Your Orders</h1>
            <div className="border-2 h-40vh mt-4 rounded-xl">
                <div className="my-6 flex items-center justify-between border-b-2 mx-10 pb-2">
                    <span>
                        <span className="flex">
                            <h1 className='font-bold '>OrderID: 16693 </h1>  <h3 className='font-bold text-green-600 px-2'>Shipped</h3>
                        </span>
                        <span className="flex">
                            <h1 className='font-semibold text-gray-600 '>Date: 16 November 2023 </h1> 
                        </span>
                    </span>
                    <div >
                        <button className='px-4 h-8 border-2 border-red-700 hover:bg-red-700 hover:text-white font-semibold text-red-700'>Cancel Order</button>
                        <button className='px-4 mx-2 h-8 border-2 border-blue-700 font-semibold bg-blue-700 hover:bg-blue-900 text-white'>Track Order</button>
                    </div>
                </div>

                <div className="my-6 flex mx-10 pb-2">
                    <div className='mx-6'>
                        <img src="https://www.swampscottlibrary.org/wp-content/uploads/the-book-thief-two-covers.png" className='w-40' alt="" />
                    </div>

                    <div  className='w-3/5'>
                        <h1 className="text-l font-bold text-gray-700">
                            The Book Thief Two Covers
                        </h1>
                        <h2 className=" mt-0 text-l font-bold text-green-600">Rs. 69321</h2>
                        <div className="flex items-center w-3/5">
                            <div className='border-r-2 w-1/2'>
                                <h2 className=" mt-2 text-l font-semibold text-gray-600">Seller's Details</h2>
                                <p className="text-l font-semibold text-gray-600">
                                    Michael Jackson <br />
                                    Pensylvania, US <br />
                                    243601
                                </p>
                            </div>

                            <div className='ml-10'>
                                <h2 className=" mt-2 text-l font-semibold text-gray-600">Your Details</h2>
                                <p className="text-l font-semibold text-gray-600">
                                    Udit Gupta <br />
                                    Chandigarh, India <br />
                                    140413
                                </p>
                            </div>
                        </div>


                        
                    </div>
                </div>


            </div>

        </div>
            <div className="border-2 h-40vh mt-4 rounded-xl">
                <div className="my-6 flex items-center justify-between border-b-2 mx-10 pb-2">
                    <span>
                        <span className="flex">
                            <h1 className='font-bold '>OrderID: 16693 </h1>  <h3 className='font-bold text-green-600 px-2'>Shipped</h3>
                        </span>
                        <span className="flex">
                            <h1 className='font-semibold text-gray-600 '>Date: 16 November 2023 </h1> 
                        </span>
                    </span>
                    <div >
                        <button className='px-4 h-8 border-2 border-red-700 hover:bg-red-700 hover:text-white font-semibold text-red-700'>Cancel Order</button>
                        <button className='px-4 mx-2 h-8 border-2 border-blue-700 font-semibold bg-blue-700 hover:bg-blue-900 text-white'>Track Order</button>
                    </div>
                </div>

                <div className="my-6 flex mx-10 pb-2">
                    <div className='mx-6'>
                        <img src="https://www.swampscottlibrary.org/wp-content/uploads/the-book-thief-two-covers.png" className='w-40' alt="" />
                    </div>

                    <div  className='w-3/5'>
                        <h1 className="text-l font-bold text-gray-700">
                            The Book Thief Two Covers
                        </h1>
                        <h2 className=" mt-0 text-l font-bold text-green-600">Rs. 69321</h2>
                        <div className="flex items-center w-3/5">
                            <div className='border-r-2 w-1/2'>
                                <h2 className=" mt-2 text-l font-semibold text-gray-600">Seller's Details</h2>
                                <p className="text-l font-semibold text-gray-600">
                                    Michael Jackson <br />
                                    Pensylvania, US <br />
                                    243601
                                </p>
                            </div>

                            <div className='ml-10'>
                                <h2 className=" mt-2 text-l font-semibold text-gray-600">Your Details</h2>
                                <p className="text-l font-semibold text-gray-600">
                                    Udit Gupta <br />
                                    Chandigarh, India <br />
                                    140413
                                </p>
                            </div>
                        </div>


                        
                    </div>
                </div>


            </div>

        </div>

  )
}
