import { useEffect, useCallback, useRef } from 'react';

const useOutsideClick = callback => {
  const ref = useRef(null);

  const handleClick = useCallback(
    e => {
      if (ref.current && ref.current.contains(e.target)) {
        return;
      }
      callback();
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleClick]);

  return ref;
};

export default useOutsideClick;
