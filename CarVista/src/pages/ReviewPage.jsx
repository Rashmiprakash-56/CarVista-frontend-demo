import React from 'react'
import ReviewCard from '../components/ReviewCard'

function ReviewPage() {
  return (
    <div className="w-screen h-auto p-8">
      <div className="flex justify-end mb-4">
        <button 
        className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 hover:font-bold transition duration-300">
          Add Review
        </button>
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      </div>
    </div>
  )
}

export default ReviewPage