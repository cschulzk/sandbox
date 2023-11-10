import React, { useState, useEffect } from 'react';

// Have this type out a short poem or something.
// Have it pause extra long at periods

function TypingEffect({text}: {text: string}) {
  const [displayText, setDisplayText] = useState<string[]>([]); // Text that's currently displayed
  const delay = 500; // Delay in ms
  
  useEffect(() => {
    let index = 0; // This should almost certainly be a state variable.
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText: string[]) => {
          index++;
          if (prevText.length === text.length) return prevText;
          return [...prevText, text[prevText.length]]
        });
      } else {
        clearInterval(interval);
      }
    }, delay);
  }, [text]);

  return (
    <div>
      {displayText.join('')}
    </div>
  );
};

export default TypingEffect;
