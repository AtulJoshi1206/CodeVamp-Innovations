import React, { useState, useEffect } from 'react';

const quotes = [
  "Innovate, Create, Dominate.",
  "Turning Ideas into Digital Reality.",
  "Code with Purpose, Build with Passion.",
  "Solving Tomorrow's Problems Today."
];

export const QuoteCarousel = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="relative h-12 overflow-hidden">
          {quotes.map((quote, index) => (
            <p
              key={quote}
              className={`absolute w-full text-center text-2xl font-light text-gray-300 transition-all duration-1000 transform ${
                index === currentQuote
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-full opacity-0'
              }`}
            >
              "{quote}"
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}