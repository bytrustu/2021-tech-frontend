import React, { useState, useEffect } from 'react';
import './style.css';
import Detail from './Detail';
import dummyData from './dummyData';

const App = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const togglePopover = index => e => {
    e.preventDefault();
    e.stopPropagation();
    setOpenIndex(openIndex === index ? null : index);
  };

  const closeAll = (e) => {
    if (e.target.nodeName !== 'P') setOpenIndex(null);
  };

  useEffect(() => {
    document.body.addEventListener('click', closeAll);
    return () => {
      document.body.removeEventListener('click', closeAll);
    };
  }, []);

  return (
    <div className="wrapper">
      {
        dummyData.map(({ text, context }, i) =>
          <Detail
            key={`detail${i}`}
            text={text}
            context={context}
            onToggle={togglePopover(i)}
            open={openIndex === i}
          />)
      }
    </div>
  );
};

export default App;
