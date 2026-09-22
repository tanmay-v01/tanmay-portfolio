'use client';

import { useEffect, useState } from 'react';

export interface TypingPhrase {
  text: string;
  color: string;
  key: string;
}

export const PHRASES: TypingPhrase[] = [
  { text: 'design.', color: '#8b5cf6', key: 'design' }, // Pastel Violet / Lavender
  { text: 'build.',  color: '#0ea5e9', key: 'build'  }, // Pastel Sky / Cerulean
  { text: 'think.',  color: '#f43f5e', key: 'think'  }, // Pastel Coral / Rose
  { text: 'solve.',  color: '#10b981', key: 'solve'  }, // Pastel Mint / Emerald
];

export default function useTypingEffect() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentItem = PHRASES[phraseIndex];
    const currentPhrase = currentItem.text;
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentPhrase.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 100);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at end before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 55);
    } else if (isDeleting && charIndex === 0) {
      // Move to next phrase
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  const currentItem = PHRASES[phraseIndex];

  return {
    displayText,
    currentColor: currentItem.color,
    currentKey: currentItem.key,
  };
}
