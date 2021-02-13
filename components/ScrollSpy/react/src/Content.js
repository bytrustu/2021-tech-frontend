import React, { forwardRef } from 'react';

const Content = ({ page }, ref) => {
  return (
    <div ref={ref}>
      {page}
    </div>
  );
};

export default forwardRef(Content);
