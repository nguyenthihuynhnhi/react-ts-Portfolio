import React from 'react';
import HomeCV from './content/HomeCV';
import About from './content/About';
import Skills from './content/Skills';
import Projects from './content/Projects';
import Contact from './content/Contact';

interface IProp {
  hideLeftPart: boolean,
  setHideLeftPart: (value: boolean) => void;
}

const RightPart = (props: IProp) => {
  return (
    <>
      <div className={props.hideLeftPart ? "arlo_tm_rightpart opened" : "arlo_tm_rightpart"}>
        <div className="rightpart_inner">
          <HomeCV />

          {/* <!-- ABOUT -->*/}
          <About />
          {/* <!-- /ABOUT -->*/}

          {/* <!-- SKILLS -->*/}
          <Skills />
          {/* <!-- /SKILLS -->*/}

          {/* <!-- SERVICES -->*/}
          <Projects />
          {/* <!-- /SERVICES -->*/}

          {/* <!-- CONTACT & FOOTER -->*/}
          <Contact />
          {/* <!-- /CONTACT & FOOTER -->*/}

        </div>
      </div>
    </>
  );
};

export default RightPart;