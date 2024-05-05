import etron from "@/assets/img/logo/react-logo.png";
import { FaBehanceSquare, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";

interface IProp {
  hideLeftPart: boolean,
  setHideLeftPart: (value: boolean) => void;
}

const LeftPart = (props: IProp) => {
  return (
    <>
      <div className={props.hideLeftPart ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#"><img src={etron} alt="desktop-logo" /></a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact Me</a></li>
            </ul>
          </div>
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a href="#">
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaSquareInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaBehanceSquare />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGithubSquare />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            className={props.hideLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"}
            href="#"
            onClick={() => { props.setHideLeftPart(!props.hideLeftPart); }}
          >
            <i className={props.hideLeftPart ? "xcon-angle-left opened" : "xcon-angle-left"} ></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default LeftPart;