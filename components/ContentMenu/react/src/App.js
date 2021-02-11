import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Detail from './Detail';
import dummyData from './dummyData';
import ContextPortal from './ContextPortal';

const App = () => {

  const [openIndex, setOpenIndex] = useState(null);
  const detailRefs = useRef([]);

  const togglePopover = index => e => {
    e.preventDefault();
    e.stopPropagation();
    setOpenIndex(e.target.parentElement.open ? null : index);
  };

  const closeAll = () => {
    setOpenIndex(null);
  };

  useEffect(() => {
    document.body.addEventListener('click', closeAll);
    return () => {
      document.body.removeEventListener('click', closeAll);
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        {dummyData.map(({ text, context }, i) => (
          <Detail
            key={`detail${i}`}
            ref={r => (detailRefs.current[i] = r)}
            text={text}
            open={openIndex === i}
            onToggle={togglePopover(i)}
          />
        ))}
      </div>
      <ContextPortal
        target={detailRefs.current[openIndex]}
        children={<p>{dummyData[openIndex]?.context}</p>}
      />
    </>
  );
};

export default App;
