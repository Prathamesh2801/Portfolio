// File: Typewriter.jsx

import React, { useState, useEffect } from 'react';
import '../styles/Typewriter.css'; // Include your CSS file

const Typewriter = ({ words, typingSpeed = 300, backspaceSpeed = 250, delay = 4000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing effect
        if (charIndex < currentWord.length) {
          setDisplayedText((prev) => prev + currentWord[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Backspacing effect
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          // Move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? backspaceSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWordIndex, words, typingSpeed, backspaceSpeed, delay]);

  return (
    <div className="typewriter">
      <span>{displayedText}</span>
      <span className="cursor"> </span>
    </div>
  );
};

export default Typewriter;
