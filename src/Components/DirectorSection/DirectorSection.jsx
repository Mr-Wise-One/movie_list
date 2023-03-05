import { useState, useEffect } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useInView } from 'react-intersection-observer';

const DirectorSection = ({
  setScroll,
  setSectionNum,
  sectionId,
  name,
  img,
  list,
}) => {
  const [anim, setAnim] = useState(false);
  const [animCompleted, setAnimCompleted] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    inView && setSectionNum(sectionId);
    !anim ? setScroll(false) : setScroll(true);
  }, [inView, anim]);

  const showAnimation = () => {
    setAnim(true);
    setTimeout(() => {
      setAnimCompleted(true);
    }, 1000);
  };

  const hideAnimation = () => {
    setAnimCompleted(false);
    setTimeout(() => {
      setAnim(false);
    }, 100);
  };

  return (
    <section
      ref={ref}
      className={
        anim
          ? `director-section animate ${
              animCompleted ? 'animate-completed' : ''
            }`
          : 'director-section'
      }
    >
      <div className='mask' style={{ backgroundImage: `url(${img.font})` }}>
        <h2>{name}</h2>
        <button onClick={showAnimation}>Show The List</button>
      </div>
      <span className='close' onClick={hideAnimation}>
        <IoIosCloseCircleOutline style={{ height: '48px', width: '48px' }} />
      </span>
      <div className='inner'>
        <div className='bg'></div>
        <div className='img' style={{ backgroundImage: `url(${img.d})` }}></div>
        <div className='text'>
          <div className='box'>
            <h3>{name}</h3>
            <ol className='movie-list'>
              {list.map((m) => {
                return <li key={m}>{m}</li>;
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorSection;
