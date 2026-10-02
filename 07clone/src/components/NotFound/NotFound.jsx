import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] px-4 text-center">
      <h1 className="text-7xl font-extrabold text-orange-700">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-gray-800 sm:text-3xl">Page Not Found</h2>
      <p className="mt-2 text-gray-600 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center px-6 py-3 text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg transition duration-200"
      >
        Go back home
      </Link>
    </div>
  )
}
