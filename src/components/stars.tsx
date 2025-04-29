"use client";

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { AnimatedNumber } from './motion-primitives/animated-numbers';
import { contribute } from '@/cms';

interface GitHubRepo {
  stargazers_count: number;
}

const GitHubStars: React.FC = () => {
  const [stars, setStars] = useState<number>(0);
  const [cachestars, setCacheStars] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  // Fetch on mount and cache the value
  useEffect(() => {
    const fetchStars = async () => {
      try {
        const repoUrl = 'https://api.github.com/repos/ZathuraDbg/ZathuraDbg';
        const response = await axios.get<GitHubRepo>(repoUrl);
        setCacheStars(response.data.stargazers_count);
      } catch {
        setError('Failed to fetch stars');
      }
    };

    fetchStars();
  }, []);

  // Animate only when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && cachestars > 0) {
          setStars(cachestars); // use cached value for animation
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [cachestars]);

  if (error) return null;

  return (
    <div ref={ref} className='flex flex-col w-full items-center gap-2 pt-10 sm:pt-16 md:pt-20'>
      <p className='text-[8.2vw] relative sm:text-[7vw] md:text-[6.5vw] lg:text-[5.5vw]'>
        <AnimatedNumber
          springOptions={{
            bounce: 0,
            duration: 1000,
          }}
          value={stars}
        />
        + stars on Github
      </p>
      <a href={contribute}>
        <button className='hover:underline cursor-pointer'>Add Yours Now</button>
      </a>
    </div>
  );
};

export default GitHubStars;
