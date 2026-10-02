import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()
    const followers = data?.followers ?? 0
    const avatar = data?.avatar_url
    const name = data?.name || data?.login || 'Hitesh Choudhary'

    return (
        <div className='flex flex-col items-center justify-center m-6 bg-gray-700 text-white p-6 rounded-xl shadow-lg max-w-xl mx-auto'>
            <h2 className='text-3xl font-bold mb-2'>{name}</h2>
            <p className='text-xl text-orange-400 font-semibold mb-4'>Github followers: {followers}</p>
            {avatar && (
                <img
                    src={avatar}
                    alt={`${name}'s Github avatar`}
                    width={300}
                    className='rounded-full border-4 border-orange-500 shadow-md'
                />
            )}
        </div>
    )
}
