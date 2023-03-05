import React, { useRef } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';

const ScrollContainer = ({ children, sectionNum, scroll }) => {
  const containerRef = useRef(null);

  const scrollUp = () => {
    if (sectionNum > 1)
      containerRef.current.children[sectionNum - 1].scrollIntoView({
        behavior: 'smooth',
      });
  };
  const scrollDown = () => {
    if (sectionNum < 7)
      containerRef.current.children[sectionNum + 1].scrollIntoView({
        behavior: 'smooth',
      });
  };

  return (
    <div
      className={`scroll-container ${scroll ? 'scroll-disable' : ''}`}
      ref={containerRef}
    >
      <div className='scroll-btn-box'>
        <span
          className={`arrow ${sectionNum === 1 ? 'hide' : ''}`}
          onClick={scrollUp}
        >
          <IoIosArrowDropup style={{ height: '72px', width: '72px' }} />
        </span>
        <span
          className={`arrow ${sectionNum === 7 ? 'hide' : ''}`}
          onClick={scrollDown}
        >
          <IoIosArrowDropdown style={{ height: '72px', width: '72px' }} />
        </span>
      </div>
      {children}
    </div>
  );
};

export default ScrollContainer;
