"use client"
import Link from 'next/link';
import React from 'react';

const ErrorPage= () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center p-5 max-w-xs mx-auto">
        {/* Logo Section */}
        <img 
          src="/zathura/logo.webp" 
          alt="Zathura DGB Logo"
          className="mx-auto mb-4 w-32 h-32 object-contain"
        />
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="text-xl mt-2 text-gray-700">Page Not Found</p>
        <p className="text-lg mt-4 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>
        {/* Link to Home */}
        <Link
          href="/"
          className="mt-6 inline-block text-blue-500 hover:text-blue-700 underline text-lg"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
