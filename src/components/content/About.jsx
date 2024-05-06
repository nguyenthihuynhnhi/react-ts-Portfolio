import React, { useEffect, useRef } from 'react';
import intel from "@/assets/img/about/intel.jpg";
import cvPDF from "@/assets/img/about/ENG_NguyenThiHuynhNhi_FrontEnd_CV.pdf";
import { TypeAnimation } from 'react-type-animation';
import Parallax from 'parallax-js';
import avtIntel from "@/assets/img/about/intel.jpg";
import avt550 from "@/assets/img/about/550x640.jpg";


const About = () => {

  const sceneEl = useRef(null);

  useEffect(() => {

    if (sceneEl && sceneEl.current) {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true
      });

      parallaxInstance.enable();

      return () => parallaxInstance.disable();
    }

  }, []);

  return (
    <>
      <div className="arlo_tm_section relative" id="about" style={{ paddingTop: 100 }}>
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Main informations about me</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div className="about_image_wrap parallax" ref={sceneEl} data-relative-input="true">
                    <div className="image layer" data-depth="0.2">
                      <img src={avt550} alt="550x640" />
                      <div className="inner" style={{ backgroundImage: `url(${avtIntel})` }} ></div>
                    </div>
                    <div className="border layer" data-depth="0.6">
                      <img src={avt550} alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>

                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>I'm NGUYEN THI HUYNH NHI and <span className="arlo_tm_animation_text_word">
                      <TypeAnimation
                        sequence={[
                          'Freelencer',
                          2000,
                          'UI/UX Designer',
                          2000,
                          'Web Developer',
                          2000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                      />
                    </span></h4>
                  </div>

                  <div className="definition">
                    <p>Hello, i'm <strong>an aspiring front-end developer</strong> as I have a passion for coding.
                      <br /><br />
                      I love the problem solving nature of the work. I have found in my training that there is a wide variety of possible problems that may arise. I enjoy designing systems that limit problems and I also enjoy finding solutions for problems that do come up. I also like the creative aspect of the work.
                      <br />
                      In my spare time I like to create art. I found that in designing the layout of my ‘Netflix’ style thesis project gave me similar sense of satisfaction to the drawing of a beautiful picture.
                      <br /><br />
                      I am fluent at English. I have organised an exchange with a western teacher whereby I teach her child coding and she teaches me English. In this way my English has improved significantly over the past two years. I will be able to work with English speakers straight away.
                    </p>
                  </div>

                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span><label>Date of birth:</label> 01.03.1998 (Gen Z)</span>
                      </li>
                      <li>
                        <span><label>Sex:</label> Female</span>
                      </li>
                      <li>
                        <span><label>Education:</label> Nguyen Tat Thanh University</span>
                      </li>
                      <li>
                        <span><label>Git hub:</label> <a href="https://github.com/nguyenthihuynhnhi">NGUYEN THI HUYNH NHI</a></span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={cvPDF} download><span>Download CV</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;