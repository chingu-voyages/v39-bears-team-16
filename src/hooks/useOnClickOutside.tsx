import React, { useEffect } from 'react';

const useOnClickOutside = (container, cb) => {
  useEffect(() => {
    const listener = (event) => {
      if (container && !container.contains(event.target)) {
        cb();
      }
    };

    document.addEventListener('click', listener);

    return () => document.removeEventListener('click', listener);
  }, [container, cb]);
};

export default useOnClickOutside;
