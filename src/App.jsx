import { useState } from 'react';
import { useIsMobile } from './Hooks';
import { DirectorSection, ScrollContainer } from './Components';

import './App.scss';

import data from './data';

function App() {
  const mobile = useIsMobile();

  const [sectionNum, setSectionNum] = useState(1);
  const [scroll, setScroll] = useState(true);

  return (
    <div className='App'>
      <ScrollContainer sectionNum={sectionNum} scroll={scroll}>
        {data.map((director, i) => {
          const { id, name, img, mobileImg, list } = director;
          return (
            <DirectorSection
              key={id}
              name={name}
              img={!mobile ? img : mobileImg}
              list={list}
              sectionId={i + 1}
              setSectionNum={setSectionNum}
              setScroll={setScroll}
            />
          );
        })}
      </ScrollContainer>
    </div>
  );
}

export default App;
