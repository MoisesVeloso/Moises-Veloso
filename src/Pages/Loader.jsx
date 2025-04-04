import { Helix } from 'ldrs/react';
import 'ldrs/react/Helix.css';
import { useState, useEffect } from 'react';

function Loader({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false); 
      if (onComplete) onComplete(); 
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return show ? (
    <div className="flex justify-center items-center min-h-screen">
      <Helix size="150" speed="1" color="white" />
    </div>
  ) : null;
}

export default Loader;
