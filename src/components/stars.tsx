"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsStarFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

// Define types for the API response and component state
interface GitHubRepo {
  stargazers_count: number;
}

const GitHubStars: React.FC = () => {
  const [stars, setStars] = useState<number | null>(null); // Store the number of stars
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    // URL of the GitHub repository API
    const repoUrl = 'https://api.github.com/repos/ZathuraDbg/ZathuraDbg';

    // Fetch the star count
    axios
      .get<GitHubRepo>(repoUrl) // Type the response using GitHubRepo interface
      .then((response) => {
        setStars(response.data.stargazers_count); // Get the number of stars from the response
        setLoading(false); // Stop loading
      })
      .catch(() => {
        setError('Failed to fetch stars'); // Set error message if the request fails
        setLoading(false); // Stop loading
      });
  }, []);

  // Return loading, error, or the stars count
  if (loading) return <div className='w-20 h-5 bg-zinc-500/50 rounded-full animate-pulse'></div>;
  if (error) return <></>;

  return (
    <div className='flex items-center gap-2 w-fit rounded-full px-4 py-1 shadow-xl bg-gradient-to-b border-2 border-zinc-600 from-zinc-950 to-zinc-800'>
      <motion.h2 
      initial={{
        scale: 0,
        rotate: '360deg'
      }}
      animate={{
        scale:1,
        rotate:0
      }}
      transition={{
        duration: .4,
        ease: 'anticipate'
      }}
      className='text-yellow-500'><BsStarFill/></motion.h2>
      <p className='text-zinc-50'>{stars} stars</p>
    </div>
  );
};

export default GitHubStars;
