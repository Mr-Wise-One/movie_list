import { useState, useEffect } from 'react';

const getIsMobile = () =>
  window.innerWidth <= 1024 && window.innerWidth <= window.innerHeight;

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return isMobile;
}