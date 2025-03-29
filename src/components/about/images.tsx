import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // React Icons

const ImageCarousel = () => {
  const images = [
    './screenshot1.webp',
    './screenshot2.webp',
    './screenshot3.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextImage(); // Right arrow pressed, go to next image
      } else if (event.key === 'ArrowLeft') {
        prevImage(); // Left arrow pressed, go to previous image
      }
      else if (event.key==='f'){
        toggleFullscreen();
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Automatic image change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  // Change to the next image (slide to the right)
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Change to the previous image (slide to the left)
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    const element = document.getElementById('carousel');
    if (element) {
      if (document.fullscreenElement) {
        document.exitFullscreen(); // Exit fullscreen if already in fullscreen
      } else {
        element.requestFullscreen(); // Enter fullscreen
      }
    }
  };

  return (
    <div
      id="carousel"
      className="relative w-full rounded-3xl border-4 border-purple-400 overflow-hidden"
      onClick={toggleFullscreen} // Add onClick handler to enable fullscreen
    >
      {/* Carousel Images with Continuous Slide */}
      <div
        className="flex transition-transform rounded-3xl duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={index === 0 ? {} : { x: '100%' }} // No initial animation for first image
            animate={{ x: 0 }} // Slide into view for others
            exit={{ x: '-100%' }} // Slide out for others
            transition={{ duration: 1 }}
            className="flex-shrink-0 rounded-3xl w-full h-full"
          >
            <img
              src={image}
              alt={`carousel-image-${index}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Previous Button (using React Icons) */}
      <button
        aria-label="Previous Image"
        onClick={(e) => {
          e.stopPropagation(); // Prevent the fullscreen toggle
          prevImage(); // Go to the previous image
        }}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-200"
      >
        <AiOutlineLeft size={30} />
      </button>

      {/* Next Button (using React Icons) */}
      <button
        aria-label="Next Image"
        onClick={(e) => {
          e.stopPropagation(); // Prevent the fullscreen toggle
          nextImage(); // Go to the next image
        }}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-200"
      >
        <AiOutlineRight size={30} />
      </button>
    </div>
  );
};

export default ImageCarousel;
