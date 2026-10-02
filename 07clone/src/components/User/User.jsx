import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const { userid } = useParams()
    return (
        <div className='flex items-center justify-center my-8'>
            <div className='bg-gray-700 text-white text-3xl font-semibold p-6 rounded-xl shadow-md text-center max-w-md w-full mx-4'>
                User: <span className='text-orange-400'>{userid}</span>
            </div>
        </div>
    )
}